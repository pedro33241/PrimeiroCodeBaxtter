 
import Image from 'next/image';

const BallPool = () => {
 
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
      <p></p>   </div>
    </div>
  );
};

export default BallPool;
