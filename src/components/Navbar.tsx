import React from "react";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";

function Navbar() {
    return (
        // bg-[#33026b]
        <header className="h-[15vh] w-[100vw] px-16 py-8 bg-[#0f172a] text-white">
            <nav className="relative h-full">
                <div className="flex flex-row justify-between items-center relative">
                    <div className="flex flex-row justify-evenly items-center relative w-[15%]">
                        <h1 className="font-bold text-[1.2rem]">
                            <Link href={"/"}>Coding Buddy</Link>
                        </h1>
                    </div>
                    {/* <div className="flex flex-row justify-evenly items-start relative overflow-hidden text-[15px] leading-[1.5rem] w-[50%]">
                        <Link href={"/"}>Home</Link>
                        <Link href={"/topics/languages"}>Languages</Link>
                        <Link href={"/topics/categories"}>Categories</Link>
                        <Link href={"/newsletter"}>Newsletter</Link>
                    </div> */}
                    <div className="flex flex-row justify-evenly items-center relative w-[15%]">
                        <h1>
                            <SearchIcon/>
                        </h1>
                        <div>
                            <MailIcon/>
                        </div>
                        <div>
                            <Brightness7Icon />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
