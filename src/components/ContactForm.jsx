"use client"

import styles from '@/styles/Contact.module.css';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Montserrat } from 'next/font/google';

const montserratFont = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat'
});

const ContactForm = () => {

    const form = useRef();
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedInput, setFocusedInput] = useState(null);

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

    const handleFocus = (inputName) => {
        setFocusedInput(inputName);
    };

    const handleBlur = () => {
        setFocusedInput(null);
    };

    return (
        <form ref={form} onSubmit={sendEmail} className={`pt-10 ${styles.form_text_font}`} noValidate>
            <div className='flex flex-wrap box-border'>

                {/* USER Name */}
                <div className='w-2/3 md:w-[93%]'>
                    <label className='text-2xl md:text-xl xxxs:text-base'>Name <div className='inline animate-pulse text-red-500'>*</div></label>
                    <br />
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Name"
                        required
                        onFocus={() => handleFocus("user_name")}
                        onBlur={handleBlur}
                        onChange={() => clearError('user_name')}
                        className={`md:!w-full xxxs:!text-base ${focusedInput === "user_name" ? 'border-customMustardYellow' : 'border-black'} ${styles.contact_form_user_name}`}
                    />
                    {errors.user_name &&
                        <div className="mt-2 flex justify-start">
                            <span className={`text-red-500 font-bold animate-pulse text-base xxs:text-sm ${montserratFont.className}`}>{errors.user_name}</span>
                        </div>
                    }
                </div>

                {/* USER Phone */}
                <div className='w-1/3 md:pt-5 md:w-[93%]'>
                    <label className='text-2xl md:text-xl xxxs:text-base'>Phone</label>
                    <br />
                    <input
                        type="text"
                        name="user_phone"
                        placeholder="Phone"
                        onFocus={() => handleFocus("user_phone")}
                        onBlur={handleBlur}
                        onChange={handlePhoneNumberChange}
                        className={`md:!w-full xxxs:!text-base ${focusedInput === "user_phone" ? 'border-customMustardYellow' : 'border-black'} ${styles.contact_form_user_phone} `}
                    />
                </div>

                {/* USER Email */}
                <div className='pt-5 w-[88.66%] md:w-[93%]'>
                    <label className='text-2xl md:text-xl xxxs:text-base'>Email <div className='inline animate-pulse text-red-500'>*</div></label>
                    <br />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Email"
                        required
                        onFocus={() => handleFocus("user_email")}
                        onBlur={handleBlur}
                        onChange={() => clearError('user_email')}
                        className={`!w-full xxxs:!text-base ${focusedInput === "user_email" ? 'border-customMustardYellow' : 'border-black'} ${styles.contact_form_user_email} `}
                    />
                    {errors.user_email &&
                        <div className="mt-2 flex justify-start">
                            <span className={`text-red-500 font-bold animate-pulse text-base xxs:text-sm ${montserratFont.className}`}>{errors.user_email}</span>
                        </div>
                    }
                </div>

                {/* USER Address */}
                <div className='pt-5 w-2/3 md:w-[93%]'>
                    <label className='text-2xl md:text-xlxs:text-lg  xxxs:text-base'>Address</label>
                    <br />
                    <input
                        type="text"
                        name="user_address"
                        placeholder="Address"
                        onFocus={() => handleFocus("user_address")}
                        onBlur={handleBlur}
                        className={`md:!w-full xxxs:!text-base ${focusedInput === "user_address" ? 'border-customMustardYellow' : 'border-black'} ${styles.contact_form_user_address} `}
                    />
                </div>

                {/* USER State */}
                <div className='pt-5 w-1/3 md:w-[93%]'>
                    <label className='text-2xl md:text-xl xxxs:text-base'>State <div className='inline animate-pulse text-red-500'>*</div></label>
                    <br />
                    <input
                        type="text"
                        name="user_state"
                        placeholder="State"
                        list='select_state'
                        required
                        onFocus={() => handleFocus("user_state")}
                        onBlur={handleBlur}
                        onChange={() => clearError('user_state')}
                        className={`md:!w-full xxxs:!text-base ${focusedInput === "user_state" ? 'border-customMustardYellow' : 'border-black'} ${styles.contact_form_user_state} `}
                    />
                    <datalist id='select_state'>
                        <option>DC</option>
                        <option>MD</option>
                        <option>VA</option>
                    </datalist>
                    {errors.user_state &&
                        <div className="mt-2 flex justify-start">
                            <span className={`text-red-500 font-bold animate-pulse text-base xxs:text-sm ${montserratFont.className}`}>{errors.user_state}</span>
                        </div>
                    }
                </div>

                {/* USER City */}
                <div className='pt-5 w-2/3 md:w-[93%]'>
                    <label className='text-2xl md:text-xl xxxs:text-base'>City</label>
                    <br />
                    <input
                        type="text"
                        name="user_city"
                        placeholder="City"
                        onFocus={() => handleFocus("user_city")}
                        onBlur={handleBlur}
                        className={`md:!w-full xxxs:!text-base ${focusedInput === "user_city" ? 'border-customMustardYellow' : 'border-black'} ${styles.contact_form_user_city} `}
                    />
                </div>

                {/* USER Zipcode */}
                <div className='pt-5 w-1/3 md:w-[93%]'>
                    <label className='text-2xl md:text-xl xxxs:text-base'>Zipcode</label>
                    <br />
                    <input
                        type="text"
                        name="user_zipcode"
                        placeholder="Zipcode"
                        onFocus={() => handleFocus("user_zipcode")}
                        onBlur={handleBlur}
                        minLength={0}
                        maxLength={5}
                        className={`md:!w-full xxxs:!text-base ${focusedInput === "user_zipcode" ? 'border-customMustardYellow' : 'border-black'} ${styles.contact_form_user_zipcode} `}
                    />
                </div>

                {/* USER Message */}
                <div className='pt-5 w-[88.66%] md:w-[93%]'>
                    <label className='text-2xl md:text-xl xxxs:text-base'>Message <div className='inline animate-pulse text-red-500'>*</div></label>
                    <br />
                    <textarea
                        name="user_message"
                        placeholder="How Can We Help You?"
                        required
                        onFocus={() => handleFocus("user_message")}
                        onBlur={handleBlur}
                        onChange={() => clearError('user_message')}
                        className={`!w-full xxxs:!text-base ${focusedInput === "user_message" ? 'border-customMustardYellow' : 'border-black'} ${styles.contact_form_user_message} `}
                    />
                    {errors.user_message &&
                        <div className="mt-2 flex justify-start">
                            <span className={`text-red-500 font-bold animate-pulse text-base xxs:text-sm ${montserratFont.className}`}>{errors.user_message}</span>
                        </div>
                    }
                </div>

                {/* Submit Button */}
                <div className='pt-5 w-[88.66%]'>
                    <div className='flex justify-center items-center'>
                        <div className="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden text-customBlue transition duration-300 ease-out border-2 border-customBlue rounded-full shadow-md group">
                            <input type="submit" value="Submit" className="absolute inset-0 z-10 w-full h-full opacity-0 cursor-pointer" />
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-customBlue group-hover:translate-x-0 ease">
                                <svg className={`w-6 h-6 ${isSubmitting ? 'animate-ping' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
                            <span className={`text-base uppercase font-semibold absolute flex items-center justify-center w-full h-full text-customBlue transition-all duration-300 transform group-hover:translate-x-full ease xxs:text-sm ${styles.contact_form_submit_button}`}>Submit</span>
                            <span className="relative invisible">Submit</span>
                        </div>
                    </div>
                </div>

            </div>

        </form>
    );
};

export default ContactForm;