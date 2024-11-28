import Image from "next/image";
import Link from "next/link";
import"./style.css"
export function NavBar(){
    return(
        <>
            <div
                className="opacity-0 z-0 w-full h-[85px] px-[97px] flex flex-row justify-between"
                style={{ 
                    background:"transparent",
                    border: '1px solid rgba(1, 2, 2, 0.16)', 
                    backdropFilter: 'blur(100px)',
                    boxShadow: '0 5px 8px rgba(0, 0, 0, 2)', 
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
                <div className="relative z-50">
                    <nav className="relative mt-[33px] w-[562px] z-50">
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

        
                <div className="w-[140px] relative z-50">
                    <aside className="relative contact z-50 mt-[21px] flex flex-row rounded-3xl cursor-pointer">
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
        </>

    )
}