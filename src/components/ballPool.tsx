import { useEffect, useRef } from 'react'; 
import Matter, { Engine, Render, Runner } from 'matter-js';
import Image from 'next/image';

const BallPool = () => {
  const matterBoxRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef<Engine>(Matter.Engine.create());
  const renderRef = useRef<Render | null>(null);
  const runnerRef = useRef<Runner>(Matter.Runner.create());
  const rectsRef = useRef<any[]>([]); // Array para armazenar referências dos retângulos

  // Função para salvar o estado das posições no localStorage
  const saveRectanglePositions = () => {
    const positions = rectsRef.current.map((rect: any) => ({
      x: rect.position.x,
      y: rect.position.y,
    }));
    localStorage.setItem('rectangles', JSON.stringify(positions));
  };

  // Função para restaurar as posições dos retângulos do localStorage
  const loadRectanglePositions = () => {
    const savedPositions = localStorage.getItem('rectangles');
    return savedPositions ? JSON.parse(savedPositions) : [];
  };

  useEffect(() => {
    const matterBox = matterBoxRef.current;
    if (!matterBox) return;

    const engine = engineRef.current;

    // Inicializando o renderizador do Matter.js
    const render = Matter.Render.create({
      element: matterBox,
      engine: engine,
      options: {
        width: matterBox.clientWidth,
        height: matterBox.clientHeight,
        wireframes: false,
        background: 'transparent',
      },
    });

    renderRef.current = render;

    // Inicializa os corpos (retângulos) com texto dentro
    const texts = ['Pedro', 'João', 'Maria', 'Carlos', 'Lucas', 'Ana', 'Luca', 'Beatriz', 'Gabriel', 'Renata'];

    const stack = Matter.Composites.stack(50, 50, 10, 1, 10, 10, (x:number, y:number, column:number, row:number) => {
      const randomRotation = Math.random() * 4 * Math.PI;
      const body = Matter.Bodies.rectangle(x, y, 161, 40, {
        restitution: 0.6,
        friction: 0.1,
        angle: randomRotation,
        render: {
          fillStyle: 'transparent', // Fundo transparente para o retângulo
          strokeStyle: '#6D1BBC', // Cor da borda do retângulo
          lineWidth: 1, // Espessura da borda
          sprite: {
            texture: '', // Não vamos usar uma imagem, o texto será renderizado com o estilo
            xScale: 1,
            yScale: 1,
            // Colocando o texto dentro do 
            },
        },
      });

      rectsRef.current.push(body); // Armazena os retângulos no array de referências
      return body;
    });

    Matter.Composite.add(engine.world, stack);

    // Configurando as bordas estáticas (não visíveis)
    const containerWidth = matterBox.clientWidth;
    const containerHeight = matterBox.clientHeight;

    Matter.Composite.add(engine.world, [
      Matter.Bodies.rectangle(containerWidth / 2, containerHeight + 25, containerWidth, 50, { isStatic: true, render: { fillStyle: 'transparent' } }),
      Matter.Bodies.rectangle(-25, containerHeight / 2, 50, containerHeight, { isStatic: true, render: { fillStyle: 'transparent' } }),
      Matter.Bodies.rectangle(containerWidth + 25, containerHeight / 2, 50, containerHeight, { isStatic: true, render: { fillStyle: 'transparent' } }),
      Matter.Bodies.rectangle(containerWidth / 2, -25, containerWidth, 50, { isStatic: true, render: { fillStyle: 'transparent' } }),
    ]);

    // Carregar as posições salvas do localStorage
    const savedPositions = loadRectanglePositions();
    savedPositions.forEach((pos: any, index: number) => {
      if (rectsRef.current[index]) {
        Matter.Body.setPosition(rectsRef.current[index], pos);
      }
    });

    Matter.Runner.run(runnerRef.current, engine);
    Matter.Render.run(render);

    // Função para mover os retângulos ao passar o mouse
    const moveRectangleWithMouse = (event: MouseEvent) => {
      const mouseX = event.clientX - matterBox.getBoundingClientRect().left;
      const mouseY = event.clientY - matterBox.getBoundingClientRect().top;

      // Detecta o corpo que está embaixo do mouse
      const bodiesUnderMouse = Matter.Query.point(rectsRef.current, { x: mouseX, y: mouseY });

      // Se houver retângulo sob o mouse, movê-lo para a posição do mouse
      if (bodiesUnderMouse.length > 0) {
        const bodyUnderMouse = bodiesUnderMouse[0]; // Pega o primeiro corpo embaixo do mouse
        // Aplica uma força para mover o retângulo suavemente
        const forceStrength = 0.02; // Reduzir a força para movimento mais lento
        const dx = mouseX - bodyUnderMouse.position.x;
        const dy = mouseY - bodyUnderMouse.position.y;

        // Aplica a força na direção do mouse
        Matter.Body.applyForce(bodyUnderMouse, bodyUnderMouse.position, { x: dx * forceStrength, y: dy * forceStrength });
      }
    };

    // Função para garantir que os retângulos fiquem dentro do bloco
    const keepInsideBounds = () => {
      const containerWidth = matterBox.clientWidth;
      const containerHeight = matterBox.clientHeight;

      rectsRef.current.forEach((rect: any) => {
        const rectWidth = rect.bounds.max.x - rect.bounds.min.x;
        const rectHeight = rect.bounds.max.y - rect.bounds.min.y;

        // Limita a posição dos retângulos para que fiquem dentro do container
        if (rect.position.x - rectWidth / 2 < 0) {
          Matter.Body.setPosition(rect, { x: rectWidth / 2, y: rect.position.y });
        } else if (rect.position.x + rectWidth / 2 > containerWidth) {
          Matter.Body.setPosition(rect, { x: containerWidth - rectWidth / 2, y: rect.position.y });
        }

        if (rect.position.y - rectHeight / 2 < 0) {
          Matter.Body.setPosition(rect, { x: rect.position.x, y: rectHeight / 2 });
        } else if (rect.position.y + rectHeight / 2 > containerHeight) {
          Matter.Body.setPosition(rect, { x: rect.position.x, y: containerHeight - rectHeight / 2 });
        }
      });
    };

    // Adiciona o ouvinte de evento 'mousemove' no contêiner
    matterBox.addEventListener('mousemove', moveRectangleWithMouse);

    // Função de atualização
    const update = () => {
      // Manter todos os retângulos dentro do bloco
      keepInsideBounds();
      saveRectanglePositions(); // Salva as posições atuais no localStorage
    };

    // Função de animação
    Matter.Events.on(engine, 'afterUpdate', update);

    // Função de limpeza para remover o ouvinte ao desmontar o componente
    return () => {
      if (matterBox) {
        matterBox.removeEventListener('mousemove', moveRectangleWithMouse);
      }
      if (engine && render) {
        Matter.World.clear(engine.world, false);
        Matter.Engine.clear(engine);
        Matter.Render.stop(render);
      }
    };
  }, []); // Somente executa o efeito uma vez, ao montar o componente

  return (
    <div id="about" className="mf:py-[136px] relative sx:mx-10 sx:px-[43px] mf:px-[43px] sx:py-[100px] flex sx:flex-col mf:flex-row justify-center text-center  md:mx-auto mb-36 items-center mt-36 border border-[#380C69] md:w-[80%] sx:[90%] mf:w-[70%] rounded-[45px]">
      <Image
        src="/gradient.png"
        alt="Flint"
        width={1230}
        height={300}
        className="absolute rounded-[45px] w-full top-0"
        priority
      />
      <Image
        src="/gradient2.png"
        alt="Flint"
        width={1230}
        height={300}
        className="absolute rounded-[45px] h-full w-full bottom-0 left-0"
        priority
      />
      <div className="flex flex-col gap-2 text-left sx:w-full mf:w-[793px] relative">
        <h4 className="text-white text-base">Tecnologia</h4>
        <h2 className="mf:w-[783px] md:w-[340px] sx:w-full text-white font-semibold sx:text-[24px] mf:text-[58px]">Flint IT é a sua escolha perfeita em termos de:</h2>
        <ul className="flex flex-col gap-4 sx:text-xs mf:text-lg font-semibold">
          <li className="flex gap-3"> <Image src="/save.svg" alt="Flint" width={24} height={24} priority /> Soluções Personalizadas para Cada Negócio. </li>
          <li className="flex gap-3"> <Image src="/save.svg" alt="Flint" width={24} height={24} priority />Especialistas em Tecnologias de Ponta.</li>
          <li className="flex gap-3"> <Image src="/save.svg" alt="Flint" width={24} height={24} priority />Resultados Mensuráveis e Impactantes.</li>
          <li className="flex gap-3"> <Image src="/save.svg" alt="Flint" width={24} height={24} priority /> Suporte Técnico e Acompanhamento Constante. </li>
          <li className="flex gap-3"> <Image src="/save.svg" alt="Flint" width={24} height={24} priority /> Equipe Multidisciplinar e Apaixonada. </li>
        </ul>
        <button className="relative z-50 flex mt-3 items-center justify-center sx:w-full md:w-[299px] bg-white flex-row gap-2 text-[#3C096C] rounded-lg py-4 px-6 font-semibold md:text-lg sx:text-[10px]">
          Descubra mais sobre nós <Image src="/send.svg" alt="Flint" width={24} height={24} priority />
        </button>
      </div>

    
      <div className="relative w-full">
        <div ref={matterBoxRef} className="absolute sx:hidden md:block  top-0 right-2 w-full sx:h-full mf:h-[300px]" />
      </div>
    </div>
  );
};

export default BallPool;
