'use client'

import Link from "next/link";
import NavbarPath from "./NavbarPath";
import { authClient } from "@/lib/auth-client";
import { Menu } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    return (
        <div className="w-[90%] mx-auto">
            <div className="navbar items-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <Menu />
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavbarPath />
                        </ul>
                    </div>

                    <Link href={'/'} className="text-2xl font-bold animate__animated animate__rubberBand hover:scale-110 transition duration-300">
                        <div className=' bg-clip-text bg-linear-to-br from-[#10b981] to-[#2563eb]'>
                            <div className="text-transparent flex items-center">
                                <div><Image priority={true} src="/assets/fav-icon.png" width={40} height={40} alt="fav" /></div>SkillSphere</div>
                        </div>
                    </Link>
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
                                <div className="w-10 h-10 rounded-full relative">
                                    <Image priority={true} src={user.image} alt="user" fill />
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