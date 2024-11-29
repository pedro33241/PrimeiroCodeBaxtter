import Image from "next/image";
import Link from "next/link";
import "./style.css"
import { AccountMenu } from "../sideBar/sideBar";
export function NavBar() {
    return (
        <>
            <div
                className=" shadow-lg  shadow-[#0a070e81] absolute top-0 z-50 w-full sx:px-[33px] mf:px-[97px]  pb-[21px] flex flex-wrap justify-between"
                style={{
                    background: "transparent",
                    backdropFilter: 'blur(100px)',
                    border: '1px solid',
                    borderImageSource: 'linear-gradient(90deg, rgba(1, 2, 2, 0.16) 0%, rgba(1, 2, 2, 0.16) 100%)'

                }}
            >

                <aside className="mt-[24px]">
                    <Image
                        src="/icon.svg"
                        alt="Flint logo"
                        width={142.44}
                        height={41}
                        priority
                    />
                </aside>

                <nav className="sx:hidden mf:block mt-[33px] w-[562px]">
                    <ul className="flex flex-row gap-10 text-[#E0E0E0] font-normal text-sm">
                        <li><Link href="">Serviços</Link></li>
                        <li><Link href="">Case</Link></li>
                        <li><Link href="">Sobre Nós</Link></li>
                        <li><Link href="">Blog</Link></li>
                        <li><Link href="">Depoimentos</Link></li>
                        <li><Link href="">Contactos</Link></li>
                    </ul>
                </nav>


                <div className="w-[140px] sx:hidden mf:block ">
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

                <div className="absolute right-5 sx:block mf:hidden mt-4">

                    <AccountMenu />
                </div>
            </div>

        </>

    )
}