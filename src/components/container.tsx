"use client"
import Image from "next/image";
import "./style.css"
import { partnerData } from "./variable";
export function ArticleIndex() {


  
    return (
        <>
            <section>
            <div className="z-50  mx-auto flex justify-center items-center ">
                
                <Image
    src="/quadrado.png"
    alt="Flint quadrados"
    width={1285.72}
    height={651.3}
    className="top-0 absolute"
    priority
  />

                
                <Image
    src="/Ellipse.svg"
    alt="Flint quadrados"
    width={1135}
    height={1561}
    className="h-[70vh]   -mt-16"
    priority
  />

<Image
    src="/Ellipse2.svg"
    alt="Flint quadrados"
    width={1135}
    height={1561}
    className=" absolute top-0"
    priority
  />
         <div className="mx-auto  mt-36 justify-center absolute flex items-center text-center top-[20vh] w-full px-4">
                        <div className="max-w-[1408px] w-full mx-auto">
                            <aside className="mb-7 flex flex-wrap text-white text-base font-medium gap-[25px] justify-center">
                                <label className="border border-white p-2.5 rounded-[35px]">
                                    Tecnologia
                                </label>
                                <label className="border border-white p-2.5 rounded-[35px]">
                                    Marketing Digital
                                </label>
                                <label className="border border-white p-2.5 rounded-[35px]">
                                    UX/UI Design
                                </label>
                                <label className="border border-white p-2.5 rounded-[35px]">
                                    Análise de Dados
                                </label>
                            </aside>
                            <h1 className="font-semibold text-[62px] text-white leading-tight w-full mx-auto">
                                Transformamos ideias em marcas impactantes <br />
                                e resultados que impulsionam o sucesso do <br />
                                seu negócio.
                            </h1>
                            <h2 className="text-[#FFFFFF99] w-full mx-auto font-normal text-[24px] text-center mt-4">
                                Na Flint IT, acreditamos que cada empresa tem um potencial único.
                                Combinamos inovação em tecnologia e marketing digital para criar
                                soluções sob medida que geram resultados reais.
                            </h2>

                            <div className="partner-scroll-container mt-32">
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
                  <aside  className="cursor-pointer bg-[#5a5b5b] mx-auto text-center py-2 flex justify-center mt-8 w-[23.32px] h-[23.33px] rounded-[4px] ">
                  <Image
                            src="/Vector.svg"
                            alt="Flint quadrados"
                            width={9.98}
                            height={5.87}
                            priority 
                          />
                    </aside>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}