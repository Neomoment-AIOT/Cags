"use client";

import { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';
import styles from './ContactPage.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import FooterRu from '../FooterRu';

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
    title: 'Адрес главного офиса',
    details: 'Torun Center Garden Office A Blok No:46 Şişli–İstanbul',
  },
  {
    icon: 'fas fa-map',
    title: 'Адрес завода',
    details: 'Dindoğru Mahallesi, Pehlivanköy Yolu, Çimenlidere Mevkii, Bekler Küme Evleri No:1/11 Babaeski-Kırklareli',
  },
  {
    icon: 'fas fa-envelope',
    title: 'Электронная почта',
    details: <a href="mailto:info@cagstobacco.com">info@cagstobacco.com</a>,
  },
  {
    icon: 'fas fa-mobile',
    title: 'Позвоните нам',
    details: <a href="tel:+902129162727">+90 212 916 27 27</a>,
  },
];

// Update interface to match English version for proper submission
interface FormData {
  'Полное имя': string;
  'Город': string;
  'Выберите страну': string;
  'Район': string;
  'Электронная почта': string;
  'Телефон': string;
  'Сообщение': string;
  'Согласие': boolean;
}

const ContactPageRu = () => {
  // Update initial state to match the new interface
  const [formData, setFormData] = useState<FormData>({
    'Полное имя': '',
    'Город': '',
    'Выберите страну': '',
    'Район': '',
    'Электронная почта': '',
    'Телефон': '',
    'Сообщение': '',
    'Согласие': false,
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

  // Implement the actual submission logic from the English version
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: '' });

    const submissionData = new FormData();
    // This uses the updated keys like 'Полное имя'
    Object.entries(formData).forEach(([key, value]) => {
      submissionData.append(key, String(value));
    });

    // Add hidden fields for the email template
    submissionData.append('_subject', 'Запрос со страницы "Свяжитесь с нами"');
    submissionData.append('_template', 'table');
    submissionData.append('_cc', 'info@cagstobacco.com');
    submissionData.append('_replyto', formData['Электронная почта']);

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
          'Полное имя': '',
          'Город': '',
          'Выберите страну': '',
          'Район': '',
          'Электронная почта': '',
          'Телефон': '',
          'Сообщение': '',
          'Согласие': false,
        });
      } else {
        throw new Error(result.message || 'Не удалось отправить сообщение');
      }
    } catch (err: any) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message || 'Произошла ошибка при отправке вашего сообщения. Пожалуйста, попробуйте еще раз позже.',
      });
    }
  };

  return (
    <>
      <div className={styles.pageTitleContainer}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link href="/home/HomeRu">Главная</Link>
            <span className={styles.divider}>/</span>
            <span>Контакты</span>
          </div>
        </div>
      </div>

      <section className={`${styles.pageSection} ${styles.clearfix}`}>
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <h2 className="text-left">
              <span className={styles.fontLight}>Свяжитесь с нами</span>
            </h2>
            <p className={styles.introText}>
              <strong className={styles.textleft}>Присоединяйтесь к нашей дистрибьюторской сети и развивайте свой бизнес</strong>
              <br />
              Если вы хотите присоединиться к нам в этом путешествии, где мы всегда поддерживаем наших дистрибьюторов нашими производственными, операционными и маркетинговыми коммуникационными действиями, а также послепродажной поддержкой, и получить больше информации, просто заполните форму дистрибьюторства и свяжитесь с нашей командой! 
            </p>

            <div className={styles.formWrapper}>
              <form id="contact-form" onSubmit={handleSubmit}>
                <input type="checkbox" name="_honeypot" style={{display: 'none'}} tabIndex={-1} autoComplete="off" />
                
                <div className={styles.row}>
                  <div className={styles.column}>
                    <input type="text" name="Полное имя" className={styles.formControl} placeholder="Полное имя *" required value={formData['Полное имя']} onChange={handleChange} />
                    <input type="text" name="Город" className={styles.formControl} placeholder="Город *" required value={formData['Город']} onChange={handleChange} />
                  </div>
                  <div className={styles.column}>
                    <select name="Выберите страну" className={styles.formControl} required value={formData['Выберите страну']} onChange={handleChange}>
                      <option value="">Выберите страну *</option>
                      {countries.map((country) => (
                        <option key={country.value} value={country.value}>{country.label}</option>
                      ))}
                    </select>
                    <input type="text" name="Район" className={styles.formControl} placeholder="Район *" required value={formData['Район']} onChange={handleChange} />
                  </div>
                  <div className={styles.column}>
                    <input type="email" name="Электронная почта" className={styles.formControl} placeholder="Электронная почта *" required value={formData['Электронная почта']} onChange={handleChange} />
                    <input type="text" name="Телефон" className={styles.formControl} placeholder="Номер телефона *" required value={formData['Телефон']} onChange={handleChange} />
                  </div>
                  <div className={styles.column}>
                    <textarea name="Сообщение" rows={3} className={styles.formControl} placeholder="СООБЩЕНИЕ *" required value={formData['Сообщение']} onChange={handleChange}></textarea>
                  </div>
                </div>

                <div className={styles.consentRow}>
                  <div className={styles.checkboxWrapper}>
                    <input type="checkbox" name="Согласие" id="consent" required checked={formData['Согласие']} onChange={handleChange} />
                  </div>
                  <div className={styles.consentText}>
                    <label htmlFor="consent" className={styles.label}>
                      Подписываясь на нашу рассылку и указывая свой адрес электронной почты, вы соглашаетесь на обработку и передачу ваших персональных данных, включая, но не ограничиваясь, получение обновлений, предложений, рекламных акций и аналогичных сообщений по электронной почте от CAGS TOBACCO TOBACCO AND TOBACCO PRODUCTS INC., ее аффилированных компаний, сотрудников и сторонних поставщиков услуг, осуществляющих рассылку сообщений. Данное уведомление предоставляется в соответствии с Общим регламентом по защите данных ("GDPR") и призвано обеспечить законную обработку и защиту ваших персональных данных. Чтобы узнать больше о ваших правах в отношении сбора и обработки ваших персональных данных, ознакомьтесь с нашей политикой конфиденциальности или свяжитесь с нами. 
                    </label>
                  </div>
                </div>

                <div className={styles.submitRow}>
                  <button type="submit" className={styles.submitButton} disabled={status.submitting}>
                    {status.submitting ? 'ОТПРАВКА...' : 'ОТПРАВИТЬ'}
                  </button>
                </div>
                
                {status.success && (
                  <div className={styles.alertSuccess}>
                    Успех! Ваше сообщение было отправлено нам.
                  </div>
                )}
                {status.error && (
                  <div className={styles.alertError}>
                    Ошибка! {status.error}
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
        <FooterRu />
    </>
  );
};

export default ContactPageRu;