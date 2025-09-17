"use client";

import { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';
import styles from './ContactPage.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../Footer';

const countries = [
  { value: "Afghanistan", label: "Afghanistan" },
  { value: "Albania", label: "Albania" },
  { value: "Algeria", label: "Algeria" },
  { value: "American Samoa", label: "American Samoa" },
  { value: "Andorra", label: "Andorra" },
  { value: "Angola", label: "Angola" },
  { value: "Pakistan", label: "Pakistan" },
  { value: "Yemen", label: "Yemen" },
  { value: "Zambia", label: "Zambia" },
  { value: "Zimbabwe", label: "Zimbabwe" },
];

const contactInfoData = [
    {
        icon: 'fas fa-map',
        title: 'HQ Address',
        details: 'Torun Center Garden Office A Blok No:46 Şişli–İstanbul',
    },
    {
        icon: 'fas fa-map',
        title: 'Factory Address',
        details: 'Dindoğru Mahallesi, Pehlivanköy Yolu, Çimenlidere Mevkii, Bekler Küme Evleri No:1/11 Babaeski-Kırklareli',
    },
    {
        icon: 'fas fa-envelope',
        title: 'Email',
        details: <a href="mailto:info@cagstobacco.com">info@cagstobacco.com</a>,
    },
    {
        icon: 'fas fa-mobile',
        title: 'Call Us',
        details: <a href="tel:+902129162727">+90 212 916 27 27</a>,
    },
];

// MODIFICATION 1: Update the interface to use your desired labels
interface FormData {
  'Full Name': string;
  'City': string;
  'Select Country': string;
  'District': string;
  'Email': string;
  'Phone': string;
  'Message': string;
  'Consent': boolean;
}

const ContactPage = () => {
  // MODIFICATION 2: Update the initial state to match the new interface
  const [formData, setFormData] = useState<FormData>({
    'Full Name': '',
    'City': '',
    'Select Country': '',
    'District': '',
    'Email': '',
    'Phone': '',
    'Message': '',
    'Consent': false,
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: '' });

    const submissionData = new FormData();
    // This will now use the updated keys like 'Full Name'
    Object.entries(formData).forEach(([key, value]) => {
      submissionData.append(key, String(value));
    });

    // MODIFICATION 3: Update hidden fields for the new email template
    submissionData.append('_subject', 'Query submitted from Contact Us page');
    submissionData.append('_template', 'table');
    submissionData.append('_cc', 'info@cagstobacco.com');
    // Access the email using the new key
    submissionData.append('_replyto', formData['Email']);

    try {
      const response = await fetch('https://formsubmit.co/ajax/sales@cagstobacco.com', {
        method: 'POST',
        body: submissionData,
        headers: {
            'Accept': 'application/json'
        }
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus({ submitting: false, success: true, error: '' });
        // Reset form using the new keys
        setFormData({
            'Full Name': '',
            'City': '',
            'Select Country': '',
            'District': '',
            'Email': '',
            'Phone': '',
            'Message': '',
            'Consent': false,
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (err: any) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message || 'There was an error sending your message. Please try again later.',
      });
    }
  };

  return (
    <>
      <div className={styles.pageTitleContainer}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link href="/">HOME</Link>
            <span className={styles.divider}>/</span>
            <span>CONTACT</span>
          </div>
        </div>
      </div>

      <section className={`${styles.pageSection} ${styles.clearfix}`}>
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <h2 className="text-left">
              <span className={styles.fontLight}>Contact Us</span>
            </h2>
            <p className={styles.introText}>
              <strong className={styles.textleft}>Join Our Distribution Network and Grow Your Business</strong>
              <br />
              If you want to join us in this journey, where we always have our distributors’ backs with our production, operation, and marketing communication actions and after-sales support applications, and get more information, just fill the distributorship form and get in touch with our team!
            </p>

            <div className={styles.formWrapper}>
              <form id="contact-form" onSubmit={handleSubmit}>
                <input type="checkbox" name="_honeypot" style={{display: 'none'}} tabIndex={-1} autoComplete="off" />
                
                {/* MODIFICATION 4: Update the name and value attributes in your form inputs */}
                <div className={styles.row}>
                  <div className={styles.column}>
                    <input type="text" name="Full Name" className={styles.formControl} placeholder="Full Name *" required value={formData['Full Name']} onChange={handleChange} />
                    <input type="text" name="City" className={styles.formControl} placeholder="City *" required value={formData['City']} onChange={handleChange} />
                  </div>
                  <div className={styles.column}>
                    <select name="Select Country" className={styles.formControl} required value={formData['Select Country']} onChange={handleChange}>
                      <option value="">Select Country *</option>
                      {countries.map((country) => (
                        <option key={country.value} value={country.value}>{country.label}</option>
                      ))}
                    </select>
                    <input type="text" name="District" className={styles.formControl} placeholder="District *" required value={formData['District']} onChange={handleChange} />
                  </div>
                  <div className={styles.column}>
                    <input type="email" name="Email" className={styles.formControl} placeholder="E-mail *" required value={formData['Email']} onChange={handleChange} />
                    <input type="text" name="Phone" className={styles.formControl} placeholder="Phone Number *" required value={formData['Phone']} onChange={handleChange} />
                  </div>
                  <div className={styles.column}>
                    <textarea name="Message" rows={3} className={styles.formControl} placeholder="MESSAGE *" required value={formData['Message']} onChange={handleChange}></textarea>
                  </div>
                </div>

                <div className={styles.consentRow}>
                  <div className={styles.checkboxWrapper}>
                    <input type="checkbox" name="Consent" id="consent" required checked={formData['Consent']} onChange={handleChange} />
                  </div>
                  <div className={styles.consentText}>
                    <label htmlFor="consent" className={styles.label}>
                      By subscribing to our newsletter and providing your email address, you consent to the processing and sharing of your personal information, including but not limited to, receiving updates, offers, promotions, and similar email communications from CAGS TOBACCO TOBACCO AND TOBACCO PRODUCTS INC., its affiliated companies, employees, and third-party service providers engaged in messaging services. This notice is provided in compliance with the General Data Protection Regulation ("GDPR") and is designed to ensure the lawful processing and protection of your personal data. To learn more about your rights regarding the collection and processing of your personal data, please review our privacy policy or contact us.
                    </label>
                  </div>
                </div>

                <div className={styles.submitRow}>
                  <button type="submit" className={styles.submitButton} disabled={status.submitting}>
                    {status.submitting ? 'SENDING...' : 'SEND'}
                  </button>
                </div>

                {status.success && (
                  <div className={styles.alertSuccess}>
                    Success! Your message has been sent to us.
                  </div>
                )}
                {status.error && (
                  <div className={styles.alertError}>
                    Error! {status.error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.pageSection}>
        <div className={styles.containerFluid}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.mapWrapper}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.635839994646!2d28.98595881541577!3d41.03333337929841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab765a2a22f4b%3A0x5a7c739a8c17b621!2sTorun%20Center!5e0!3m2!1sen!2str!4v1620055523891!5m2!1sen!2str" 
                  width="600" 
                  height="450" 
                  style={{ width: "100%", height: "310px", border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  >
                </iframe>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.mapWrapper}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.635839994646!2d28.98595881541577!3d41.03333337929841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab765a2a22f4b%3A0x5a7c739a8c17b621!2sCAGS%20Tobacco!5e0!3m2!1sen!2str!4v1620055589123!5m2!1sen!2str" 
                  width="600" 
                  height="450" 
                    style={{ width: "100%", height: "310px", border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  >

                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-link" className={styles.contactInfoSection}>
        <div className={styles.container}>
          <div className={styles.row}>
            {contactInfoData.map((info, index) => (
              <div key={index} className={styles.contactInfoColumn}>
                <div className={styles.contactInfoBlock}>
                  <div className={styles.iconWrapper}>
                    <i className={info.icon} style={{ fontSize: '35px', color: '#7e8082', verticalAlign: 'middle', }}></i>
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
        <Footer />
    </>
  );
};

export default ContactPage;