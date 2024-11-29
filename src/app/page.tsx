"use client"
import Image from "next/image";

import { NavBar } from "@/components/layout/navBar/navBar";
import { MainIndex } from "@/components/main";
import { soluctionsData } from "../constant/variable";
import "./globals.css";
import { useState } from "react";

export default function Home() {

  const tabObject = [
    {
      id: 1,
      url: "/tecno.svg",
      title: "Tecnologia"
    }, {
      id: 2,
      url: "/design.svg",
      title: "UX/UI Design"
    }, {
      id: 3,
      url: "/arte.svg",
      title: "Arte Criativas"
    }, {
      id: 4,
      url: "/marketing.svg",
      title: "Marketing Digital"
    }, {
      id: 5,
      url: "/analise.svg",
      title: "Analise de Dados"
    }
  ]
  const [tab, setTab] = useState(1);
 
  return (
    <>

      <NavBar />
      <section className="limit text-white ">

        <MainIndex />

        <div className="w-full mf:px-16 sx:px-5 relative mt-36 mb-80">

          <aside className="sx:w-full mf:w-[1017px] ">
            <h1 className="font-semibold md:text-[32px] sx:text-[24px] mf:text-[48px] text-white" style={{ lineHeight: '60.48px', textUnderlinePosition: 'from-font', textDecorationSkip: 'none' }}>Nossos Soluções Estratégicas</h1>
            <h4 className="font-medium mf:text-[18px] md:text-[18px] sx:text-[14px] text-[#FFFFFF99]"
              style={{  textUnderlinePosition: 'from-font', textDecorationSkip: 'none' }}>Em um mercado dinâmico e competitivo, as empresas precisam de soluções inovadoras e confiáveis para impulsionar seu crescimento. A Flint IT se destaca por oferecer
            </h4>
          </aside>

          <div className="flex flex-wrap sx:justify-center mf:justify-around gap-14 mt-16">

            {soluctionsData?.map(item => (
              <aside
                key={item.id}
                className="sx:w-full md:w-[490px] text-white px-5 py-6  flex flex-col gap-6 rounded-xl "
                style={{
                  background: 'linear-gradient(90deg, rgba(139, 53, 232, 0.25) 0%, rgba(60, 9, 108, 0.25) 100%)',
                  border: '3px dashed #8B35E8'
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


        <article className="relative mt-32">

          <div className="mx-auto flex mt-32 justify-center items-center text-center   ">
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
                style={{  textUnderlinePosition: 'from-font', textDecorationSkip: 'none' }}>
                Nossos Serviços
              </h3>

              <h4 className="mt-8 text-center items-center mx-auto font-medium mf:text-[18px] md:text-[18px] sx:text-[14px] text-[#FFFFFF99] mf:w-[1017px] sx-w-full"
                style={{ textUnderlinePosition: 'from-font', textDecorationSkip: 'none' }}>
                Ajudamos muitas startups e empresas a projetar produtos digitais, sites, plataformas e aplicativos móveis de alta qualidade que atendem às metas de negócios e atendem às necessidades dos usuários.
              </h4>

              <aside className="..w-[1112px] overflow-auto gap-3 mt-3  flex  rounded-[35px] bg-[#2e244b] p-2 text-center justify-between" style={{ backdropFilter: 'blur(100px)' }}>

                {tabObject.map(item => (
                  <button
                    key={item?.id}
                    onClick={() => { setTab(item.id) }}
                    className={`rounded-3xl text-white  mf:text-lg sx:text-xs py-3 px-6 flex flex-row gap-4 ${tab == item?.id ? 'bg-[#7724CC] text-white' : ' text-[#F2F2F7]'}`}>
                    <Image
                      src={`${item?.url}`}
                      alt="Flint quadrados"
                      width={24}
                      height={24}
                      priority
                    /> {item?.title}</button>
                ))}
              </aside>

             
            </aside>
          
          </div>
          
            {tab == 1 && (
            <div className="backgroundImage relative mt-12 mf:mx-16 sx:mx-5 z-50 ">
              <div className="bg-[rgba(0,0,0,.1)] flex flex-col gap-4 absolute top-0 left-0 w-full h-full py-36 px-8">
                <h4 className="text-white text-base">Tecnologia</h4>
                <h2 className=" md:w-[783px] sx:w-full text-white font-semibold md:text-[36px] sx:text-[24px] mf:text-[58px]">Desenvolvimento e Inovação</h2>
                <h6 className="md:w-[783px] sx:w-full text-[#DFDFE0] mf:text-lg sx:text-xs">Na Flint IT, acreditamos que uma presença online robusta e sistemas de TI confiáveis são fundamentais para o sucesso de qualquer negócio. Por isso, oferecemos soluções completas em desenvolvimento web e cloud, projetadas para atender às suas necessidades e impulsionar seu crescimento rumo ao futuro.</h6>
             
                <ul className="flex flex-col gap-4 md:text-lg sx:text-xs font-semibold">
                  <li className="flex gap-3"> <Image src="/save.svg" alt="Flint" width={24} height={24} priority /> Sites e Portais Personalizados </li>
                  <li className="flex gap-3"> <Image src="/save.svg" alt="Flint" width={24} height={24} priority /> Lojas Virtuais </li>
                  <li className="flex gap-3"> <Image src="/save.svg" alt="Flint" width={24} height={24} priority /> Sistemas Web Complexos </li>
                  <li className="flex gap-3"> <Image src="/save.svg" alt="Flint" width={24} height={24} priority /> Integrações com APIs </li>
                  <li className="flex gap-3"> <Image src="/save.svg" alt="Flint" width={24} height={24} priority /> Softwares Sob Medida </li>
                </ul>
             
                <button className="flex  sx:w-full md:w-[243px] flex-row gap-3 border rounded-lg py-4 px-6 font-semibold md:text-lg sx:text-xs "> <Image src="/whatsapp.svg" alt="Flint" width={24} height={24} priority /> Entre&nbsp;em&nbsp;contacto</button>
              </div>
            </div>
         )}
        </article>




      </section> 
    </>
  );
}
