// app/contact/page.tsx or components/ContactPage.tsx
"use client"; // This must be a client component to handle form state and interactions.

import { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';
import styles from './ContactPage.module.css';

// Data for the country dropdown - much cleaner than hardcoding in JSX
const countries = [
  { value: "Afghanistan", label: "Afghanistan" },
  { value: "Albania", label: "Albania" },
  { value: "Algeria", label: "Algeria" },
  { value: "American Samoa", label: "American Samoa" },
  { value: "Andorra", label: "Andorra" },
  { value: "Angola", label: "Angola" },
  // ... All other countries from your list go here
  { value: "Pakistan", label: "Pakistan" },
  { value: "Yemen", label: "Yemen" },
  { value: "Zambia", label: "Zambia" },
  { value: "Zimbabwe", label: "Zimbabwe" },
];

// Data for the contact info blocks at the bottom
const contactInfoData = [
    {
        icon: 'icon-basic-map',
        title: 'HQ Address',
        details: 'Torun Center Garden Office A Blok No:46 Şişli–İstanbul'
    },
    {
        icon: 'icon-basic-map',
        title: 'Factory Address',
        details: 'Dindoğru Mahallesi, Pehlivanköy Yolu, Çimenlidere Mevkii, Bekler Küme Evleri No:1/11 Babaeski-Kırklareli'
    },
    {
        icon: 'icon-basic-mail',
        title: 'Email',
        details: <a href="mailto:info@cagstobacco.com">info@cagstobacco.com</a>
    },
    {
        icon: 'icon-basic-smartphone',
        title: 'Call Us',
        details: '+90 212 916 27 27'
    }
];


// Define the structure of our form data
interface FormData {
    name: string;
    city: string;
    country: string;
    district: string;
    email: string;
    phone: string;
    message: string;
    consent: boolean;
}

const ContactPage = () => {
    // State to hold all form input values
    const [formData, setFormData] = useState<FormData>({
        name: '',
        city: '',
        country: '',
        district: '',
        email: '',
        phone: '',
        message: '',
        consent: false,
    });

    // State to manage the form submission status (loading, success, error)
    const [status, setStatus] = useState({
        submitting: false,
        success: false,
        error: '',
    });

    // A single handler to update state for all form fields
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        
        // Handle checkbox differently
        // Inside your handleChange function...

const isCheckbox = type === 'checkbox';
if (isCheckbox) { // You don't need the '&& 'checked' in e.target' part
    setFormData(prevData => ({
        ...prevData,
        // Assert that e.target is an HTMLInputElement
        [name]: (e.target as HTMLInputElement).checked,
    }));
} else {
    // ... your existing logic for other fields
}
    };
    
    // Function to handle the form submission
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default browser form submission
        setStatus({ submitting: true, success: false, error: '' });

        // Here you would typically send the data to your API endpoint
        // For demonstration, we'll simulate a network request
        try {
            // Example: const response = await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData),
            // });
            // if (!response.ok) throw new Error('Network response was not ok.');
            
            // Simulating a successful submission after 2 seconds
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            console.log('Form Submitted:', formData);
            setStatus({ submitting: false, success: true, error: '' });
            // Optionally reset form:
            // setFormData({ name: '', city: '', ... });

        } catch (err) {
            setStatus({ submitting: false, success: false, error: 'There was an error sending your message.' });
        }
    };


    return (
        <>
            {/* Breadcrumbs Section */}
            <div className={styles.pageTitleContainer}>
                <div className={styles.container}>
                    <div className={styles.breadcrumbs}>
                        <Link href="/">HOME</Link>
                        <span className={styles.divider}>/</span>
                        <span>CONTACT</span>
                    </div>
                </div>
            </div>

            {/* Main Contact Form Section */}
            <section className={`${styles.pageSection} ${styles.clearfix}`}>
                <div className={styles.container}>
                    <div className={styles.formContainer}>
                        <h2>
                            <span className={styles.fontLight}>Contact Us</span>
                        </h2>
                        <p className={styles.introText}>
                            <strong>Join Our Distribution Network and Grow Your Business</strong><br />
                            If you want to join us in this journey, where we always have our distributors’ backs with our production, operation, and marketing communication actions and after-sales support applications, and get more information, just fill the distributorship form and get in touch with our team!
                        </p>

                        <div className={styles.formWrapper}>
                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div className={styles.row}>
                                    {/* Left Column Fields */}
                                    <div className={styles.column}>
                                        <input type="text" name="name" className={styles.formControl} placeholder="Name-Last Name *" required value={formData.name} onChange={handleChange} />
                                        <input type="text" name="city" className={styles.formControl} placeholder="City *" required value={formData.city} onChange={handleChange} />
                                    </div>
                                    {/* Right Column Fields */}
                                    <div className={styles.column}>
                                        <select name="country" className={styles.formControl} required value={formData.country} onChange={handleChange}>
                                            <option value="">Select Country *</option>
                                            {countries.map(country => (
                                                <option key={country.value} value={country.value}>{country.label}</option>
                                            ))}
                                        </select>
                                        <input type="text" name="district" className={styles.formControl} placeholder="District *" required value={formData.district} onChange={handleChange} />
                                    </div>
                                    {/* Second Row of Fields */}
                                    <div className={styles.column}>
                                        <input type="email" name="email" className={styles.formControl} placeholder="E-mail *" required value={formData.email} onChange={handleChange} />
                                        <input type="text" name="phone" className={styles.formControl} placeholder="Phone Number *" required value={formData.phone} onChange={handleChange} />
                                    </div>
                                     <div className={styles.column}>
                                        <textarea name="message" rows={5} className={styles.formControl} placeholder="MESSAGE *" required value={formData.message} onChange={handleChange}></textarea>
                                    </div>
                                </div>
                                
                                {/* Consent Checkbox */}
                                <div className={styles.consentRow}>
                                    <div className={styles.checkboxWrapper}>
                                        <input type="checkbox" name="consent" id="consent" required checked={formData.consent} onChange={handleChange} />
                                    </div>
                                    <div className={styles.consentText}>
                                        <label htmlFor="consent">
                                            By subscribing to our newsletter and providing your email address, you consent to the processing and sharing of your personal information...
                                        </label>
                                    </div>
                                </div>
                                
                                {/* Submit Button and Status Messages */}
                                <div className={styles.submitRow}>
                                    <button type="submit" className={styles.submitButton} disabled={status.submitting}>
                                        {status.submitting ? 'SENDING...' : 'SEND'}
                                    </button>
                                </div>
                                
                                {status.success && (
                                    <div className={styles.alertSuccess}>
                                        <strong>Success!</strong> Your message has been sent to us.
                                    </div>
                                )}
                                {status.error && (
                                    <div className={styles.alertError}>
                                        <strong>Error!</strong> {status.error}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Google Maps Section */}
            <section className={styles.pageSection}>
                <div className={styles.containerFluid}>
                    <div className={styles.row}>
                        <div className={styles.column}>
                             <div className={styles.mapWrapper}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.638424283842!2d28.98569481538392!3d41.03310397929845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab76508935c7d%3A0x2914e6bfc93e18a!2sTorun%20Center!5e0!3m2!1sen!2str!4v1678886425021" width="100%" height="310" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                         <div className={styles.column}>
                             <div className={styles.mapWrapper}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.638424283842!2d28.98569481538392!3d41.03310397929845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab76508935c7d%3A0x2914e6bfc93e18a!2sTorun%20Center!5e0!3m2!1sen!2str!4v1678886425021" width="100%" height="310" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
             {/* Contact Info Blocks Section */}
            <section id="contact-link" className={styles.contactInfoSection}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        {contactInfoData.map((info, index) => (
                             <div key={index} className={styles.contactInfoColumn}>
                                <div className={styles.contactInfoBlock}>
                                    <div className={styles.iconWrapper}>
                                        <div className={info.icon}></div>
                                    </div>
                                    <div className={styles.textWrapper}>
                                        <h3><span className={styles.bold}>{info.title}</span></h3>
                                        <p>{info.details}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;