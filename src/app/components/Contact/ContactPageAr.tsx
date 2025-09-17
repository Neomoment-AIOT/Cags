"use client";

import { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';
import styles from './ContactPage.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import FooterAr from '../FooterAr';

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
    title: 'عنوان المقر الرئيسي',
    details: 'Torun Center Garden Office A Blok No:46 Şişli–İstanbul',
  },
  {
    icon: 'fas fa-map',
    title: 'عنوان المصنع',
    details: 'Dindoğru Mahallesi, Pehlivanköy Yolu, Çimenlidere Mevkii, Bekler Küme Evleri No:1/11 Babaeski-Kırklareli',
  },
  {
    icon: 'fas fa-envelope',
    title: 'البريد الإلكتروني',
    details: <a href="mailto:info@cagstobacco.com">info@cagstobacco.com</a>,
  },
  {
    icon: 'fas fa-mobile',
    title: 'رقم الهاتف',
    details: <a href="tel:+902129162727">+90 212 916 27 27</a>,
  },
];

// MODIFICATION 1: Update interface to match the working structure
interface FormData {
  'الاسم الكامل': string;
  'المدينة': string;
  'الدولة': string;
  'الحي': string;
  'البريد الإلكتروني': string;
  'الهاتف': string;
  'الرسالة': string;
  'الموافقة': boolean;
}

const ContactPageAr = () => {
  // MODIFICATION 2: Update initial state to match the new interface
  const [formData, setFormData] = useState<FormData>({
    'الاسم الكامل': '',
    'المدينة': '',
    'الدولة': '',
    'الحي': '',
    'البريد الإلكتروني': '',
    'الهاتف': '',
    'الرسالة': '',
    'الموافقة': false,
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

    submissionData.append('_subject', 'إرسال جديد من نموذج الاتصال (العربية)');
    submissionData.append('_template', 'table');
    submissionData.append('_cc', 'info@cagstobacco.com');
    submissionData.append('_replyto', formData['البريد الإلكتروني']);

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
        setFormData({
          'الاسم الكامل': '',
          'المدينة': '',
          'الدولة': '',
          'الحي': '',
          'البريد الإلكتروني': '',
          'الهاتف': '',
          'الرسالة': '',
          'الموافقة': false,
        });
      } else {
        throw new Error(result.message || 'فشل إرسال الرسالة');
      }
    } catch (err: any) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message || 'حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى في وقت لاحق.',
      });
    }
  };

  return (
    <>
      <div className={styles.pageTitleContainer}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link href="/home/HomeAr">الصفحة الرئيسية</Link>
            <span className={styles.divider}>/</span>
            <span>اتصل بنا</span>
          </div>
        </div>
      </div>

      <section className={`${styles.pageSection} ${styles.clearfix}`}>
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <h2 className="text-right mr-62">
              <span className={styles.fontLight}>اتصل بنا</span>
            </h2>
            <p className={styles.introText}>
              <strong className={styles.textleft}>انضم إلى شبكة التوزيع الخاصة بنا ونمِّي عملك</strong>
              <br />
              إذا كنت ترغب في الانضمام إلينا في هذه الرحلة، حيث ندعم دائمًا موزعينا من خلال إنتاجنا وتشغيلنا وأعمالنا في مجال الاتصالات التسويقية وتطبيقات الدعم بعد البيع، وللحصول على مزيد من المعلومات، ما عليك سوى ملء نموذج التوزيع والتواصل مع فريقنا
            </p>

            <div className={styles.formWrapper}>
              <form id="contact-form" onSubmit={handleSubmit}>
                <input type="checkbox" name="_honeypot" style={{display: 'none'}} tabIndex={-1} autoComplete="off" />
                
                {/* MODIFICATION 4: Update name attributes to match the new state keys */}
                <div className={styles.row}>
                  <div className={styles.column}>
                    <input type="text" name="الاسم الكامل" className={styles.formControl} placeholder="الاسم الكامل *" required value={formData['الاسم الكامل']} onChange={handleChange} />
                    <input type="text" name="المدينة" className={styles.formControl} placeholder="المدينة *" required value={formData['المدينة']} onChange={handleChange} />
                  </div>
                  <div className={styles.column}>
                    <select name="الدولة" className={styles.formControl} required value={formData['الدولة']} onChange={handleChange}>
                      <option value="">الدولة *</option>
                      {countries.map((country) => (
                        <option key={country.value} value={country.value}>{country.label}</option>
                      ))}
                    </select>
                    <input type="text" name="الحي" className={styles.formControl} placeholder="الحي *" required value={formData['الحي']} onChange={handleChange} />
                  </div>
                  <div className={styles.column}>
                    <input type="email" name="البريد الإلكتروني" className={styles.formControl} placeholder="البريد الإلكتروني *" required value={formData['البريد الإلكتروني']} onChange={handleChange} />
                    <input type="text" name="الهاتف" className={styles.formControl} placeholder="رقم الهاتف *" required value={formData['الهاتف']} onChange={handleChange} />
                  </div>
                  <div className={styles.column}>
                    <textarea name="الرسالة" rows={3} className={styles.formControl} placeholder="الرسالة *" required value={formData['الرسالة']} onChange={handleChange}></textarea>
                  </div>
                </div>

                <div className={styles.consentRow}>
                  <div className={styles.checkboxWrapper}>
                    <input type="checkbox" name="الموافقة" id="consent" required checked={formData['الموافقة']} onChange={handleChange} />
                  </div>
                  <div className={styles.consentText}>
                    <label htmlFor="consent" className={styles.label}>
                      بالاشتراك في نشرتنا الإخبارية وتقديم عنوان بريدك الإلكتروني، فإنك توافق على معالجة ومشاركة معلوماتك الشخصية، بما في ذلك ولكن لا يقتصر على استقبال التحديثات، والعروض، والترقيات، والاتصالات البريدية المماثلة من CAGS TOBACCO AND TOBACCO PRODUCTS INC.، وشركاتها التابعة، وموظفيها، ومقدمي الخدمات الطرف الثالث المشاركين في خدمات الرسائل. يتم تقديم هذا الإشعار بما يتوافق مع لائحة حماية البيانات العامة ("GDPR") ويهدف إلى ضمان المعالجة القانونية وحماية بياناتك الشخصية. لمعرفة المزيد عن حقوقك فيما يتعلق بجمع ومعالجة بياناتك الشخصية، يرجى مراجعة سياسة الخصوصية لدينا أو الاتصال بنا.
                    </label>
                  </div>
                </div>

                <div className={styles.submitRow}>
                  <button type="submit" className={styles.submitButton} disabled={status.submitting}>
                    {status.submitting ? '...جارٍ الإرسال' : 'إرسال'}
                  </button>
                </div>

                {status.success && (
                  <div className={styles.alertSuccess}>
                    !نجاح! تم إرسال رسالتك بنجاح
                  </div>
                )}
                {status.error && (
                  <div className={styles.alertError}>
                    !خطأ {status.error}
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
      <FooterAr />
    </>
  );
};

export default ContactPageAr;