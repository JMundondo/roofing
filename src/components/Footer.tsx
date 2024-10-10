import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Righteous } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import Logo from "../../public/images/logo.png";
import styles from "@/styles/Footer.module.css";

const righteousFont = Righteous({
  subsets: ["latin"],
  variable: "--font-righteous",
  weight: "400",
});

const Footer = () => {
  return (
    <header className="w-full overflow-hidden max-w-[3840px] mx-auto bg-ivory">
      {/* Primary Footer Container */}
      <div
        className={`flex justify-between items-center w-full h-full pl-16 pr-24 py-7 ${righteousFont.className}`}
      >
        {/* Primary Footer Wrapper */}
        <div className="flex justify-between items-center w-full h-full xl:flex-col-reverse xl:ml-[-5rem] lg:ml-[-5.85rem] md:ml-[-6.65rem] sm:ml-[-7.02rem] xs:ml-[-7.52rem] xxs:ml-[-7.72rem] xxxs:ml-[-7.92rem]">
          {/* Primary Left Wrapper */}
          <div className="flex justify-between items-center xl:justify-start xl:items-start xl:w-full xl:pt-4 md:flex-col">
            <div className={`${styles.footer_logo}`}>
              <Link href="/">
                <Image
                  src={Logo}
                  alt="R &amp; S Constructions LLC Logo"
                  width="140"
                  height="75"
                  className="cursor-pointer"
                  priority
                />
              </Link>
            </div>

            {/* Footer Location Container */}
            <div
              className={`ml-20 xs:whitespace-nowrap ${styles.footer_location}`}
            >
              <ul>
                <li>
                  <h3 className="text-lg xl:text-[1.3rem] sm:text-lg xxs:text-base">
                    LOCATION
                  </h3>
                </li>
                <li>
                  <address className="text-base sm:text-base xxs:text-sm">
                    2528 Ernest Kadungure , Ruwa <br /> Harare
                  </address>
                </li>
              </ul>
            </div>

            {/* Footer Contact Container */}
            <div className="ml-28 xl:ml-20 md:py-4">
              <ul>
                <li>
                  <h3 className="text-lg xl:text-[1.3rem] sm:text-lg xxs:text-base">
                    CONTACT
                  </h3>
                </li>
                <li>
                  <Link
                    href="mailto:randsconstructionsllc@hotmail.com"
                    className="text-base transition-all duration-500 ease-out hover:text-customBlue sm:text-base xxs:text-sm"
                  >
                    dkfada@HOTMAIL.COM
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:301-768-0298"
                    className="text-base transition-all duration-500 ease-out hover:text-customBlue sm:text-base xxs:text-sm"
                  >
                    (301) 768-0298
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Right */}
          <div className="inline mr-[0] xl:w-full">
            {/* Footer Navbar Menu Container */}
            <div className="flex justify-between items-center">
              <ul className="columns-2 m-0 list-none">
                <li className="ml-4 xl:ml-0 xl:pr-[7.9rem] sm:pr-0 xs:mr-[-4rem]">
                  <Link
                    href="/"
                    className={`transition-all duration-500 ease-out hover:text-customBlue text-[1.125rem] xl:text-[1.3rem] sm:text-lg xxs:text-base ${styles.footer_link}`}
                  >
                    home
                  </Link>
                </li>
                <li className="ml-4 xl:ml-0 xs:mr-[-4rem]">
                  <Link
                    href="/about"
                    className={`transition-all duration-500 ease-out hover:text-customBlue text-[1.125rem] xl:text-[1.3rem] sm:text-lg xxs:text-base ${styles.footer_link}`}
                  >
                    about
                  </Link>
                </li>
                <li className="ml-4 xl:ml-0 xs:mr-[-4rem]">
                  <Link
                    href="/services"
                    className={`transition-all duration-500 ease-out hover:text-customBlue text-[1.125rem] xl:text-[1.3rem] sm:text-lg xxs:text-base ${styles.footer_link}`}
                  >
                    services
                  </Link>
                </li>
                <li className="xs:mr-[-4rem]">
                  <Link
                    href="/gallery"
                    className={`transition-all duration-500 ease-out hover:text-customBlue text-[1.125rem] xl:text-[1.3rem] sm:text-lg xxs:text-base ${styles.footer_link}`}
                  >
                    gallery
                  </Link>
                </li>
                <li className="xs:mr-[-4rem]">
                  <Link
                    href="/testimonials"
                    className={`transition-all duration-500 ease-out hover:text-customBlue text-[1.125rem] xl:text-[1.3rem] sm:text-lg xxs:text-base ${styles.footer_link}`}
                  >
                    testimonials
                  </Link>
                </li>
                <li className="xs:mr-[-4rem]">
                  <Link
                    href="/contact"
                    className={`transition-all duration-500 ease-out hover:text-customBlue text-[1.125rem] xl:text-[1.3rem] sm:text-lg xxs:text-base ${styles.footer_link}`}
                  >
                    contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Footer Container */}
      <div
        className={`flex justify-between items-center w-full h-full pl-24 pr-24 py-6 xl:pl-16 lg:pl-[3.2rem] md:pl-[2.3rem] sm:pl-[2rem]  ${styles.secondary_footer_container} ${righteousFont.className}`}
      >
        <div className="flex justify-between items-center w-full sm:flex-col-reverse sm:items-start sm:pt-1">
          <div className="text-customGray text-sm xs:whitespace-nowrap xxs:whitespace-normal xs:text-xs">
            <span className="">
              Shumba Carpenters - Expert Roofing Solutions &copy;{" "}
              {new Date().getFullYear()} | ALL RIGHTS RESERVED
            </span>
          </div>

          <div className="inline m-0 sm:pb-5 sm:ml-[-0.7rem]">
            <ul className="list-none">
              <li className="inline-block">
                <Link
                  href="https://www.facebook.com/RandSCONSTRUCTIONSLLC"
                  target="_blank"
                  rel="noreferrer"
                  className="text-ivory flex flex-col justify-between items-center h-8 w-8 border-solid border-2 border-customGray p-[6px] ml-3 transition-all duration-400 ease-out hover:text-customBlue"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
              </li>
              <li className="inline-block">
                <Link
                  href="https://www.linkedin.com/company/r-and-s-constructions/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-ivory flex flex-col justify-between items-center h-8 w-8 border-solid border-2 border-customGray p-[6px] ml-3 transition-all duration-400 ease-out hover:text-customBlue"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Footer;
