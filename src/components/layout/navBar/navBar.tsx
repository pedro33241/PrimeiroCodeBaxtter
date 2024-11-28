import Image from "next/image";
import Link from "next/link";
import"./style.css"
export function NavBar(){
    return(
        <>
        <div  className="z-0 w-full h-[85px] px-[97px] flex flew-row justify-between" style={{background:'#010202', borderImageSource: 'linear-gradient(90deg, rgba(1, 2, 2, 0.16) 0%, rgba(1, 2, 2, 0.16) 100%)'}}>
        
        <aside className="mt-[24px]">
            <Image
             src="/logo.svg"
             alt="Flint logo"
             width={142.44}
             height={41}
             priority
            />
        </aside>
        
        <nav className=" relative  mt-[33px] w-[562px]">
            <ul className="flex z-50 flex-row absolute   gap-10  text-[#E0E0E0]  font-normal text-sm ">
            <li><Link href="">Serviços</Link></li>
            <li><Link href="">Case</Link></li>
            <li><Link href="">Sobre Nós</Link></li>
            <li><Link href="">Blog</Link></li>
            <li><Link href="">Depoimentos</Link></li>
            <li><Link href="">Contactos</Link></li>
            </ul>
        </nav>
        
        <aside className="contact  mt-[21px]  flex flex-row   rounded-3xl  cursor-pointer    ">
            <span className="text-sm font-[600] leftDetails">Fale&nbsp;conosco</span>
            <Image
             src="/arrow.svg"
             alt="Flint seta"
             width={28}
             height={28}
             priority
             className="contactChildrenImg  -mt-2.5"
            />
        </aside>
        
        </div>
        </>

    )
}