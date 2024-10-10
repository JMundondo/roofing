"use client";
import PageLayout from "@/components/PageLayout";
import Head from "next/head";
import { Monda, Righteous, Roboto } from "next/font/google";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import ImageCarousel from "@/components/ImageCarousel";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Wrench,
  Award,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const robotoFont = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "700",
});

const robotoFontThin = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "400",
});

const righteousFont = Righteous({
  subsets: ["latin"],
  variable: "--font-righteous",
  weight: "400",
});

const services = [
  {
    title: "Residential Roofing",
    image: "/images/services/residential.jpeg",
    description:
      "Professional residential roofing solutions with quality craftsmanship and attention to detail.",
  },
  {
    title: "Commercial Roofing",
    image: "/images/services/commercial.jpeg",
    description:
      "Expert commercial roofing solutions for businesses of all sizes.",
  },
  {
    title: "Emergency Repairs",
    image: "/images/services/emergency.jpeg",
    description: "24/7 emergency repair services to protect your property.",
  },
];

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully certified and insured for your peace of mind",
  },
  {
    icon: Wrench,
    title: "Quality Materials",
    description: "Premium materials from trusted suppliers",
  },
  {
    icon: Award,
    title: "Expert Craftsmen",
    description: "Skilled professionals with years of experience",
  },
  {
    icon: Clock,
    title: "Timely Service",
    description: "On-time project completion guaranteed",
  },
];

const testimonials = [
  {
    name: "John Smith",
    role: "Homeowner",
    text: "Exceptional service from start to finish. The team was professional, punctual, and the quality of work exceeded our expectations.",
  },
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    text: "Shumba Carpenters handled our commercial roofing project with expertise. Their attention to detail and commitment to quality is outstanding.",
  },
  {
    name: "Michael Brown",
    role: "Property Manager",
    text: "We've been using Shumba Carpenters for all our roofing needs. Their emergency response time and quality of work is unmatched.",
  },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
      <Head>
        <title>
          Shumba Carpenters Professional Roofing Services in Zimbabwe
        </title>
        <meta
          name="description"
          content="Expert roofing solutions for residential and commercial properties in Harare, Zimbabwe. Quality craftsmanship since 2011."
        />
      </Head>

      <main className="overflow-x-hidden">
        {/* Hero Section with Carousel */}
        <section className="relative">
          <ImageCarousel />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-10">
            <Link href="/services">
              <button className="px-8 py-3 bg-white text-black font-bold rounded-md hover:bg-opacity-90 transition-all">
                Our Services
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-3 bg-black text-white font-bold rounded-md hover:bg-opacity-90 transition-all">
                Get Estimate
              </button>
            </Link>
          </div>
        </section>

        {/* Quick Contact Bar */}
        <section className="bg-black text-white py-4">
          <div className="container mx-auto flex justify-center items-center gap-8 flex-wrap px-4">
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span>24/7 Emergency: (123) 456-7890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <span>info@shumbacarpenters.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Harare Zimbabwe</span>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className={`${robotoFont.className} text-4xl mb-6`}>
                Welcome to Shumba Carpenters
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Since 2011, we have been providing top-quality roofing solutions
                to homes and businesses across Zimbabwe. Our commitment to
                excellence and customer satisfaction has made us one of the most
                trusted names in the industry.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/about">
                  <button className="px-6 py-2 border-2 border-black text-black font-semibold rounded-md hover:bg-black hover:text-white transition-all">
                    Learn More About Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2
              className={`${robotoFont.className} text-3xl md:text-4xl mb-8 md:mb-12 text-center font-bold`}
            >
              Why Choose Shumba Carpenters
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-black rounded-full">
                    <feature.icon size={32} className="text-white" />
                  </div>
                  <h3
                    className={`${robotoFont.className} text-xl mb-2 font-semibold`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 md:py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2
              className={`${robotoFont.className} text-3xl md:text-4xl mb-8 md:mb-12 text-center font-bold`}
            >
              What Our Clients Say
            </h2>
            <div className="relative">
              <div className="overflow-hidden">
                <motion.div
                  className="flex transition-all duration-300 ease-in-out"
                  style={{
                    transform: `translateX(-${activeTestimonial * 100}%)`,
                    width: `${testimonials.length * 100}%`,
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                          <div>
                            <h4 className="font-semibold">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-600 italic">
                          {testimonial.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
              <div className="flex justify-center mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full mx-1 ${
                      index === activeTestimonial ? "bg-black" : "bg-gray-300"
                    }`}
                    onClick={() => setActiveTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-black text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className={`${robotoFont.className} text-4xl mb-6`}>
              Ready to Start Your Project?
            </h2>
            <p className="mb-8 text-lg max-w-2xl mx-auto">
              Whether you need a new roof, repairs, or maintenance, our team is
              ready to help. Get a free estimate for your roofing needs today!
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-3 bg-white text-black font-bold rounded-md hover:bg-gray-100 transition-all">
                  Contact Us Now
                </button>
              </Link>
              <Link href="/tel:123-456-7890">
                <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-black transition-all">
                  Call Us
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
