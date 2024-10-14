"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FacebookIcon, LinkedInIcon } from "./SocialMediaIcons";
import { Montserrat } from "next/font/google";

const montserratFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

interface NavItemProps {
  href: string;
  title: string;
  isScrolled: boolean;
}

const NavigationBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: Omit<NavItemProps, "isScrolled">[] = [
    { href: "/", title: "Home" },
    { href: "/about", title: "About" },
    { href: "/services", title: "Services" },
    { href: "/gallery", title: "Gallery" },
    { href: "/testimonials", title: "Testimonials" },
    { href: "/contact", title: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      } ${montserratFont.className}`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`flex justify-between items-center ${
            isScrolled ? "h-16 md:h-20" : "h-20 md:h-24"
          } transition-all duration-300`}
        >
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="R &amp; S Constructions LLC Logo"
              width={160}
              height={80}
              className={`w-auto ${
                isScrolled ? "h-10 md:h-12" : "h-12 md:h-16"
              } transition-all duration-300`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="md:hidden space-x-1">
            {navItems.map((item) => (
              <NavItem key={item.title} {...item} isScrolled={isScrolled} />
            ))}
          </nav>

          {/* Social Icons and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <SocialIcon
              href="https://www.linkedin.com/company/r-and-s-constructions/"
              icon={<LinkedInIcon />}
              label="LinkedIn"
              isScrolled={isScrolled}
            />
            <SocialIcon
              href="https://www.facebook.com/RandSCONSTRUCTIONSLLC/"
              icon={<FacebookIcon />}
              label="Facebook"
              isScrolled={isScrolled}
            />

            {/* Mobile Menu Button */}
            <button
              className=" hidden md:flex p-2 rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`hidden md:flex ${
          isOpen ? "block" : "hidden"
        } bg-white shadow-lg`}
      >
        <nav className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <MobileNavItem
              key={item.title}
              {...item}
              onClick={() => setIsOpen(false)}
              isScrolled={true} // Always use scrolled style for mobile menu
            />
          ))}
        </nav>
        <div className="px-4 py-3 border-t border-gray-200">
          <div className="flex justify-center space-x-4">
            <SocialIcon
              href="https://www.linkedin.com/company/r-and-s-constructions/"
              icon={<LinkedInIcon />}
              label="LinkedIn"
              isScrolled={true}
            />
            <SocialIcon
              href="https://www.facebook.com/RandSCONSTRUCTIONSLLC/"
              icon={<FacebookIcon />}
              label="Facebook"
              isScrolled={true}
            />
          </div>
        </div>
      </motion.div>
    </header>
  );
};

const NavItem: React.FC<NavItemProps> = ({ href, title, isScrolled }) => (
  <Link
    href={href}
    className={`px-3 py-2 rounded-md text-sm font-medium ${
      isScrolled
        ? "text-gray-800 hover:bg-orange-100 hover:text-orange-600"
        : "text-white hover:bg-white hover:bg-opacity-20 hover:text-white"
    } transition-colors`}
  >
    {title}
  </Link>
);

const MobileNavItem: React.FC<NavItemProps & { onClick: () => void }> = ({
  href,
  title,
  onClick,
  isScrolled,
}) => (
  <Link
    href={href}
    className={`block px-3 py-2 rounded-md text-base font-medium ${
      isScrolled
        ? "text-gray-800 hover:bg-orange-100 hover:text-orange-600"
        : "text-white hover:bg-white hover:bg-opacity-20 hover:text-white"
    } transition-colors`}
    onClick={onClick}
  >
    {title}
  </Link>
);

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isScrolled: boolean;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  href,
  icon,
  label,
  isScrolled,
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={`transition-colors ${
      isScrolled
        ? "text-gray-600 hover:text-orange-500"
        : "text-white hover:text-orange-300"
    }`}
    aria-label={label}
  >
    {icon}
  </motion.a>
);

export default NavigationBar;
