import styles from './terms.module.css';

export default function TermsPage() {
  return (
    
    <div className={styles.container}>
      {/* Breadcrumbs Section */}
      <div className={styles.pageTitleContainer}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <span>HOME</span>
            <span className={styles.divider}>/</span>
            <span className={styles.current}>PRIVACY NOTICE</span>
          </div>
        </div>
      </div>


      <div className={styles.content}>
        <p>
          Data Controller: CAGS TOBACCO TOBACCO AND TOBACCO PRODUCTS INDUSTRY AND TRADE JOINT STOCK COMPANY.
          <br />
          Fulya Mah. Büyükdere Cad. Torun Center A Blok No: 74a İç Kapı No: 19 Şişli/İstanbul
        </p>

        <p>
          As CAGS TOBACCO TOBACCO AND TOBACCO PRODUCTS ("CAGS" or "Company"), in accordance with the Law on Protection of Personal Data No. 6698 ("KVKK") and related legislation, we have prepared this privacy notice to inform individuals, including visitors, customers, potential service recipients, job applicants, employees, business partners, platform users, and other individuals, about the personal data we process within the scope of our activities for the purposes of the Company.
        </p>

        <h2 className={styles.heading}>What Data Do We Collect and What Is the Purpose of Data Collection?</h2>
        <p>
          We collect the following data within the scope of our company activities:
          <br />Identity Information
          <br />Contact Information
          <br />Identity Verification, Security, and Tracking Information
          <br />Financial Information
          <br />Employment Information
          <br />Education Information
          <br />Other Data
        </p>

        <h3 className={styles.subHeading}>Data Category: Identity Information</h3>
        <p>
          Description: Data related to the identification of individuals.
          <br />Source: We collect identity information from our job applicants, employees, customers, potential service recipients, platform users, business partners, and visitors.
          <br />Content: Name, surname, gender, Turkish identification number, social security registration number, nationality, marital status, date of birth, place of birth, passport number, driver's license number, vehicle registration information, identity card/identification copy, driver's license copy, passport copy, etc.
          <br />Purpose of Data Collection: We collect the identity information of our job applicants for the purpose of conducting human resources activities related to the applied position.
          <br />We collect the identity information of our employees in accordance with our obligations arising from employment, social security, tax regulations, etc.
        </p>
        <p>
          We collect the identity information of our customers to fulfill our legal obligations, provide support services, fulfill commercial requirements and legal obligations, and for advertising and marketing purposes, audit processes, and security purposes.
          <br />We collect the identity information of our platform users to fulfill our legal obligations.
          <br />We collect the identity information of our visitors for the purpose of ensuring security during building entry and exit and for future service relationships.
          <br />We collect the identity information of our business partners to fulfill our legal obligations, provide support services, issue invoices, carry out audit processes, monitor joint projects, and fulfill our obligations under contracts.
          <br />Legal Basis for Data Collection: The primary reason for collecting this data is compliance with relevant legislation.
          <br />Furthermore, we collect identity information based on the contractual relationship between us and the relevant individuals.
          <br />Sometimes, we collect identity information based on our legitimate interests and the principles adopted by our Company.
          <br />Data Collection Method: We collect data through printed forms and sometimes directly through company-shared electronic areas and electronic devices.
        </p>

        <h3 className={styles.subHeading}>Data Category: Education Information</h3>
        <p>
          Description: Information necessary for the smooth provision of services within the scope of contractual relationship.
          <br />Source: We collect education data from our employees and job applicants.
          <br />Content: Position/title information, diplomas and certificates, work history and details, resume, educational background, social security employment entry declaration, social security employment exit declaration, blood type, criminal record, other health reports, photographs, insurance data, military service status, etc.
          <br />Purpose of Data Collection: We collect the education information of our employees and job applicants to fulfill our legal obligations, provide support services, fulfill commercial requirements and legal obligations, and for advertising and marketing purposes, audit processes, and security purposes.
          <br />Legal Basis for Data Collection: The primary reason for collecting this data is compliance with relevant legislation.
          <br />Furthermore, we collect education information based on the contractual relationship between us and the relevant individuals.
          <br />Data Collection Method: We collect data through printed forms and sometimes directly through company-shared electronic areas and electronic devices.
        </p>

        {/* ...This pattern continues for all other data categories (Contact, Financial, etc.)... */}

        <h2 className={styles.heading}>Do We Transfer Your Personal Data to Third Parties?</h2>
        <p>
          Due to legal regulations in our country, identity information, contact information, and many other personal data mentioned above are shared with authorized entities explicitly stated in the legislation periodically or upon the requests of authorized authorities.
          <br />Additionally, they are shared with authorized individuals or institutions in case of a court order or upon the request of an administratively authorized institution explicitly stated in the law.
          <br />Apart from that, your personal data is limitedly shared with Business Partners and Suppliers (Financial Advisors, Logistics Companies, International Transfer Companies), official institutions (service providers, etc.) in order to perform the service and fulfill contractual obligations.
        </p>

        <h2 className={styles.heading}>Do We Transfer Your Personal Data Abroad?</h2>
        <p>
          Your personal data can be transferred abroad only if one of the following conditions is met: With your explicit consent,
          <br />If one of the conditions stipulated in the Law on the Protection of Personal Data (KVKK) is met and sufficient protection exists in the country where the data will be transferred,
          <br />If one of the conditions stipulated in the KVKK is met, and although sufficient protection does not exist in the country where the data will be transferred, sufficient protection is committed by the relevant country and approval is obtained from the Personal Data Protection Board.
          <br />For example, if the service is provided through a foreign company, the information needs to be transferred abroad for the performance of the contract. Therefore, if consent is not given to such transfer, it will be impossible to perform the service mentioned in the contract.
        </p>

        <h2 className={styles.heading}>How Long Are Your Personal Data Retained?</h2>
        <p>
          The retention periods of your personal data are as follows:
          <br />If there is a period specified by law or relevant legislation for the retention of data, the data must be retained for at least this period. Considering the possibilities such as a delayed request for a court order, a request from an authorized administrative authority or the occurrence of a dispute in which we may be involved, the retention periods of your data are determined by adding 6 months to 1 year to the periods prescribed by the legislation, and the data is deleted at the end of the determined period.
          <br />If there is no period specified in the legislation for the retention of the data processed, your data will be retained for the duration determined in accordance with the nature of our relationship and the period specified in the contract made with you. After the end of this relationship or the expiration of the period specified in the contract, your data will be deleted, destroyed, or anonymized without the need for any request from you.
          <br />If you request the deletion of your data before the retention period specified in the legislation, your request cannot be fulfilled.
          <br />If you request the deletion of your data that is not subject to a retention period and no longer serves a processing purpose, your data will be deleted within a maximum of 6 months.
        </p>

        <h2 className={styles.heading}>What Are Your Rights Regarding Your Personal Data?</h2>
        <p>
          Regarding your personal data, you have the following rights:
          <br />To learn whether your personal data is processed or not,
          <br />If your personal data is processed, to request information regarding this,
          <br />To learn the purpose of processing your personal data and whether it is used in accordance with its purpose,
          <br />To know the third parties to whom your personal data is transferred domestically or abroad,
          <br />If your personal data is incomplete or inaccurate, to request its correction,
          <br />To request the deletion or destruction of your personal data within the framework of the conditions stipulated in the KVKK, and if the data is corrected or deleted, to request that these operations be notified to the third parties to whom your personal data is transferred,
          <br />In case an unfavorable result arises for you as a result of the analysis of processed data solely through automated systems, to object to this result,
          <br />In case your personal data is processed unlawfully and causes you to suffer damages, to request compensation for such damages.
        </p>

        <h2 className={styles.heading}>How Can You Exercise Your Rights?</h2>
        <p>
          The Data Subject can submit their personal data-related requests: By sending a signed and written petition or CAGS PDPA Application Form, along with a photocopy of their ID, to the email address info@cagstobacco.com,
          <br />By personally applying to the Company with a valid ID document, and sending a signed written petition or CAGS PDPA Application Form to the address Fulya Mahallesi, Büyükdere Caddesi, Torun Center A Blok No: 74A İç Kapı No: 19 Şişli / İSTANBUL, along with a photocopy of their ID,
          <br />By sending an email to info@cagstobacco.com from the previously notified and registered email address in the Company's system.
        </p>
        <p>
          According to the Communiqué on the Procedures and Principles of Application to the Data Controller, it is obligatory for the Data Subject's request to include their name, surname, signature if the request is written, T.R. identity number (passport number if the person making the application is a foreigner), the address of the residence or workplace for notification purposes, the registered electronic mail address if any, telephone and fax numbers, and information regarding the subject of the request.
        </p>
        
        <p>
          The request should explicitly and clearly indicate the requested matter. Information and documents related to the request should be attached to the application.
          <br />If the request is made on behalf of someone else, the applicant must be specifically authorized in this regard and this authorization must be documented (special power of attorney). In addition, the application must include the applicant's identification and address information and be accompanied by identity verification documents.
          <br />Requests made by unauthorized third parties will not be taken into consideration.
        </p>

        <h2 className={styles.heading}>How Long Does It Take to Respond to Your Requests Regarding the Processing of Your Personal Data?</h2>
        <p>
          Your requests regarding your personal data will be evaluated, and a response will be provided within a maximum of 30 days from the date of receipt. If your request is rejected, the reasoned rejection will be sent to the address specified in your application through electronic mail or postal services, or by any other means chosen from the options in the Data Subject Application Form.
        </p>
      </div>
    </div>
  );
}