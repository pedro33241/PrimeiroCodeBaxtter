"use client";
import { NavBar } from "../../components/layout/navBar/navBar";
import { FooterApp } from "../../components/footer/footer";
import Image from "next/image";
import "../globals.css"; 
import Link from "next/link";
import {aboutCompany,infoCompany} from "../../constant/variable";
import { useState } from "react";

export function  AboutPage () {

    const [tab, setTab] = useState(1);

  return (
<>
<NavBar />
<div className="limit mf:px-24 sx:px-5">
    



<div className="relative  px-5 mb-32 flex flex-col justify-center items-center mx-auto text-center ">
<Image
    src="/Ellipse3.svg"
    alt="Flint quadrados"
    width={0}
    height={0}
    className=" top-0 absolute w-full "
    priority
  />

<Image
    src="/Container.png"
    alt="Flint quadrados"
    width={968}
    height={924}
    className=" sx:mt-36  mf:mt-56 w-[968px] "
    priority
  />




</div>

<div className="relative">

<Image
    src="/about.png"
    alt="Flint quadrados"
    width={968}
    height={924}
    className="w-full "
    priority
  />

<Image

src="/selo.svg"
alt="Flint selo"
width={80.42}
height={91.07}
className="absolute right-16 top-12"
priority
/>

<br/><br/>
<h4 className="sx:text-[18px] font-[600] mf:text-[24px] text-white">Quem somos?</h4>
<label className="sx:text-[18px] mf:text-[38px]  font-[600] text-[#dfdfe0]">A Flint IT é uma empresa de tecnologia inovadora e marketing digital, dedicada a auxiliar empresas no desenvolvimento de marcas impactantes, na otimização de seus processos de gestão e na conquista de resultados excepcionais.</label>
<br/><br/>
<label className="sx:text-[18px] mf:text-[38px]  font-[600] text-[#dfdfe0]">Somos uma equipe diversificada e talentoso de profissionais apaixonados por tecnologia e marketing. Combinamos nossa expertise em diferentes áreas para oferecer soluções completas e personalizadas para cada cliente. </label>
</div>


<div className="flex mf:mt-72 sx:mt-24 gap-12  flex-wrap justify-between ">

<aside className="mf:w-[727px] sx:w-full">
    <h3 className="font-semibold md:text-[32px] sx:text-[24px] mf:text-[48px] text-white ">Nossa missão e nossa visão vêm de uma cultura forte e positiva <span className="text-[#7B2CBF]">.</span></h3>
<span className="sx:text-sx mf:text-lg  text-[#DFDFE0]  font-medium">Em um mercado dinâmico e competitivo, as empresas precisam de soluções inovadoras e confiáveis para impulsionar seu crescimento. A Flint IT se destaca por oferecer</span>
</aside>

<aside  className="mf:mt-0 sx:mt-36 mf:w-[727px] sx:w-full  flex flex-col ">
    
<aside className="flex flex-wrap  gap-20 ">
{aboutCompany?.map(item=>(
<button key={item?.id} className={`hover:bg-gray-900 rounded-[20px] duration-100 transition-all p-4 sx:text-[16px] mf:text-[24px] font-semibold ${tab == item?.id ? 'text-[#7B2CBF]' : 'text-white'}`} onClick={()=>{setTab(item?.id)}}>{item?.name}</button>
    ))}
    </aside>

    <aside className="sx:mt-8 mf:mt-4">
        {infoCompany?.map(item => (
          tab == item?.id && (
            <div key={item?.id} className="mt-5 text-[#DFDFE0] font-normal  text-[18px] tab-content">
             {tab == 3 &&(<h4 className="font-semibold sx:text-[14px] mf:text-[18px]">{item?.title1}</h4>)}
              <p>{item?.description}</p> <br/>
              {tab == 3 &&(<h4 className="font-semibold sx:text-[14px] mf:text-[18px]">{item?.title2}</h4>)}
              <p>{item?.description2}</p> <br/>
              {tab == 3 &&(<h4 className="font-semibold sx:text-[14px] mf:text-[18px]">{item?.title3}</h4>)}
              <p>{item?.description3}</p> <br/>
              {tab == 3 &&(<h4 className="font-semibold sx:text-[14px] mf:text-[18px]">{item?.title4}</h4>)}
              <p>{item?.description4}</p> 
              </div>
          )
        ))}
      </aside>

</aside>
</div>

<div className="sx:mt-36 mf:mt-72">
  <h3 className="font-semibold sx:w-full mf:w-[565px] md:text-[32px] sx:text-[24px] mf:text-[48px] text-white">
    Conheça nossa incrível equipe<span className="text-[#7B2CBF]">.</span>
  </h3>

  <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 relative">
  <div className="w-full flex flex-col gap-4">
       <div className="w-full h-[490px] rounded-[12px]  p-3 relative" style={{ background: 'linear-gradient(113.05deg, #7B2CBF 29.22%, #6A2A9F 74.81%)', border: '1px solid', borderImageSource: 'linear-gradient(107.6deg, rgba(77, 77, 85, 0) 0%, #6A2A9F 100%)' }}>
 
<aside>
       <h2 className="sx:text-[24px] mf:text-[32px] font-semibold">Mariano Kalei</h2>
       <span className="font-normal  text-[#DFDFE0] sx:text-[15px] mf:text-[18px]">Co - Founder | Project Manager</span>
</aside>

<Link href="" className="absolute bottom-5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg></Link>

      </div>
       <div className="flex flex-wrap gap-4">

     <div className="flex w-full  flex-col gap-5">
        <div className="w-full rounded-[12px] h-[232px] relative p-3" style={{ background: 'linear-gradient(113.05deg, #7B2CBF 29.22%, #6A2A9F 74.81%)', border: '1px solid', borderImageSource: 'linear-gradient(107.6deg, rgba(77, 77, 85, 0) 0%, #6A2A9F 100%)' }}>
        <aside>
       <h2 className="sx:text-[24px] mf:text-[32px] font-semibold">Pedro Osorio</h2>
       <span className="font-normal  text-[#DFDFE0] sx:text-[15px] mf:text-[18px]">Front-end Developer</span>
</aside>

<Link href="" className="absolute bottom-5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg></Link>
     
        </div>
        <div className="w-full h-[232px] rounded-[12px] relative p-3" style={{ background: 'linear-gradient(113.05deg, #7B2CBF 29.22%, #6A2A9F 74.81%)', border: '1px solid', borderImageSource: 'linear-gradient(107.6deg, rgba(77, 77, 85, 0) 0%, #6A2A9F 100%)' }}>
        <aside>
       <h2 className="sx:text-[24px] mf:text-[32px] font-semibold">Rui Marcos João</h2>
       <span className="font-normal  text-[#DFDFE0] sx:text-[15px] mf:text-[18px]">Back-end Developer</span>
</aside>

<Link href="" className="absolute bottom-5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg></Link>
     
        </div>
      </div>

         <div className="w-full rounded-[12px]   h-[478px] relative p-3" style={{ background: 'linear-gradient(113.05deg, #7B2CBF 29.22%, #6A2A9F 74.81%)', border: '1px solid', borderImageSource: 'linear-gradient(107.6deg, rgba(77, 77, 85, 0) 0%, #6A2A9F 100%)' }}>
         <aside>
       <h2 className="sx:text-[24px] mf:text-[32px] font-semibold">Laurindo Camuenho</h2>
       <span className="font-normal  text-[#DFDFE0] sx:text-[15px] mf:text-[18px]">Back-end Developer</span>
</aside>

<Link href="" className="absolute bottom-5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg></Link>
     
      </div>

    </div>
</div>
   <div className="flex w-full flex-col gap-5">
        <div className="w-full rounded-[12px] relative p-3 h-[232px]" style={{ background: 'linear-gradient(113.05deg, #7B2CBF 29.22%, #6A2A9F 74.81%)', border: '1px solid', borderImageSource: 'linear-gradient(107.6deg, rgba(77, 77, 85, 0) 0%, #6A2A9F 100%)' }}>
        <aside>
       <h2 className="sx:text-[24px] mf:text-[32px] font-semibold">Josué Miguel</h2>
       <span className="font-normal  text-[#DFDFE0] sx:text-[15px] mf:text-[18px]">UX/UI Designer</span>
</aside>

<Link href="" className="absolute bottom-5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg></Link>
     
        </div>
        <div className="w-full rounded-[12px] relative p-3 h-[232px]" style={{ background: 'linear-gradient(113.05deg, #7B2CBF 29.22%, #6A2A9F 74.81%)', border: '1px solid', borderImageSource: 'linear-gradient(107.6deg, rgba(77, 77, 85, 0) 0%, #6A2A9F 100%)' }}>
        <aside>
       <h2 className="sx:text-[24px] mf:text-[32px] font-semibold">Ananias Augusto</h2>
       <span className="font-normal  text-[#DFDFE0] sx:text-[15px] mf:text-[18px]">Front-end Developer</span>
</aside>

<Link href="" className="absolute bottom-5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg></Link>
     
        </div>
        <div className="w-full rounded-[12px]  relative p-3 h-[478px]" style={{ background: 'linear-gradient(113.05deg, #7B2CBF 29.22%, #6A2A9F 74.81%)', border: '1px solid', borderImageSource: 'linear-gradient(107.6deg, rgba(77, 77, 85, 0) 0%, #6A2A9F 100%)' }}>
        <aside>
       <h2 className="sx:text-[24px] mf:text-[32px] font-semibold">Olawele Gazal</h2>
       <span className="font-normal  text-[#DFDFE0] sx:text-[15px] mf:text-[18px]">CEO da TechOne</span>
</aside>

<Link href="" className="absolute bottom-5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg></Link>
     
        </div> 
    
    </div>
  </div> 



</div>

  </div>
  
<FooterApp/>
 </>
  );
}
