'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavbarPath = () => {
    const pathname = usePathname();
    return (
        <>
            <li><Link href={'/'} className={`${pathname === '/' && 'text-[#2563eb] active:scale-95 '}`}>Home</Link></li>
            <li><Link href={'/all-courses'} className={`${pathname === '/all-courses' && 'text-[#2563eb] active:scale-95 '}`}>Courses</Link></li>
            <li><Link href={'/profile'} className={`${pathname === '/profile' && 'text-[#2563eb] active:scale-95 '}`}>My Profile</Link></li>
        </>
    );
};

export default NavbarPath;