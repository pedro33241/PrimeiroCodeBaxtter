
import { NavBar } from "../../components/layout/navBar/navBar";
import { FooterApp } from "../../components/footer/footer";
import Image from "next/image";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";
import React from 'react';


const BlogPage = () => {
  return (
    <>
      <NavBar />
      <div className="limit">

        <div className=" relative px-5   sx:mb-32 mf:mb-72 flex   flex-col justify-center items-center mx-auto text-center ">

          <Image
            src="/BackgroundGradiente.svg"
            alt="Flint quadrados"
            width={0}
            height={0}
            className="absolute h-full w-full "
            priority
          />
          <Image
            src="/note.svg"
            alt="Flint quadrados"
            width={450}
            height={450}
            className="relative  mf:w-[450px] sx:mt-36 mf:mt-56 sx:w-[250px]  z-10"
            priority
          />
      
          <h1 className=" relative z-10 font-semibold md:text-[32px] sx:text-[22px] mf:text-[64px] text-white leading-tight  mx-auto w-full"
            style={{ textUnderlinePosition: 'from-font', textDecorationSkip: 'none' }}> Insights e Tendências: Conteúdo em Construção  </h1>
          
          <h2 className="mf:w-[1156px] sx:w-full relative z-10 text-[#FFFFFF99]  mx-auto font-normal md:text-[18px] sx:text-[14px] mf:text-[24px] text-center mt-4"
            style={{ textUnderlinePosition: 'from-font', textDecorationSkip: 'none' }}>
            Nosso blog está quase pronto para compartilhar artigos, dicas e novidades sobre tecnologia, design e estratégias de negócios.
          </h2>
        </div>

      </div>
      <FooterApp />

      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default BlogPage;