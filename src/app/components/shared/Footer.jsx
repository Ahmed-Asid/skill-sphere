import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center rounded bg-slate-700 p-10 text-gray-100">
                <nav className="grid grid-flow-col gap-4">
                    <Link href={'#'}>About us</Link>
                    <Link href={'#'}>Terms and Conditions</Link>
                    <Link href={'#'}>Privacy policy</Link>
                </nav>
                <nav>
                    <p>Contact</p>
                    <Link href={'#'}>+88017999999999</Link>
                    <Link href={'#'}>skill_sphere@gmail.com</Link>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <Link href={'#'}>
                            <FaTwitter size={24} />
                        </Link>
                        <Link href={'#'}>
                            <FaYoutube size={24} />
                        </Link>
                        <Link href={'#'}>
                            <FaFacebook size={24} />
                        </Link>

                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by SkillSphere</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;