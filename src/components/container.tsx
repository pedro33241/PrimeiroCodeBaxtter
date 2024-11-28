"use client"
import Image from "next/image";
import "./style.css"

import "./layout/navBar/style.css"
import { partnerData } from "./variable";
import Link from "next/link";
export function ArticleIndex() {


  
    return (
        <>
            <section >
            <div className="  mx-auto flex justify-center items-center ">

            <div
              className=" shadow-lg  shadow-[#0a070e] absolute top-0 z-50 w-full h-[85px] px-[97px] flex flex-row justify-between"
              style={{
                background: "transparent", 
                backdropFilter: 'blur(100px)',
                border: '1px solid',
                borderImageSource: 'linear-gradient(90deg, rgba(1, 2, 2, 0.16) 0%, rgba(1, 2, 2, 0.16) 100%)'

  }}
            >

              <aside className="mt-[24px]">
                <Image
                  src="/logo.svg"
                  alt="Flint logo"
                  width={142.44}
                  height={41}
                  priority
                />
              </aside>
              <div className=" ">
                <nav className=" mt-[33px] w-[562px]">
                  <ul className="flex flex-row gap-10 text-[#E0E0E0] font-normal text-sm">
                    <li><Link href="">Serviços</Link></li>
                    <li><Link href="">Case</Link></li>
                    <li><Link href="">Sobre Nós</Link></li>
                    <li><Link href="">Blog</Link></li>
                    <li><Link href="">Depoimentos</Link></li>
                    <li><Link href="">Contactos</Link></li>
                  </ul>
                </nav>
              </div>


              <div className="w-[140px] ">
                <aside className=" contact mt-[21px] flex flex-row rounded-3xl cursor-pointer">
                  <span className="text-sm font-[600] leftDetails">Fale&nbsp;conosco</span>
                  <Image
                    src="/arrow.svg"
                    alt="Flint seta"
                    width={28}
                    height={28}
                    priority
                    className="contactChildrenImg -mt-2.5"
                  />
                </aside>
              </div>


            </div>

            
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
    width={1335}
    height={1061}
  />

            <div className="w-[331px] h-[139px] absolute top-0 "
              style={{
                backgroundImage: 'linear-gradient(to bottom, #1d0a30 10%, transparent 40%)'

              }}
    
  ></div>
        <div className="mx-auto  mt-24 justify-center absolute flex items-center text-center top-[20vh] w-full px-4">
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