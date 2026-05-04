'use client'

import Link from "next/link";
import NavbarPath from "./NavbarPath";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    return (
        <div className="w-[90%] mx-auto">
            <div className="navbar items-center">
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
                {isPending ? <div className="navbar-end"><span className="loading loading-spinner text-primary"></span></div> :
                    user ?
                        <div className="navbar-end gap-2">
                            <div className="avatar">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={user.image} alt="user"></img>
                                </div>
                            </div>
                            <Link href={'/'}><div onClick={async () => await authClient.signOut()} className="font-semibold hover:text-red-500 active:scale-95">Log out</div></Link>
                        </div>
                        :
                        <div className="navbar-end gap-2">
                            <Link href={'/sign-in'}><div className="font-semibold hover:text-[#10b981] active:scale-95">Sign in</div></Link>
                            <Link href={'/sign-up'}><div className="font-semibold hover:text-[#10b981] active:scale-95">Sign up</div></Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;