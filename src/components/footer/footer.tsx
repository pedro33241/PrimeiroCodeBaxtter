"use client"
import Image from 'next/image'

import { localization,services ,socialMedia,emailServices,contacts} from "../../constant/variable";
import Link from "next/link";
import {useState, useEffect} from 'react';
export function FooterApp(){


  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {  
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return(
        <>
  <section 
  className="py-28 px-16 mt-44 bg-[#0D0D0E] text-white"
  style={{
    borderTop: '1px solid', 
    borderImageSource: 'linear-gradient(90deg, rgba(1, 2, 2, 0.16) 0%, rgba(255, 255, 255, 0.16) 50%, rgba(1, 2, 2, 0.16) 100%)',
    borderImageSlice: 1  
  }}
>
 
 <div className="flex mf:flex-row sx:flex-col gap-8 justify-between">
 <div className="flex flex-col">
       
       <Image
     
     src="/flintLogoFooter.png"
     alt="Flint "
     width={528}
     height={152}
     priority
     />
     <h3 className="text-[600] text-white sx:text-[14px] mf:text-[16px] ">Escritórios</h3>
     
     {localization?.map(item=>(
         
     <aside key={item?.id} className="flex gap-2">
     <Image
     
     src={`${item?.image}`}
     alt="Flint "
     width={24}
     height={24}
     priority
     />
     
     <label className="mt-5 font-normal sx:text-[14px] mf:text-[16px]">
         {item?.country},{item?.city} <br/>
         {item?.municipality},{item?.neighborhood}
     </label>
         </aside>
        
     ))}
      </div>





     <div className="mf:mt-0 sx:mt-12 flex flex-wrap gap-16">

     <div className=" flex flex-col gap-3" key={services.id}>
<h3 className="font-[600] text-white sx:text-[14px] mf:text-[16px] ">{services.services}</h3>
{services?.links?.map(item=>(
    <Link  href={`${item?.url}`} key={item?.id} className="text-white sx:text-[14px] mf:text-[16px] font-normal ">{item?.name}</Link>
))}
</div>


<div className=" flex flex-col gap-3" key={socialMedia.id}>
<h3 className="font-[600] text-white sx:text-[14px] mf:text-[16px] ">{socialMedia.services}</h3>
{socialMedia?.links?.map(item=>(
    <Link href=""  key={item?.id}  className="text-white sx:text-[14px] mf:text-[16px] font-normal ">{item?.name}</Link>
))}
</div>



<div className=" flex flex-col gap-3" key={emailServices.id}>
<h3 className="font-[600] text-white sx:text-[14px] mf:text-[16px] ">{emailServices.services}</h3>
{emailServices?.links?.map(item=>(
    <Link href={`${item?.url}`} key={item?.id} className="text-white sx:text-[14px] mf:text-[16px] font-normal ">{item?.name}</Link>
))}
</div>



<div  id="contact" className=" flex flex-col gap-3" key={contacts.id}>
<h3 className="font-[600] text-white sx:text-[14px] mf:text-[16px] ">{contacts.services}</h3>
{contacts?.links?.map(item=>(
    <Link href={`${item?.url}`} key={item?.id} className="text-white sx:text-[14px] mf:text-[16px] font-normal ">{item?.name}</Link>
))}
</div>


{isVisible && (
      <button
        onClick={scrollToTop}
       className="w-[34px] h-[64px] fixed sx:right-7  z-50 mf:right-20 bottom-14 bg-black text-[#8E48EC] border border-[#313135] rounded-[30px]"
        aria-label="Voltar ao topo"
      >
       <span className="text-[14px] -mt-3 flex justify-center "> <svg xmlns="http://www.w3.org/2000/svg" width="23" height="46" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
</svg></span>
      </button>
    )}
        </div>
      </div>


            </section>
        </>

    )
}