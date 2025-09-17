"use client";

import { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';
import styles from './ContactPage.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../Footer'; // Assuming you have a French Footer component, you might want to change this import

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
    title: 'Adresse du siège social',
    details: 'Torun Center Garden Office A Blok No:46 Şişli–İstanbul',
  },
  {
    icon: 'fas fa-map',
    title: "Adresse de l'usine",
    details: 'Dindoğru Mahallesi, Pehlivanköy Yolu, Çimenlidere Mevkii, Bekler Küme Evleri No:1/11 Babaeski-Kırklareli',
  },
  {
    icon: 'fas fa-envelope',
    title: 'Email',
    details: <a href="mailto:info@cagstobacco.com">info@cagstobacco.com</a>,
  },
  {
    icon: 'fas fa-mobile',
    title: 'Appelez-nous',
    details: <a href="tel:+902129162727">+90 212 916 27 27</a>,
  },
];

// MODIFICATION 1: Update interface to match the working structure
interface FormData {
  'Nom complet': string;
  'Ville': string;
  'Pays': string;
  'Quartier': string;
  'Email': string;
  'Téléphone': string;
  'Message': string;
  'Consentement': boolean;
}

const ContactPageFr = () => {
  // MODIFICATION 2: Update initial state to match the new interface
  const [formData, setFormData] = useState<FormData>({
    'Nom complet': '',
    'Ville': '',
    'Pays': '',
    'Quartier': '',
    'Email': '',
    'Téléphone': '',
    'Message': '',
    'Consentement': false,
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

  // MODIFICATION 3: Revise submission logic to be consistent with other versions
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: '' });

    const submissionData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submissionData.append(key, String(value));
    });

    // Add hidden fields for the email template
    submissionData.append('_subject', 'Nouvelle soumission depuis le formulaire de contact (Français)');
    submissionData.append('_template', 'table');
    submissionData.append('_cc', 'info@cagstobacco.com');
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
          'Nom complet': '',
          'Ville': '',
          'Pays': '',
          'Quartier': '',
          'Email': '',
          'Téléphone': '',
          'Message': '',
          'Consentement': false,
        });
      } else {
        throw new Error(result.message || 'Échec de l\'envoi du message');
      }
    } catch (err: any) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message || 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer plus tard.',
      });
    }
  };

  return (
    <>
      <div className={styles.pageTitleContainer}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link href="/home/HomeFr">Accueil</Link>
            <span className={styles.divider}>/</span>
            <span>CONTACT</span>
          </div>
        </div>
      </div>

      <section className={`${styles.pageSection} ${styles.clearfix}`}>
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <h2 className="text-left">
              <span className={styles.fontLight}>Contactez-nous</span>
            </h2>
            <p className={styles.introText}>
              <strong className={styles.textleft}>Rejoignez notre réseau de distribution et développez votre entreprise.</strong>
              <br />
              Si vous souhaitez vous joindre à nous dans cette aventure, où nous soutenons toujours nos distributeurs avec nos actions de production, d'exploitation, de communication marketing et nos applications de support après-vente, et obtenir plus d'informations, il vous suffit de remplir le formulaire de distribution et de prendre contact avec notre équipe ! 
            </p>

            <div className={styles.formWrapper}>
              <form id="contact-form" onSubmit={handleSubmit}>
                <input type="checkbox" name="_honeypot" style={{display: 'none'}} tabIndex={-1} autoComplete="off" />
                
                {/* MODIFICATION 4: Update name attributes to match the new state keys */}
                <div className={styles.row}>
                  <div className={styles.column}>
                    <input type="text" name="Nom complet" className={styles.formControl} placeholder="Nom complet *" required value={formData['Nom complet']} onChange={handleChange} />
                    <input type="text" name="Ville" className={styles.formControl} placeholder="Ville *" required value={formData['Ville']} onChange={handleChange} />
                  </div>
                  <div className={styles.column}>
                    <select name="Pays" className={styles.formControl} required value={formData['Pays']} onChange={handleChange}>
                      <option value="">Pays *</option>
                      {countries.map((country) => (
                        <option key={country.value} value={country.value}>{country.label}</option>
                      ))}
                    </select>
                    <input type="text" name="Quartier" className={styles.formControl} placeholder="Quartier *" required value={formData['Quartier']} onChange={handleChange} />
                  </div>
                  <div className={styles.column}>
                    <input type="email" name="Email" className={styles.formControl} placeholder="E-mail *" required value={formData['Email']} onChange={handleChange} />
                    <input type="text" name="Téléphone" className={styles.formControl} placeholder="Numéro de téléphone *" required value={formData['Téléphone']} onChange={handleChange} />
                  </div>
                  <div className={styles.column}>
                    <textarea name="Message" rows={3} className={styles.formControl} placeholder="MESSAGE *" required value={formData['Message']} onChange={handleChange}></textarea>
                  </div>
                </div>

                <div className={styles.consentRow}>
                  <div className={styles.checkboxWrapper}>
                    <input type="checkbox" name="Consentement" id="consent" required checked={formData['Consentement']} onChange={handleChange} />
                  </div>
                  <div className={styles.consentText}>
                    <label htmlFor="consent" className={styles.label}>
                      En vous abonnant à notre newsletter et en fournissant votre adresse e-mail, vous consentez au traitement et au partage de vos informations personnelles, y compris, mais sans s'y limiter, à la réception de mises à jour, d'offres, de promotions et de communications similaires par e-mail de la part de CAGS TOBACCO TOBACCO AND TOBACCO PRODUCTS INC., de ses sociétés affiliées, de ses employés et de prestataires de services tiers engagés dans les services de messagerie. Cette notification est fournie conformément au Règlement Général sur la Protection des Données ("RGPD") et vise à garantir le traitement légal et la protection de vos données personnelles. Pour en savoir plus sur vos droits concernant la collecte et le traitement de vos données personnelles, veuillez consulter notre politique de confidentialité ou nous contacter.
                    </label>
                  </div>
                </div>

                <div className={styles.submitRow}>
                  <button type="submit" className={styles.submitButton} disabled={status.submitting}>
                    {status.submitting ? 'ENVOI EN COURS...' : 'ENVOYER'}
                  </button>
                </div>

                {status.success && (
                  <div className={styles.alertSuccess}>
                    Succès ! Votre message nous a été envoyé.
                  </div>
                )}
                {status.error && (
                  <div className={styles.alertError}>
                    Erreur ! {status.error}
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.1576534977803!2d28.995794175200384!3d41.06554641589782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab6ff113a5661%3A0x41e9a778a4dd953b!2sTorun%20Center!5e0!3m2!1sen!2s!4v1753183174298!5m2!1sen!2s" 
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11962.974418969688!2d27.030594713195274!3d41.44478469243411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b35d5edd872a91%3A0xa4759e6d45d99b9d!2sCAGS%20TOBACCO!5e0!3m2!1sen!2s!4v1753182854438!5m2!1sen!2s" 
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
                    <i className={info.icon} style={{ fontSize: '35px', color: '#7e8082', verticalAlign: 'middle' }}></i>
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
export default ContactPageFr;