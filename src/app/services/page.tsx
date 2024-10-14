import React from "react";
import { Monda } from "next/font/google"; // Added necessary imports
import styles from "@/styles/Contact.module.css"; // Updated to use Contact styles

const mondaFont = Monda({
  subsets: ["latin"],
  variable: "--font-monda",
  weight: "700",
});

const Services = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Services Hero Image Section */}
      <section>
        <div className={`${styles.contactBackgroundImg}`}>
          <div>
            <h1
              className={`uppercase text-ivory text-center text-[5rem] lg:text-6xl md:text-6xl sm:text-5xl xs:text-4xl xxxs:text-3xl ${mondaFont.className}`}
            >
              Our Services
            </h1>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="bg-matteblack">
        <div className={`flex flex-wrap flex-row md:flex-col`}>
          {/* Service One */}
          <div
            className={`bg-customWhite w-[33.25%] h-40 flex justify-center items-center relative transition-transform duration-[2000ms] md:w-full md:h-28 ${styles.contact_get_in_touch_card_one}`}
          >
            <p
              className={`text-matteblack uppercase text-4xl lg:text-3xl sm:text-2xl xxs:text-xl ${mondaFont.className}`}
            >
              Service One
            </p>
          </div>

          {/* Divider */}
          <div className="w-[0.125%] h-40 flex-none bg-matteblack md:h-2 md:w-full"></div>

          {/* Service Two */}
          <div
            className={`bg-customWhite w-[33.25%] h-40 flex justify-center items-center relative transition-transform duration-[2000ms] md:w-full md:h-28 ${styles.contact_get_in_touch_card_two}`}
          >
            <p
              className={`text-matteblack uppercase text-4xl lg:text-3xl sm:text-2xl xxs:text-xl ${mondaFont.className}`}
            >
              Service Two
            </p>
          </div>

          {/* Divider */}
          <div className="w-[0.125%] h-40 flex-none bg-matteblack md:h-2 md:w-full"></div>

          {/* Service Three */}
          <div
            className={`bg-customWhite w-[33.25%] h-40 flex justify-center items-center relative transition-transform duration-[2000ms] md:w-full md:h-28 ${styles.contact_get_in_touch_card_three}`}
          >
            <p
              className={`text-matteblack uppercase text-4xl lg:text-3xl sm:text-2xl xxs:text-xl ${mondaFont.className}`}
            >
              Service Three
            </p>
          </div>
        </div>
      </section>

      {/* Additional Sections can be added here */}
    </main>
  );
};

export default Services;
