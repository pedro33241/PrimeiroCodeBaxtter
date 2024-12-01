 
import { NavBar } from "../../components/layout/navBar/navBar";
import { FooterApp } from "../../components/footer/footer";
import Image from "next/image";
import "../globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react";

import React from 'react';

const CasePage = () => {
   
  return (
    
    <>
    
<NavBar /> 
<div className="limit">
    
<div className="relative   px-5 mb-32 flex flex-col justify-center items-center mx-auto text-center h-screen">
   <Image
    src="/BackgroundGradiente.svg"
    alt="Flint quadrados"
    width={0}
    height={0}
    className="absolute h-full w-full "
    priority
  />

  <Image
    src="/message.svg"
    alt="Flint quadrados"
    width={450}
    height={450}
    className="relative mf:w-[450px] sx:w-[250px] z-10"
    priority
  />
<h1 className=" relative z-10 font-semibold md:text-[32px] sx:text-[22px] mf:text-[64px] text-white leading-tight  mx-auto mf:w-[1336px] sx:w-full "
                  style={{  textUnderlinePosition: 'from-font', textDecorationSkip: 'none' }}>
              Em breve: Transformações que Fazem a Diferença   </h1>

              <h2 className="mf:w-[1336px] sx:w-full relative z-10 text-[#FFFFFF99]  mx-auto font-normal md:text-[18px] sx:text-[14px] mf:text-[24px] text-center mt-4"
                  style={{  textUnderlinePosition: 'from-font', textDecorationSkip: 'none' }}>
                 Estamos trabalhando para trazer histórias inspiradoras dos nossos projetos bem-sucedidos. Aqui você verá como ajudamos empresas a alcançar seus objetivos com soluções criativas e personalizadas.  </h2>
</div>
 
  </div>
<FooterApp/>

<Analytics />
      <SpeedInsights /> 
  </>
  );
}

export default CasePage;
