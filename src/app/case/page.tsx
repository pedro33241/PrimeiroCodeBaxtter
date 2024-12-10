import { NavBar } from "../../components/layout/navBar/navBar";
import { FooterApp } from "../../components/footer/footer";
import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";
import React from 'react';

const CasePage = () => {
  return (
    <>
      <NavBar />
      <div className="limit">

        <div className="relative px-5 sx:mb-32 mf:mb-72 flex flex-col justify-center items-center mx-auto text-center">

          <Image
            src="/BackgroundGradiente.svg"
            alt="Flint quadrados"
            width={0}
            height={0}
            className="absolute h-full w-full"
            priority
          />
          <Image
            src="/message.svg"
            alt="Flint quadrados"
            width={450}
            height={450}
            className="relative mf:w-[450px] sx:mt-36 mf:mt-56 sx:w-[250px] z-10"
            priority
          />

          {/* Título centralizado e responsivo */}
          <h1 className="relative z-10 font-semibold text-white leading-tight mx-auto text-center 
            md:text-[32px] sx:text-[22px] mf:text-[64px] w-full max-w-screen-lg">
            Em breve: Transformações que Fazem a Diferença
          </h1>

          {/* Subtítulo responsivo */}
          <h2 className="relative z-10 text-[#FFFFFF99] mx-auto font-normal text-center 
            md:text-[18px] sx:text-[14px] mf:text-[24px] mt-4 w-full max-w-screen-lg">
            Estamos trabalhando para trazer histórias inspiradoras dos nossos projetos bem-sucedidos. Aqui você verá como ajudamos empresas a alcançar seus objetivos com soluções criativas e personalizadas.
          </h2>
        </div>

      </div>
      <FooterApp />

      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default CasePage;
