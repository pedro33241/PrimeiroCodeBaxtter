"use client"
import Image from "next/image";
import "./style.css"

import "./layout/navBar/style.css"
import { partnerData } from "@/constant/variable";
export function MainIndex() {


  
    return (
      <>
        <section className="  h-auto ">

          <div className=" mx-auto flex justify-center items-center">
           
            <Image
              src="/quadrado.png"
              alt="Flint quadrados"
              width={1285.72}
              height={651.3}
              className="top-0 absolute mf:mt-0 sx:mt-24 "
              priority
            />
 
            <Image
              src="/Ellipse.svg"
              alt="Flint quadrados"
              width={0}
              height={1061}
              className="mf:w-[1335px] absolute  mf:h-[1062px] sx:h-screen sx:w-full  -mt-20"
            />
 
            <div
              className="absolute top-0 sx:w-full mf:w-[331px] mf:h-[139px] w-full"
              style={{
                backgroundImage: 'linear-gradient(to bottom, #1d0a30 10%, transparent 40%)',
              }}
            ></div>

            <div className="mx-auto sx:mt-44 mf:mt-80 justify-center   flex items-center text-center top-[20vh] w-full px-4">
              <div className="max-w-[1408px] w-full mx-auto">
                <aside className="mb-7 flex flex-wrap text-white md:text-xs sx:text-[11px] mf:text-base font-medium gap-[25px] justify-center">
                  <label className="border border-white p-2.5 rounded-[35px]" style={{ lineHeight: '22px', textUnderlinePosition: 'from-font', textDecorationSkip: 'none' }}>
                    Tecnologia
                  </label>
                  <label className="border border-white p-2.5 rounded-[35px]" style={{ lineHeight: '22px', textUnderlinePosition: 'from-font', textDecorationSkip: 'none' }}>
                    Marketing Digital
                  </label>
                  <label className="border border-white p-2.5 rounded-[35px]" style={{ lineHeight: '22px', textUnderlinePosition: 'from-font', textDecorationSkip: 'none' }}>
                    UX/UI Design
                  </label>
                  <label className="border border-white p-2.5 rounded-[35px] h" style={{ lineHeight: '22px', textUnderlinePosition: 'from-font', textDecorationSkip: 'none' }}>
                    Análise de Dados
                  </label>
                </aside>


                <h1 className="font-semibold md:text-[32px] sx:text-[22px] mf:text-[62px] text-white leading-tight  mx-auto w-full"
                  style={{  textUnderlinePosition: 'from-font', textDecorationSkip: 'none' }}>
                  Transformamos ideias em marcas impactantes e resultados que impulsionam o sucesso do seu&nbsp;negócio.
                </h1>
                <h2 className="text-[#FFFFFF99] w-full mx-auto font-normal md:text-[18px] sx:text-[14px] mf:text-[24px] text-center mt-4"
                  style={{ lineHeight: '30.24px', textUnderlinePosition: 'from-font', textDecorationSkip: 'none' }}>
                  Na Flint IT, acreditamos que cada empresa tem um potencial único.
                  Combinamos inovação em tecnologia e marketing digital para criar
                  soluções sob medida que geram resultados reais.
                </h2>


                <div className="partner-scroll-container sx:mt-12 mf:mt-32">
                  <div className="partner-scroll-content">
                    {partnerData?.map((item) => (
                      <Image
                        key={item.id}
                        src={`${item.url}`}
                        alt="Flint quadrados"
                        width={68}
                        height={68}
                        priority
                      />
                    ))}
                    {partnerData?.map((item) => (
                      <Image
                        key={`second-${item.id}`}
                        src={`${item.url}`}
                        alt="Flint quadrados"
                        width={68}
                        height={68}
                        priority
                      />
                    ))}
                  </div>
                </div>


                <aside className="cursor-pointer bg-[#5a5b5b] mx-auto text-center py-2 flex justify-center mt-8 w-[23.32px] rounded-[4px]">
                  <Image src="/Vector.svg" alt="Flint quadrados" width={9.98} height={5.87} priority />
                </aside>
              </div>
            </div>
          </div>

 
        </section>

        </>
    );
}