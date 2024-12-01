"use client"
import Image from "next/image";

import { NavBar } from "@/components/layout/navBar/navBar";
import { FooterApp } from "@/components/footer/footer";
import { MainIndex } from "@/components/main";
import { partners, soluctionsData, tabObject } from "../constant/variable";
import "./globals.css";

import { useState } from "react";


export default function Home() {


  const [tab, setTab] = useState(1);

  return (
    <>

      <NavBar />
      <section className="limit text-white ">

        <MainIndex />

        <div className="w-full mf:px-16 sx:px-5 relative mt-36 sx:mb-36 mf:mb-80">

          <aside className="sx:w-full mf:w-[1017px] ">
            <h1 className="font-semibold md:text-[32px] sx:text-[24px] mf:text-[48px] text-white" style={{  textUnderlinePosition: 'from-font', textDecorationSkip: 'none' }}>Nossos Soluções Estratégicas</h1>
            <h4 className="font-medium mf:text-[18px] md:text-[18px] sx:text-[14px] text-[#FFFFFF99]"
              style={{ textUnderlinePosition: 'from-font', textDecorationSkip: 'none' }}>Em um mercado dinâmico e competitivo, as empresas precisam de soluções inovadoras e confiáveis para impulsionar seu crescimento. A Flint IT se destaca por oferecer
            </h4>
          </aside>

          <div className="flex flex-wrap sx:justify-center mf:justify-around gap-14 mt-16">

            {soluctionsData?.map(item => (
              <aside
                key={item.id}
                className="sx:w-full md:w-[490px] text-white px-5 py-6  flex flex-col gap-6 rounded-xl "
                style={{
                  background: 'linear-gradient(90deg, rgba(139, 53, 232, 0.25) 0%, rgba(60, 9, 108, 0.25) 100%)',
                  border: '2.5px dashed #8B35E8'
                }}>
                <Image

                  src={`${item.url}`}
                  alt="Flint quadrados"
                  width={68}
                  height={68}
                  priority
                />

                <div>
                  <h1 className="mf:text-[24px] sx:text-[15px] font-[600] mb-2">{item?.title}</h1>

                  <span className="font-normal sx:text-[11px] mf:text-[14px]">{item?.description}</span>
                </div>

              </aside>
            ))}



          </div>
        </div>


        <article className="relative  ">

          <div className="mx-auto flex justify-center items-center text-center   ">
            <Image

              src="/BackgroundGradiente.svg"
              alt="Flint quadrados"
              width={900}
              height={1000}
              className="absolute -mt-12 w-full"
              priority
            />

            <aside className="z-50 ">
              <h3 className="font-semibold md:text-[32px] sx:text-[24px] mf:text-[48px] text-white"
                style={{ textUnderlinePosition: 'from-font', textDecorationSkip: 'none' }}>
                Nossos Serviços
              </h3>

              <h4 className="mt-8 text-center items-center mx-auto font-medium mf:text-[18px] md:text-[18px] sx:text-[14px] text-[#FFFFFF99] mf:w-[1017px] sx:w-full"
                style={{ textUnderlinePosition: 'from-font', textDecorationSkip: 'none' }}>
                Ajudamos muitas startups e empresas a projetar produtos digitais, sites, plataformas e aplicativos móveis de alta qualidade que atendem às metas de negócios e atendem às necessidades dos usuários.
              </h4>

              <aside className=" mf:w-[1112px] sx:w-full relative overflow h-[66px] overflow-auto mt-3  flex  rounded-[35px] bg-[#2e244b] p-2  justify-between" style={{ backdropFilter: 'blur(100px)' }}>
                <div className="   absolute gap-3 justify-between flex flex-row text-center ">

                  {tabObject.map(item => (
                    <button
                      key={item?.id}
                      onClick={() => { setTab(item.id) }}
                      className={`w-[${item?.width}]  rounded-3xl transition-all duration-100 text-white mf:text-lg sx:text-xs py-3 sx:pr-16 sx:pl-8 mf:px-6 flex flex-row gap-4 ${tab == item?.id ? 'bg-[#7724CC] text-white' : ' hover:bg-[#271f40]  text-[#F2F2F7]'} no-break`}
                      >
                      <Image
                        src={`${item?.url}`}
                        alt="Flint quadrados"
                        width={24}
                        height={24}
                        priority
                      />
                      {item?.title}
                    </button>
                  ))}

                </div>
              </aside>


            </aside>

          </div>

          {tab == 1 && (
            <div className="backgroundImage relative mt-12 mf:mx-16 sx:mx-5 " >
     
              <Image

                src="/selo.svg"
                alt="Flint selo"
                width={80.42}
                height={91.07}
                className="absolute right-16 top-12"
                priority
              />
              <div className="bg-[rgba(0,0,0,.1)] flex flex-col gap-4  top-0 left-0 w-full h-full py-36 px-8">
                <h4 className="text-white text-base">Tecnologia</h4>
                <h2 className=" mf:w-[783px] md:w-[340px] sx:w-full text-white font-semibold md:text-[36px] sx:text-[24px] mf:text-[58px]">Desenvolvimento e Inovação</h2>
                <h6 className="mf:w-[783px] md:w-[340px] sx:w-full text-[#DFDFE0] mf:text-lg sx:text-xs">Na Flint IT, acreditamos que uma presença online robusta e sistemas de TI confiáveis são fundamentais para o sucesso de qualquer negócio. Por isso, oferecemos soluções completas em desenvolvimento web e cloud, projetadas para atender às suas necessidades e impulsionar seu crescimento rumo ao futuro.</h6>

                <ul className="flex flex-col gap-4 md:text-lg sx:text-xs font-semibold">
                  <li className="flex gap-3"> <Image src="/save.svg" alt="Flint" width={24} height={24} priority /> Sites e Portais Personalizados </li>
                  <li className="flex gap-3"> <Image src="/save.svg" alt="Flint" width={24} height={24} priority /> Lojas Virtuais </li>
                  <li className="flex gap-3"> <Image src="/save.svg" alt="Flint" width={24} height={24} priority /> Sistemas Web Complexos </li>
                  <li className="flex gap-3"> <Image src="/save.svg" alt="Flint" width={24} height={24} priority /> Integrações com APIs </li>
                  <li className="flex gap-3"> <Image src="/save.svg" alt="Flint" width={24} height={24} priority /> Softwares Sob Medida </li>
                </ul>

                <button className="flex   sx:w-full md:w-[243px] flex-row gap-3 hover:bg-[#7B2CBF] hover:border-[#7B2CBF] transition-all duraction-100  border rounded-lg py-4 px-6 font-semibold md:text-lg sx:text-xs "> <Image src="/whatsapp.svg" alt="Flint" width={24} height={24} priority /> Entre&nbsp;em&nbsp;contacto</button>
              </div>
            </div>
          )}
        </article>



        <div  id="about" className="flex flex-wrap justify-between relative mx-auto  mb-36 items-center mt-36 pb-3 border border-[#380C69] md:w-[80%] sx:[90%] mf:w-[70%]  rounded-[45px]">
          <Image

            src="/gradient.png"
            alt="Flint "
            width={1230}
            height={300}
            className="absolute rounded-[45px] w-full top-0"
            priority
          />
          <Image

            src="/gradient2.png"
            alt="Flint "
            width={1230}
            height={300}
            className="absolute rounded-[45px] h-full w-full bottom-0 left-0"
            priority
          />

          <div className="flex flex-col gap-2  relative sx:pt-20 md:pt-16 mf:pt-36 sx:px-14 mf:px-8">
            <h4 className="text-white text-base">Tecnologia</h4>
            <h2 className=" mf:w-[783px] md:w-[340px] sx:w-full text-white font-semibold  sx:text-[28px] mf:text-[58px]">Flint IT é a sua escolha perfeita em termos de:</h2>

            <ul className="flex flex-col gap-4 sx:text-xs mf:text-lg font-semibold">
              <li className="flex gap-3"> <Image src="/save.svg" alt="Flint" width={24} height={24} priority /> Soluções Personalizadas para Cada Negócio. </li>
              <li className="flex gap-3"> <Image src="/save.svg" alt="Flint" width={24} height={24} priority />Especialistas em Tecnologias de Ponta.</li>
              <li className="flex gap-3"> <Image src="/save.svg" alt="Flint" width={24} height={24} priority />Resultados Mensuráveis e Impactantes.</li>
              <li className="flex gap-3"> <Image src="/save.svg" alt="Flint" width={24} height={24} priority /> Suporte Técnico e Acompanhamento Constante. </li>
              <li className="flex gap-3"> <Image src="/save.svg" alt="Flint" width={24} height={24} priority /> Equipe Multidisciplinar e Apaixonada. </li>
            </ul>

            <button className="flex mt-3   items-center justify-center  sx:w-full md:w-[299px] bg-white flex-row gap-3 text-[#3C096C] rounded-lg py-4 px-6 font-semibold md:text-lg sx:text-xs "> Descubra&nbsp;mais&nbsp;sobre&nbsp;nós <Image src="/send.svg" alt="Flint" width={24} height={24} priority /></button>


          </div>


          <div className=" mt-44">
            <aside
              className="border-[#6D1BBC] -mt-5 rotated   md:w-[200px]  text-white border rounded-[15px] py-4 px-6 font-semibold md:text-2xl sx:text-xl "
              style={{ transform: 'rotate(-60deg)' }}>Performance</aside>

          </div>

        </div>

        <div id="testimony" className="mf:mx-16 sx:mx-5  mt-16 items-center justify-center flex flex-col text-center mx-auto">
  <h2
    className="sx:w-full mf:w-[1153px] font-semibold md:text-[32px] sx:text-[24px] mf:text-[48px] text-white"
    style={{ textUnderlinePosition: 'from-font', textDecorationSkip: 'none' }}
  >
    Nossos Parceiros encontram inúmeras razões por terem entrado em contato conosco.
  </h2>

  <div className="p-2 w-full relative mt-16 flex flex-row gap-4 justify-between overflow">
    {partners?.map(item => (
      <aside
        className="text-left flex flex-col gap-4 shrink-0 mf:w-[432px] sx:w-[280px]"  
        key={item?.id} 
      >
        <Image
          src={`${item?.icone}`}
          alt="Flint"
          width={45}
          height={45}
          priority
        />
        <label className="text-white mf:text-[16px] sx:text-[12px]">{item?.description}</label>

        <aside className="flex flex-row gap-2 items-center flex-nowrap"> 
          <Image
            src={`${item?.partnersLogo}`}
            alt="Flint"
            width={60}
            height={60}
            priority
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-white mf:text-[16px] sx:text-[12px] font-medium">{item?.partners}</h3>
            <span className="font-normal mf:text-[14px] sx:text-[12px] text-[#FFFFFF99]">
              {item?.partnersDescrible}
            </span>
          </div>
        </aside>
      </aside>
    ))}
  </div>
</div>


<FooterApp/>
      </section>
    </>
  );
}

