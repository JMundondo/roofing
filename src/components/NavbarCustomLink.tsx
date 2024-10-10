"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface CustomLinkProps {
    href: string;
    title: string;
    className?: string;
    toggle: () => void;
}

const NavbarCustomLink: React.FC<CustomLinkProps> = ({ href, title, className = '', toggle }) => {
    const pathname = usePathname();

    return (
        <Link href={href} className={`${className} relative group`} onClick={toggle}>
            {title}

            <span className={`h-[2.5px] inline-block w-0 bg-customBlue absolute left-0 -bottom-2 group-hover:w-full transition-[width] ease duration-300 dark:bg-primary ${pathname === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    );
};

export default NavbarCustomLink;