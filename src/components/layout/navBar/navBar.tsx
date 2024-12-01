import Image from "next/image";
import Link from "next/link";
import "./style.css" ;


import { AccountMenu } from "../sideBar/sideBar";

 
export function NavBar() {

    return (
        <>
           <div className="relative "> 
            <div
                className=" shadow-lg  shadow-[#0a070e81] absolute top-0 z-50 w-full sx:px-[33px] mf:px-[97px]  pb-[21px] flex flex-wrap justify-between"
                style={{
                    background: "transparent",
                    backdropFilter: 'blur(100px)',
                    border: '1px solid',
                    borderImageSource: 'linear-gradient(90deg, rgba(1, 2, 2, 0.16) 0%, rgba(1, 2, 2, 0.16) 100%)'

                }}
            >

                <Link href="/" className="mt-[24px]">
                    <Image
                        src="/icon.svg"
                        alt="Flint logo"
                        width={142.44}
                        height={41}
                        priority
                    />
                </Link>

                <nav className="sx:hidden mf:block mt-[33px] w-[562px]">
                    <ul className="flex flex-row gap-10 text-[#E0E0E0] font-normal text-sm">
                        <li><Link href="/" prefetch={true} >Serviços</Link></li>
                        <li><Link href="/case" prefetch={true} >Case</Link></li>
                        <li><Link href="/about" prefetch={true} >Sobre Nós</Link></li>
                        <li><Link href="/blog" prefetch={true} >Blog</Link></li>
                        <li><Link href="/#testimony" prefetch={true} >Depoimentos</Link></li>
                        <li><Link href="#contact" prefetch={true} >Contactos</Link></li>
                    </ul>
                </nav>


                <Link  href="#contact" className="w-[140px] sx:hidden mf:block ">
                    <aside className=" contact mt-[21px] flex flex-row rounded-3xl cursor-pointer">
                        <span className="text-sm font-[600] leftDetails" style={{ lineHeight: '22px'}}>Fale&nbsp;conosco</span>
                        <Image
                            src="/arrow.svg"
                            alt="Flint seta"
                            width={28}
                            height={28}
                            priority
                            className="contactChildrenImg -mt-2.5"
                        />
                    </aside>
                </Link>

                <div className="absolute right-5 sx:block mf:hidden mt-4">

                    <AccountMenu />
                </div>
            </div>
</div>
        </>

    )
}