import { useEffect, useRef } from 'react';
import Matter, { Engine, Render, Runner, MouseConstraint, Composite } from 'matter-js';
import Image from 'next/image';

const BallPool = () => {
    
  const matterBoxRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef<Engine>(Matter.Engine.create());
  const renderRef = useRef<Render | null>(null);
  const runnerRef = useRef<Runner>(Matter.Runner.create());
  const mouseConstraintRef = useRef<MouseConstraint | null>(null);

  useEffect(() => {
    const matterBox = matterBoxRef.current;
    if (!matterBox) {
      return; 
    }

    const engine = engineRef.current;

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

    const mouse = Matter.Mouse.create(render.canvas);
    mouseConstraintRef.current = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    if (mouseConstraintRef.current) {
      Matter.Composite.add(engine.world, mouseConstraintRef.current);
    }

    const texts = ['Pedro', 'João', 'Maria', 'Carlos', 'Lucas', 'Ana', 'Luca', 'Beatriz', 'Gabriel', 'Renata'];

    const stack = Matter.Composites.stack(50, 50, 10, 1, 10, 10, (x, y, column, row):any => {
      const randomRotation = Math.random() * 4 * Math.PI;
      const body = Matter.Bodies.rectangle(x, y, 161, 40, {
        restitution: 0.6,
        friction: 0.1,
        angle: randomRotation,
        render: {
            text:"pedro",
          fillStyle: 'transparent', 
          strokeStyle: '#6D1BBC', 
          lineWidth: 1,        
          borderRadius: 25,       
        },
      });

      
      body.text = texts[(row + column) % texts.length]; 
      return body;
    });

    Matter.Composite.add(engine.world, stack);

    const containerWidth = matterBox.clientWidth;
    const containerHeight = matterBox.clientHeight;

    Matter.Composite.add(engine.world, [
      Matter.Bodies.rectangle(containerWidth / 2, containerHeight + 25, containerWidth, 50, { isStatic: true, render: { fillStyle: 'transparent' } }), 
      Matter.Bodies.rectangle(-25, containerHeight / 2, 50, containerHeight, { isStatic: true, render: { fillStyle: 'transparent' } }), 
      Matter.Bodies.rectangle(containerWidth + 25, containerHeight / 2, 50, containerHeight, { isStatic: true, render: { fillStyle: 'transparent' } }),
      Matter.Bodies.rectangle(containerWidth / 2, -25, containerWidth, 50, { isStatic: true, render: { fillStyle: 'transparent' } }), 
    ]);
    Matter.Runner.run(runnerRef.current, engine);
    Matter.Render.run(render);

    
    const handleResize = () => {
      if (matterBox) {
        render.options.width = matterBox.clientWidth;
        render.options.height = matterBox.clientHeight;
        Matter.Render.setSize(render, matterBox.clientWidth, matterBox.clientHeight);
        Matter.Engine.update(engine);
      }
    };
    
    window.addEventListener('resize', handleResize);

    render.context.font = '20px Arial';
    render.context.textAlign = 'center';
    render.context.textBaseline = 'middle';

    
    Matter.Events.on(render, 'afterRender', () => {
      Composite.allBodies(engine.world).forEach((body:any) => {
        if (body.label === 'Rectangle') {
          render.context.fillStyle = '#fff';
          render.context.fillText(body.text, body.position.x, body.position.y);
        }
      });
    });

    return () => {
      if (engine && render) {
        Matter.World.clear(engine.world, false);
        Matter.Engine.clear(engine);
        Matter.Render.stop(render);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="about" className="mf:py-[136px] sx:mx-10 sx:px-[43px] mf:px-[43px] sx:py-[100px] flex sx:flex-col mf:flex-row justify-center text-center relative md:mx-auto mb-36 items-center mt-36 border border-[#380C69] md:w-[80%] sx:[90%] mf:w-[70%] rounded-[45px]">
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

      <div className="h-full sx:w-[40%] mf:w-full">
        <div ref={matterBoxRef} className="absolute top-0 sx:left-0 md:right-2 w-full h-full" />
      </div>
    </div>
  );
};

export default BallPool;
