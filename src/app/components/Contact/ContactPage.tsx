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
  { value: "Anguilla", label: "Anguilla" },
  { value: "Antarctica", label: "Antarctica" },
  { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
  { value: "Argentina", label: "Argentina" },
  { value: "Armenia", label: "Armenia" },
  { value: "Aruba", label: "Aruba" },
  { value: "Australia", label: "Australia" },
  { value: "Austria", label: "Austria" },
  { value: "Azerbaijan", label: "Azerbaijan" },
  { value: "Bahamas", label: "Bahamas" },
  { value: "Bahrain", label: "Bahrain" },
  { value: "Bangladesh", label: "Bangladesh" },
  { value: "Barbados", label: "Barbados" },
  { value: "Belarus", label: "Belarus" },
  { value: "Belgium", label: "Belgium" },
  { value: "Belize", label: "Belize" },
  { value: "Benin", label: "Benin" },
  { value: "Bermuda", label: "Bermuda" },
  { value: "Bhutan", label: "Bhutan" },
  { value: "Bolivia", label: "Bolivia" },
  { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
  { value: "Botswana", label: "Botswana" },
  { value: "Brazil", label: "Brazil" },
  { value: "British Indian Ocean Territory", label: "British Indian Ocean Territory" },
  { value: "British Virgin Islands", label: "British Virgin Islands" },
  { value: "Brunei", label: "Brunei" },
  { value: "Bulgaria", label: "Bulgaria" },
  { value: "Burkina Faso", label: "Burkina Faso" },
  { value: "Burundi", label: "Burundi" },
  { value: "Cambodia", label: "Cambodia" },
  { value: "Cameroon", label: "Cameroon" },
  { value: "Canada", label: "Canada" },
  { value: "Cape Verde", label: "Cape Verde" },
  { value: "Cayman Islands", label: "Cayman Islands" },
  { value: "Central African Republic", label: "Central African Republic" },
  { value: "Chad", label: "Chad" },
  { value: "Chile", label: "Chile" },
  { value: "China", label: "China" },
  { value: "Christmas Island", label: "Christmas Island" },
  { value: "Cocos Islands", label: "Cocos Islands" },
  { value: "Colombia", label: "Colombia" },
  { value: "Comoros", label: "Comoros" },
  { value: "Cook Islands", label: "Cook Islands" },
  { value: "Costa Rica", label: "Costa Rica" },
  { value: "Croatia", label: "Croatia" },
  { value: "Cuba", label: "Cuba" },
  { value: "Curacao", label: "Curacao" },
  { value: "Cyprus", label: "Cyprus" },
  { value: "Czech Republic", label: "Czech Republic" },
  { value: "Democratic Republic of the Congo", label: "Democratic Republic of the Congo" },
  { value: "Denmark", label: "Denmark" },
  { value: "Djibouti", label: "Djibouti" },
  { value: "Dominica", label: "Dominica" },
  { value: "Dominican Republic", label: "Dominican Republic" },
  { value: "East Timor", label: "East Timor" },
  { value: "Ecuador", label: "Ecuador" },
  { value: "Egypt", label: "Egypt" },
  { value: "El Salvador", label: "El Salvador" },
  { value: "Equatorial Guinea", label: "Equatorial Guinea" },
  { value: "Eritrea", label: "Eritrea" },
  { value: "Estonia", label: "Estonia" },
  { value: "Ethiopia", label: "Ethiopia" },
  { value: "Falkland Islands", label: "Falkland Islands" },
  { value: "Faroe Islands", label: "Faroe Islands" },
  { value: "Fiji", label: "Fiji" },
  { value: "Finland", label: "Finland" },
  { value: "France", label: "France" },
  { value: "French Polynesia", label: "French Polynesia" },
  { value: "Gabon", label: "Gabon" },
  { value: "Gambia", label: "Gambia" },
  { value: "Georgia", label: "Georgia" },
  { value: "Germany", label: "Germany" },
  { value: "Ghana", label: "Ghana" },
  { value: "Gibraltar", label: "Gibraltar" },
  { value: "Greece", label: "Greece" },
  { value: "Greenland", label: "Greenland" },
  { value: "Grenada", label: "Grenada" },
  { value: "Guam", label: "Guam" },
  { value: "Guatemala", label: "Guatemala" },
  { value: "Guernsey", label: "Guernsey" },
  { value: "Guinea", label: "Guinea" },
  { value: "Guinea-Bissau", label: "Guinea-Bissau" },
  { value: "Guyana", label: "Guyana" },
  { value: "Haiti", label: "Haiti" },
  { value: "Honduras", label: "Honduras" },
  { value: "Hong Kong", label: "Hong Kong" },
  { value: "Hungary", label: "Hungary" },
  { value: "Iceland", label: "Iceland" },
  { value: "India", label: "India" },
  { value: "Indonesia", label: "Indonesia" },
  { value: "Iran", label: "Iran" },
  { value: "Iraq", label: "Iraq" },
  { value: "Ireland", label: "Ireland" },
  { value: "Isle of Man", label: "Isle of Man" },
  { value: "Israel", label: "Israel" },
  { value: "Italy", label: "Italy" },
  { value: "Ivory Coast", label: "Ivory Coast" },
  { value: "Jamaica", label: "Jamaica" },
  { value: "Japan", label: "Japan" },
  { value: "Jersey", label: "Jersey" },
  { value: "Jordan", label: "Jordan" },
  { value: "Kazakhstan", label: "Kazakhstan" },
  { value: "Kenya", label: "Kenya" },
  { value: "Kiribati", label: "Kiribati" },
  { value: "Kosovo", label: "Kosovo" },
  { value: "Kuwait", label: "Kuwait" },
  { value: "Kyrgyzstan", label: "Kyrgyzstan" },
  { value: "Laos", label: "Laos" },
  { value: "Latvia", label: "Latvia" },
  { value: "Lebanon", label: "Lebanon" },
  { value: "Lesotho", label: "Lesotho" },
  { value: "Liberia", label: "Liberia" },
  { value: "Libya", label: "Libya" },
  { value: "Liechtenstein", label: "Liechtenstein" },
  { value: "Lithuania", label: "Lithuania" },
  { value: "Luxembourg", label: "Luxembourg" },
  { value: "Macau", label: "Macau" },
  { value: "Macedonia", label: "Macedonia" },
  { value: "Madagascar", label: "Madagascar" },
  { value: "Malawi", label: "Malawi" },
  { value: "Malaysia", label: "Malaysia" },
  { value: "Maldives", label: "Maldives" },
  { value: "Mali", label: "Mali" },
  { value: "Malta", label: "Malta" },
  { value: "Marshall Islands", label: "Marshall Islands" },
  { value: "Mauritania", label: "Mauritania" },
  { value: "Mauritius", label: "Mauritius" },
  { value: "Mayotte", label: "Mayotte" },
  { value: "Mexico", label: "Mexico" },
  { value: "Micronesia", label: "Micronesia" },
  { value: "Moldova", label: "Moldova" },
  { value: "Monaco", label: "Monaco" },
  { value: "Mongolia", label: "Mongolia" },
  { value: "Montenegro", label: "Montenegro" },
  { value: "Montserrat", label: "Montserrat" },
  { value: "Morocco", label: "Morocco" },
  { value: "Mozambique", label: "Mozambique" },
  { value: "Myanmar", label: "Myanmar" },
  { value: "Namibia", label: "Namibia" },
  { value: "Nauru", label: "Nauru" },
  { value: "Nepal", label: "Nepal" },
  { value: "Netherlands", label: "Netherlands" },
  { value: "Netherlands Antilles", label: "Netherlands Antilles" },
  { value: "New Caledonia", label: "New Caledonia" },
  { value: "New Zealand", label: "New Zealand" },
  { value: "Nicaragua", label: "Nicaragua" },
  { value: "Niger", label: "Niger" },
  { value: "Nigeria", label: "Nigeria" },
  { value: "Niue", label: "Niue" },
  { value: "North Korea", label: "North Korea" },
  { value: "Northern Mariana Islands", label: "Northern Mariana Islands" },
  { value: "Norway", label: "Norway" },
  { value: "Oman", label: "Oman" },
  { value: "Pakistan", label: "Pakistan" },
  { value: "Palau", label: "Palau" },
  { value: "Palestine", label: "Palestine" },
  { value: "Panama", label: "Panama" },
  { value: "Papua New Guinea", label: "Papua New Guinea" },
  { value: "Paraguay", label: "Paraguay" },
  { value: "Peru", label: "Peru" },
  { value: "Philippines", label: "Philippines" },
  { value: "Pitcairn", label: "Pitcairn" },
  { value: "Poland", label: "Poland" },
  { value: "Portugal", label: "Portugal" },
  { value: "Puerto Rico", label: "Puerto Rico" },
  { value: "Qatar", label: "Qatar" },
  { value: "Republic of the Congo", label: "Republic of the Congo" },
  { value: "Reunion", label: "Reunion" },
  { value: "Romania", label: "Romania" },
  { value: "Russia", label: "Russia" },
  { value: "Rwanda", label: "Rwanda" },
  { value: "Saint Barthelemy", label: "Saint Barthelemy" },
  { value: "Saint Helena", label: "Saint Helena" },
  { value: "Saint Kitts and Nevis", label: "Saint Kitts and Nevis" },
  { value: "Saint Lucia", label: "Saint Lucia" },
  { value: "Saint Martin", label: "Saint Martin" },
  { value: "Saint Pierre and Miquelon", label: "Saint Pierre and Miquelon" },
  { value: "Saint Vincent and the Grenadines", label: "Saint Vincent and the Grenadines" },
  { value: "Samoa", label: "Samoa" },
  { value: "San Marino", label: "San Marino" },
  { value: "Sao Tome and Principe", label: "Sao Tome and Principe" },
  { value: "Saudi Arabia", label: "Saudi Arabia" },
  { value: "Senegal", label: "Senegal" },
  { value: "Serbia", label: "Serbia" },
  { value: "Seychelles", label: "Seychelles" },
  { value: "Sierra Leone", label: "Sierra Leone" },
  { value: "Singapore", label: "Singapore" },
  { value: "Sint Maarten", label: "Sint Maarten" },
  { value: "Slovakia", label: "Slovakia" },
  { value: "Slovenia", label: "Slovenia" },
  { value: "Solomon Islands", label: "Solomon Islands" },
  { value: "Somalia", label: "Somalia" },
  { value: "South Africa", label: "South Africa" },
  { value: "South Korea", label: "South Korea" },
  { value: "South Sudan", label: "South Sudan" },
  { value: "Spain", label: "Spain" },
  { value: "Sri Lanka", label: "Sri Lanka" },
  { value: "Sudan", label: "Sudan" },
  { value: "Suriname", label: "Suriname" },
  { value: "Svalbard and Jan Mayen", label: "Svalbard and Jan Mayen" },
  { value: "Swaziland", label: "Swaziland" },
  { value: "Sweden", label: "Sweden" },
  { value: "Switzerland", label: "Switzerland" },
  { value: "Syria", label: "Syria" },
  { value: "Taiwan", label: "Taiwan" },
  { value: "Tajikistan", label: "Tajikistan" },
  { value: "Tanzania", label: "Tanzania" },
  { value: "Thailand", label: "Thailand" },
  { value: "Togo", label: "Togo" },
  { value: "Tokelau", label: "Tokelau" },
  { value: "Tonga", label: "Tonga" },
  { value: "Trinidad and Tobago", label: "Trinidad and Tobago" },
  { value: "Tunisia", label: "Tunisia" },
  { value: "Turkey", label: "Turkey" },
  { value: "Turkmenistan", label: "Turkmenistan" },
  { value: "Turks and Caicos Islands", label: "Turks and Caicos Islands" },
  { value: "Tuvalu", label: "Tuvalu" },
  { value: "U.S. Virgin Islands", label: "U.S. Virgin Islands" },
  { value: "Uganda", label: "Uganda" },
  { value: "Ukraine", label: "Ukraine" },
  { value: "United Arab Emirates", label: "United Arab Emirates" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "United States", label: "United States" },
  { value: "Uruguay", label: "Uruguay" },
  { value: "Uzbekistan", label: "Uzbekistan" },
  { value: "Vanuatu", label: "Vanuatu" },
  { value: "Vatican", label: "Vatican" },
  { value: "Venezuela", label: "Venezuela" },
  { value: "Vietnam", label: "Vietnam" },
  { value: "Wallis and Futuna", label: "Wallis and Futuna" },
  { value: "Western Sahara", label: "Western Sahara" },
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