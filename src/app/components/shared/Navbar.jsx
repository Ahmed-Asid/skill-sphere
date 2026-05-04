import Link from "next/link";
import NavbarPath from "./NavbarPath";
import { anta, iceland, kodchasan, limelight } from "@/app/layout";
import { icons } from "lucide-react";

const Navbar = () => {

    return (
        <div className="w-[90%] mx-auto">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavbarPath />
                        </ul>
                    </div>
                    <Link href={'/'} className="text-2xl font-bold"><div className={`text-[#0f172a] `}>SkillSphere</div></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-10 font-semibold">
                        <NavbarPath />
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <Link href={'/sign-in'}><div className="font-semibold hover:text-[#10b981] active:scale-95">Sign in</div></Link>
                    <Link href={'/sign-up'}><div className="font-semibold hover:text-[#10b981] active:scale-95">Sign up</div></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;