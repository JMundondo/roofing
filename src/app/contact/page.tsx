import React from 'react';
import { Monda, Righteous, Roboto } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'

import styles from '@/styles/Contact.module.css';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';


const robotoFont = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '700'
})

const righteousFont = Righteous({
  subsets: ['latin'],
  variable: '--font-righteous',
  weight: '400'
})

const mondaFont = Monda({
  subsets: ['latin'],
  variable: '--font-monda',
  weight: '700'
})

const Contact = () => {
  return (
    <main className='mt-24 overflow-x-hidden'>

      {/* Contact Hero Image Section */}
      <section>

        <div className={`${styles.contactBackgroundImg}`}>

          <div>
            <h1 className={`uppercase text-ivory text-center text-[5rem] lg:text-6xl md:text-6xl sm:text-5xl xs:text-4xl xxxs:text-3xl ${robotoFont.className}`}>Contact Us</h1>
          </div>

        </div>

      </section>

      {/* Get In Touch Section */}
      <section className='bg-matteblack'>

        {/* Container */}
        <div className={`flex flex-wrap flex-row md:flex-col`}>

          {/* Card One */}
          <div className={`bg-customWhite w-[33.25%] h-40 flex justify-center items-center relative transition-transform duration-[2000ms] md:w-full md:h-28 ${styles.contact_get_in_touch_card_one}`}>

            {/* Front Side */}
            <div className={`text-center ${styles.contact_get_in_touch_card_front_side}`}>
              <p className={`text-matteblack uppercase text-4xl lg:text-3xl sm:text-2xl xxs:text-xl ${mondaFont.className}`}>
                <FontAwesomeIcon icon={faEnvelope} className='px-5' />
                Email
              </p>
            </div>

             {/* Back Side */}
             <div className={`bg-customWhite ${styles.contact_get_in_touch_card_back_side}`}>
              <Link href='mailto:randsconstructionsllc@hotmail.com' className={`text-lg transition-all duration-500 ease-out hover:text-customBlue lg:text-sm md:text-lg sm:text-base xxxs:text-sm ${mondaFont.className}`}>randsconstructionsllc@hotmail.com</Link>
             </div>

          </div>

          {/* Divider */}
          <div className='w-[0.125%] h-40 flex-none bg-matteblack md:h-2 md:w-full'></div>

          {/* Card Two */}
          <div className={`bg-customWhite w-[33.25%] h-40 flex justify-center items-center relative transition-transform duration-[2000ms] md:w-full md:h-28 ${styles.contact_get_in_touch_card_two}`}>

            {/* Front Side */}
            <div className={`text-center ${styles.contact_get_in_touch_card_front_side}`}>
              <p className={`text-matteblack uppercase text-4xl lg:text-3xl sm:text-2xl xxs:text-xl ${mondaFont.className}`}>
                <FontAwesomeIcon icon={faPhone} className='px-5' />
                Phone
              </p>
            </div>

             {/* Back Side */}
             <div className={`bg-customWhite ${styles.contact_get_in_touch_card_back_side}`}>
              <Link href='tel:301-768-0298' className={`text-lg transition-all duration-500 ease-out hover:text-customBlue lg:text-base md:text-lg sm:text-base xxxs:text-sm ${mondaFont.className}`}>(301) 768-0298</Link>
             </div>

          </div>

          {/* Divider */}
          <div className="w-[0.125%] h-40 flex bg-matteblack md:h-2 md:w-full"></div>

          {/* Card Three */}
          <div className={`bg-customWhite w-[33.25%] h-40 flex justify-center items-center relative transition-transform duration-[2000ms] md:w-full md:h-28 ${styles.contact_get_in_touch_card_three}`}>

            {/* Front Side */}
            <div className={`text-center ${styles.contact_get_in_touch_card_front_side}`}>
              <p className={`text-matteblack uppercase text-4xl lg:text-3xl sm:text-2xl xxs:text-xl ${mondaFont.className}`}>
                <FontAwesomeIcon icon={faLocationDot} className='px-5' />
                Address
              </p>
            </div>

             {/* Back Side */}
             <div className={`bg-customWhite ${styles.contact_get_in_touch_card_back_side}`}>
              <address className={`text-lg lg:text-base md:text-lg sm:text-base xxxs:text-sm ${mondaFont.className}`}>9235 BROADWATER DRIVE <br /> GAITHERSBURG, MD 20879</address>
             </div>

          </div>

        </div>

      </section>
      
      {/* Free Estimate Section */}
      <section className='bg-[#252525] py-16 xs:py-8'>

        <div className={`text-center ${styles.center_text}`}>
          <h1 className={`text-white uppercase text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl ${mondaFont.className}`}>Get a Free Estimate</h1>

          <br />

          <p className={`text-white text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs xs:text-left ${mondaFont.className}`}>We provide FREE estimates for all our customers! Simply fill out the form below and we will contact you as soon as possible.</p>

        </div>

      </section>

      {/* Contact Form Section */}
      <section className='bg-white py-16 xs:pt-8 xl:pb-0'>

        <div className='w-full mx-auto'>

          <div className='flex flex-row justify-between xl:flex-col'>

            {/* Contact Form Left Container */}
            <div className={`md:w-full pl-20 lg:pl-12 sm:pl-9 xs:pl-5 xxxs:pl-4`}>
              <h1 className={`uppercase text-[2.5rem] text-customMustardYellow font-medium tracking-wide md:text-4xl xs:text-3xl xxxs:text-2xl ${mondaFont.className}`}>Contact Us</h1>

              <p className='pt-4 text-xl whitespace-normal md:text-lg xs:text-base xxxs:text-sm w-[93%]'>Contact us to discuss your design and construction needs. We&apos;ll create a custom plan for you!</p>

              <ContactForm />
            </div>

            {/* Contact Form Right Container */}
            <div className='flex w-[33%] justify-center pr-20 xl:pr-0 xl:pt-10 xl:w-full'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.1724579302377!2d-77.19387208470651!3d39.17079997952938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7d3044108cb33%3A0x2ca238537bb1d65b!2sR%20%26%20S%20Constructions%20LLC!5e0!3m2!1sen!2sus!4v1657568797369!5m2!1sen!2sus"
                className='w-[400px] h-[777px] xl:!w-full xl:h-[450px]' title="R &amp; S Constructions LLC Google Map Location" style={{ border: 0 }} allowFullScreen loading='lazy'></iframe>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Contact;