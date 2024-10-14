"use client"

import styles from '@/styles/About.module.css';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Montserrat } from 'next/font/google';

const montserratFont = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat'
});

const SendEmail = () => {

    const form = useRef();
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const serviceID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Check for required fields
        const requiredFields = ['user_name', 'user_email', 'user_state', 'user_message'];
        const newErrors = {};
        let hasError = false;

        requiredFields.forEach((fieldName) => {
            if (!form.current[fieldName].value.trim()) {
                newErrors[fieldName] = 'This field is required.';
                hasError = true;
            }
        });

        // Email validation
        const email = form.current['user_email'].value.trim();
        if (email && !isValidEmail(email)) {
            newErrors['user_email'] = 'Please enter a valid email address.';
            hasError = true;
        }

        if (hasError) {
            setErrors(newErrors);
            // Scroll to the first field with an error
            const firstErrorField = Object.keys(newErrors)[0];
            const errorFieldElement = form.current[firstErrorField];
            errorFieldElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Check if the email error exists and scroll to it if necessary
            if (newErrors['user_email']) {
                const emailErrorField = form.current['user_email'];
                emailErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }

            setIsSubmitting(false);
            return;
        }

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }).finally(() => {
                form.current.reset();
                setErrors({});
                setIsSubmitting(false); // Set isSubmitting to false after submission
            });
        // form.current.reset();
        // setErrors({});
    };

    const clearError = (fieldName) => {
        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            delete newErrors[fieldName];
            return newErrors;
        });
    };

    const formatPhoneNumber = (input) => {
        // Remove non-numeric characters from input
        const cleaned = ('' + input).replace(/\D/g, '');

        // Check if the input has 10 digits
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }

        return input;
    };

    const handlePhoneNumberChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        if (value.length > 10) {
            value = value.slice(0, 10); // Restrict to 10 digits
        }
        e.target.value = formatPhoneNumber(value);
    };

    const isValidEmail = (email) => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <form ref={form} onSubmit={sendEmail} noValidate>

            <input type="text" name="user_name" placeholder="Name *" required className={`${styles.about_form_user_name}`} onChange={() => clearError('user_name')} />
            {errors.user_name &&
                <div className="mt-5 mb-5 flex justify-center">
                    <span className={`text-red-500 font-bold animate-pulse text-base xxs:text-sm ${montserratFont.className}`}>{errors.user_name}</span>
                </div>
            }
            {!errors.user_name && <><br /><br /><br /></>}
            {/* <br /><br /><br /> */}


            <input 
                type="email" 
                name="user_email" 
                placeholder="Email *" 
                required 
                className={`${styles.about_form_user_email}`} 
                onChange={() => clearError('user_email')} 
            />
            {errors.user_email &&
                <div className="mt-5 mb-5 flex justify-center">
                    <span className={`text-red-500 font-bold animate-pulse text-base xxs:text-sm ${montserratFont.className}`}>{errors.user_email}</span>
                </div>
            }
            {!errors.user_email && <><br /><br /><br /></>}
            {/* <br /><br /><br /> */}

            <input type="phone" name="user_phone" placeholder="Phone Number" className={`${styles.about_form_user_phone}`} onChange={handlePhoneNumberChange} />
            <br /><br /><br />

            <input type="address" name="user_address" placeholder="Street Address" className={`${styles.about_form_user_address}`} />
            <br /><br /><br />

            <input type="text" name="user_city" placeholder="City" className={`${styles.about_form_user_city}`} />
            <br /><br /><br />

            <input type="text" name="user_state" placeholder="State *" list="select_state" required className={`${styles.about_form_user_state}`} onChange={() => clearError('user_state')} />
            <datalist id="select_state">
                <option>DC</option>
                <option>MD</option>
                <option>VA</option>
            </datalist>
            {errors.user_state &&
                <div className="mt-5 mb-5 flex justify-center">
                    <span className={`text-red-500 font-bold animate-pulse text-base xxs:text-sm ${montserratFont.className}`}>{errors.user_state}</span>
                </div>
            }
            {!errors.user_state && <><br /><br /><br /></>}
            {/* <br /><br /><br /> */}

            <input type="text" name="user_zipcode" min="0" maxLength={5} placeholder="Zipcode" className={`${styles.about_form_user_zipcode}`} />
            <br /><br /><br />

            <textarea name="user_message" placeholder="How Can We Help You? *" required className={`${styles.about_form_user_message}`} onChange={() => clearError('user_message')} />
            {errors.user_message &&
                <div className="mt-1 mb-5 flex justify-center">
                    <span className={`text-red-500 font-bold animate-pulse text-base xxs:text-sm ${montserratFont.className}`}>{errors.user_message}</span>
                </div>
            }
            {!errors.user_message && <><br /><br /></>}
            {/* <br /><br /><br /> */}

            <div className='flex justify-center items-center'>
                {/* <input type="submit" value="Submit" className={`transition-all duration-500 ease-out hover:bg-customBlue hover:text-white ${styles.about_form_submit_button}`} /> */}
                <div className="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden text-customBlue transition duration-300 ease-out border-2 border-customBlue rounded-full shadow-md group">
                    <input type="submit" value="Submit" className="absolute inset-0 z-10 w-full h-full opacity-0 cursor-pointer" />
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-customBlue group-hover:translate-x-0 ease">
                        <svg className={`w-6 h-6 ${isSubmitting ? 'animate-ping' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </span>
                    <span className={`text-base uppercase font-semibold absolute flex items-center justify-center w-full h-full text-customBlue transition-all duration-300 transform group-hover:translate-x-full ease xxs:text-sm ${styles.about_form_submit_button}`}>Submit</span>
                    <span className="relative invisible">Submit</span>
                </div>
            </div>
        </form>
    );
};

export default SendEmail;
