import Image from 'next/image';

const BallPool = () => {
  return (
    <div id="about" className="mf:py-[136px] relative sx:mx-10 sx:px-[43px] mf:px-[43px] sx:py-[100px] flex sx:flex-col mf:flex-row sx:justify-center md:justify-normal text-left md:mx-auto mb-36 items-center mt-36 border border-[#380C69] md:w-[80%] sx:[90%] mf:w-[85%] rounded-[45px]">
      <Image
        src="/gradient.png"
        alt="Flint"
        width={1230}
        height={300}
        className="absolute rounded-[45px] left-0 w-full top-0"
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
      <div className="flex flex-col gap-2   sx:w-full mf:w-[793px] relative">
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

      {/* Segunda div com labels rotacionados */}
      <div className="sx:hidden mf:block  mt-12 md:mt-0">
        <label htmlFor="" className="md:absolute bottom-[72px] md:block right-0 -mr-9 w-[200px] py-[12px] text-center rounded-[15px] -mt-12" style={{ transform: 'rotate(-65deg)', border: '1px solid #6D1BBC' }}>Performance</label>
        <label htmlFor="" className="md:absolute bottom-24 md:block right-16 w-[148px] py-[12px] px-[24px] rounded-[15px] text-center -mt-12" style={{ transform: 'rotate(-40deg)', border: '1px solid #6D1BBC' }}>Usuários</label>
        <label htmlFor="" className="md:absolute bottom-16 md:block right-36 w-[199px] py-[12px] px-[24px] rounded-[15px] -mt-12 text-center" style={{ transform: 'rotate(50deg)', border: '1px solid #6D1BBC' }}>Crescimento</label>
        <label htmlFor="" className="md:absolute bottom-[74px] md:block right-52 w-[222px] py-[12px] px-[24px] rounded-[15px] -mt-12 text-center" style={{ transform: 'rotate(50deg)', border: '1px solid #6D1BBC' }}>Transformação</label>
        <label htmlFor="" className="md:absolute bottom-[179px] md:block right-48 w-[157px] py-[12px] px-[24px] rounded-[15px] -mt-12 text-center" style={{ transform: 'rotate(0deg)', border: '1px solid #6D1BBC' }}>Soluções</label>
        <label htmlFor="" className="md:absolute bottom-[30px] md:block right-[330px] w-[178px] py-[12px] px-[24px] rounded-[15px] -mt-12 text-center" style={{ transform: 'rotate(0deg)', border: '1px solid #6D1BBC' }}>Resultados</label>
        <label htmlFor="" className="md:absolute bottom-[10px] md:block right-[520px] w-[167px] py-[12px] px-[24px] rounded-[15px] -mt-12 text-center" style={{ transform: 'rotate(0deg)', border: '1px solid #6D1BBC' }}>Estratégia</label>
        <label htmlFor="" className="md:absolute bottom-[100px] md:block right-[430px] w-[176px] py-[12px] px-[24px] rounded-[15px] -mt-12 text-center" style={{ transform: 'rotate(0deg)', border: '1px solid #6D1BBC' }}>Tecnologia</label>
        <label htmlFor="" className="md:absolute bottom-[225px] md:block right-[380px] w-[176px] py-[12px] px-[24px] rounded-[15px] -mt-12 text-center" style={{ transform: 'rotate(65deg)', border: '1px solid #6D1BBC' }}>Evolução</label>
        <label htmlFor="" className="md:absolute bottom-[130px] md:block right-[570px] w-[161px] py-[12px] px-[24px] rounded-[15px] -mt-12 text-center" style={{ transform: 'rotate(120deg)', border: '1px solid #6D1BBC' }}>Eficiência</label>
        <label htmlFor="" className="md:absolute bottom-[65px] md:block right-[720px] w-[155px] py-[12px] px-[24px] rounded-[15px] -mt-12 text-center" style={{ transform: 'rotate(0deg)', border: '1px solid #6D1BBC' }}>Inovação</label>
      </div>
    </div>
  );
};

export default BallPool;
