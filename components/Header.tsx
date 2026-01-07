'use client';
import Link from "next/link"
import Image from "next/image"
import { navItems } from "@/data/data"
import { Button } from "./ui/button"
import { Search, Bell, Menu, X} from "lucide-react"
import { useState } from "react";


export default async function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleClick = () => setIsOpen(!isOpen);
    return (
     <header className="fixed top-0 py-4 w-full bg-linear-to-b from-black-08 to-black-08/10">
        <div className="container flex items-center justify-between relative">
            {/*logo*/}
            <Link href={"/"}>
                <Image src={"/Image/logo.svg"} alt="logo" width={160} height={55} />
            </Link>
            <nav className={`lg:hidden absolute top-full right-4 bg-black-06 right-1 ring-black-12 p-2 rounded-[10px] divdie-y opacity-0 invisible ${ isOpen ? "opacity-100 visible" : ""}`}>
                <ul className="grid type-center gap-1 mx-auto pb-2">
                    {navItems.map((item) => (
                        <li key={navItems.id}>
                            <Link href={item.href} className={`px-6 pr-10 py-3 black text-white hover:bg-black-12 transition-colors rounded-lg`}>{item.label}</Link>
                        </li>
                    ))}

                    {/* btns */}
                    <div className="px-2 space-x-2">
                        <Button size={"icon-lg"} variant="ghost">
                            <Search />
                        </Button>
                        <Button  size={"icon-lg"} variant="ghost">
                            <Bell />
                        </Button>
                    </div>
                </ul>
            </nav>
            <nav className="">
               

            </nav>
            {/* desktop menu */}
            <nav className="hidden lg:flex items-center flex-1">
                 <ul className="flex items-center justify-center gap-1 mx-auto bg-black-06 ring-1 ring-black-12 p-2 rounded-[10px]">
                    {navItems.map((item) => (
                        <li key={navItems.id}>
                            <Link href={item.href} 
                            className="px-5 py-3 black rounded-lg text-white hover:bg-black-12 transition-colors">{item.label}</Link>
                        </li>
                    ))}
                </ul>
                {/* btns */}
                <div className="space-x-2">
                    <Button size={"icon-lg"} variant={"ghost"}>
                        <Search />
                    </Button>
                    <Button size={"icon-lg"} variant={"ghost"}>
                        <Bell />
                    </Button>
                </div>
                
            </nav>
            {/* menu button */}
            <Button size={"icon-lg"} variant={"secondary"} className="lg:hidden onClick={handleClick}">
                <Menu/>
            </Button>
        </div>
    </header>

)}