import styles from '@/styles/About.module.css';
import CustomLink from '@/components/CustomLink';

import React from 'react';
import { Monda, Roboto } from 'next/font/google';

import SendEmail from '@/components/SendEmail';

const robotoFont = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '700'
})

const mondaFont = Monda({
  subsets: ['latin'],
  variable: '--font-monda',
  weight: '700'
})

const About = () => {

  return (
    <main className='overflow-x-hidden mt-24'>

      {/* About Hero Image Section */}
      <section>

        <div className={styles.aboutBackgroundImg}>

          <div>
            <h1 className={`uppercase text-ivory text-center text-[5rem] lg:text-6xl md:text-6xl sm:text-5xl xs:text-4xl xxxs:text-3xl ${robotoFont.className}`}>About Us</h1>
          </div>

        </div>

      </section>

      {/* About Form Section */}
      <section className='py-20 bg-white xs:py-10 xs:pb-0'>

        <div className='w-full mx-auto max-w-[1200px]'>

          <div className='flex flex-row justify-between xl:flex-col'>

            {/* Left Container */}
            <div className={`xl:ml-16 xl:break-words ${styles.about_page_text}`}>

              <h1 className={`uppercase text-4xl lg:text-3xl md:text-2xl xs:text-xl xxs:text-lg text-matteblack text-left ${mondaFont.className}`}>About R &amp; S Constructions</h1>

              <br />

              <p className={`text-xl text-left leading-[1.5em] lg:text-lg md:text-base xs:text-sm xxs:text-xs ${styles.about_text_description}`}>
                R &amp; S Constructions is a full-service general contractor licensed in the state of Maryland since 2016 that
                builds quality residential homes that add value to the communities we serve. We bring a passion for innovation
                and a commitment to quality to every job we do. Our company has an unwavering dedication to personal and
                professional integrity and has become a premier general contractor by delivering outstanding quality and value
                to all our clients.

                <br /><br />
                R &amp; S Constructions is carrying the values, ideals, traditions, and ethics of years of experience in all aspects
                of residential construction. Our unwavering loyalty and dedication to our employees, our clients, and our craft
                has been integral in cultivating our statewide client base. We appreciate the dedication and loyalty shown to us
                by our employees and clients and look towards the future to perfect our brand.

                <br /><br />
                Our primary goal is exceeding our client&apos;s expectations in all aspects of the construction process. Our values of
                integrity, honesty, and accountability extend to all aspects of the project from estimating through closeout. We
                believe open communication between the project team and client is a key component to the success of each project.
                Our culture is engrained in all our employees and suppliers in order to strive for 100% client satisfaction.

                <br /><br />
                We welcome and encourage client participation at every step in the construction process. Our experience,
                our belief in open communication, and our high-quality standards enable us to guide our clients through every
                stage of the construction process. Our customers know that our ingenuity, technology and innovative results will
                make us a leader in this dynamic market. It is comforting to know that our quality and commitment are unwavering,
                while aspiring to become a market leader in the industry. We plunge into the future with great passion, anticipation
                and enthusiasm for our ever-growing business.

                <br /><br />
                <CustomLink href='/contact' title='Contact us today' className='text-black font-bold transition-all duration-500 ease-out hover:text-customMustardYellow' /> or call us at <CustomLink href='tel:301-768-0298' title='(301) 768-0298' className='text-black font-bold transition-all duration-500 ease-out hover:text-customMustardYellow' />.
              </p>

            </div>

            {/* Right Container */}
            <div className='pl-16 xl:flex xl:flex-start xl:justify-start xl:pt-20 xs:pt-10 lg:ml-[-0.7rem] md:ml-[-1.6rem] sm:ml-[-2rem] xs:ml-[-4rem] xs:justify-center'>

              <div className='bg-[#525252] mt-2 py-16 w-[26rem] xs:w-[24rem] xxs:w-[20rem]'>

                <h2 className={`uppercase text-2xl text-center text-white font-semibold xs:text-xl xxs:text-lg ${styles.about_form_title}`}>Request A Free Estimate</h2>

                <br /><br />

                <SendEmail />

              </div>

            </div>

          </div>

        </div>


      </section>

    </main>
  );
};

export default About;