import Image from 'next/image';
import Link from 'next/link';
import styles from './FAQsPage.module.css';
import FooterFr from '../FooterFr';

const FAQsData = [
   {
    question: "Q : Où sont situées vos installations de production ?",
    answer: "R : Nos installations de production de pointe sont situées en Turquie, ce qui nous permet de maintenir les plus hauts niveaux de qualité dans tous les aspects de nos opérations."
  },
  {
    question: "Q : Quelles marques et quels produits propose CAGS ?",
    answer: "R : CAGS propose une large gamme de marques et de produits dans l'industrie du tabac, notamment du tabac à rouler, des carnets plats, des tubes à cigarettes, des papiers à rouler intercalaires, du tabac pour narguilé, et bien plus encore. Veuillez visiter nos pages Marques et Produits pour plus d'informations."
  },
  {
    question: "Q: Vos produits sont-ils fabriqués localement ?",
    answer: " R: Oui, nous sommes fiers de notre assurance de production 100% locale, garantissant que nos produits répondent aux normes de qualité mondiale de premier ordre."
  },
  {
    question: "Q: Comment puis-je devenir distributeur des produits du tabac CAGS ?",
    answer: "R: Nous accueillons les distributeurs pour rejoindre notre réseau et développer leurs activités avec nous. Pour en savoir plus sur notre programme de distribution et entrer en contact avec notre équipe, veuillez visiter notre page Distribution."
  },
  {
    question: "Q: Quelles certifications détient CAGS ?",
    answer: "R: CAGS détient des certifications ISO internationalement reconnues, notamment l'ISO 9001:2015 pour la gestion de la qualité, l'ISO 14001:2015 pour la gestion environnementale, et l'ISO 45001:2018 pour la santé et la sécurité au travail. Ces certifications témoignent de notre engagement envers l'excellence et notre respect des normes de l'industrie."
  },
  {
    question: "Q: Comment puis-je contacter CAGS ?",
    answer: "R: Vous pouvez nous contacter via notre page Contactez-nous. Nous apprécions vos questions et vos commentaires."
  },
  {
    question: "Q: Est-ce que CAGS offre des opportunités de carrière ?",
    answer: "R: Oui, nous croyons en la promotion des talents et en offrant des opportunités de croissance professionnelle. Nous mettons régulièrement à jour notre page Carrières avec les offres d'emploi disponibles. Revenez régulièrement ou abonnez-vous à notre newsletter pour être informé(e) des nouveaux postes disponibles."
  },
  {
    question: "Q: Quelle est l'approche de CAGS en matière d'innovation ? ",
    answer: "R: Chez CAGS, nous sommes engagés dans l'innovation et nous repoussons constamment les limites de ce qui est possible dans l'industrie du tabac. Nos études d'application et de production très appréciées nous positionnent comme l'une des principales entreprises de production du secteur."
  },
  {
    question: "Q: Comment CAGS assure-t-il la satisfaction des clients ? ",
    answer: "R: La satisfaction des clients est une priorité absolue pour nous. Nous disposons d'un réseau de distribution international et nous nous efforçons d'assurer une satisfaction client à 100% grâce à nos produits de haute qualité, nos designs innovants et notre support professionnel."
  },
  {
    question: "Q: Quelle est l'approche de CAGS en matière d'innovation ? ",
    answer: "R: Chez CAGS, nous sommes engagés dans l'innovation et nous repoussons constamment les limites de ce qui est possible dans l'industrie du tabac. Nos études d'application et de production très appréciées nous positionnent comme l'une des principales entreprises de production du secteur."
  }
  // ... Add more brand objects here as needed
];


  const imageColumn = (
    <div className={styles.column}>
      <div className={styles.imageWrapper}>
        {/* <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" /> */}
      </div>
    </div>
  );

  // return (

    <section className={styles.pageSection}>
      <div className={styles.containerFluid}>
        {/* <div className={styles.row}>
          {imagePosition === 'right' ? (
            <> {textColumn} {imageColumn} </>
          ) : (
            <> {imageColumn} {textColumn} </>
          )}
        </div> */}
      </div>
    </section>
  // );



// --- The Main Page Component ---
const FAQsPage = () => {
  return (
    <>
      {/* Breadcrumbs Section */}
      <div className={styles.pageTitleContainer}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link href="/home/HomeFr">Accueil</Link>
            <span className={styles.divider}>/</span>
            <span>FAQS</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.pageSection}>
        <div className={styles.containerFluid}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.textContainer}>
                <div className={styles.title}>
                  <h1 className={styles.h1}>
                    Votre ressource ultime pour<br />
                    <span className={styles.fontLight}>les informations sur le tabac</span>
                  </h1>
                </div>
                <div className={styles.lineSeparator}></div>
                <p className={styles.description}>
                 Trouvez des réponses aux questions fréquemment posées sur CAGS, une marque de tabac de premier plan reconnue pour ses produits exceptionnels et sa satisfaction client. Obtenez des insights sur nos offres, nos installations de production, nos certifications, et bien plus encore.
                  </p>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.imageWrapper}>
                <Image src="/brands/headrpic.png" alt="CAGS Brands" layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Main FAQs section*/}
 <div className={styles.container}>
      <div className={styles.introSection}>
        <h2 className={styles.mainHeading}>Q : Qui est CAGS et que faites-vous ? </h2>
        <p className={styles.introParagraph}>
          R : CAGS est une marque de tabac familiale renommée avec un riche patrimoine et un engagement envers l'excellence. Nous sommes dédiés à la production de tabac de haute qualité et de produits associés au tabac.
        </p>
      </div>

      <div className={styles.faqList}>
        {FAQsData.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <h5 className={styles.question}>{item.question}</h5>
            <p className={styles.answer}>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
      
      {/* Closing Banner Section */}
      <section className={`${styles.pageSection} ${styles.closingSection}`}>
         <div className={styles.container}>
            <div className={styles.closingBanner}>
                <p>
                 Si vous avez d'autres questions ou si vous avez besoin d'informations supplémentaires, n'hésitez pas à contacter notre équipe de support client. Nous sommes là pour vous aider et vous fournir les informations dont vous avez besoin. Contactez-nous.
                  </p>
            </div>
         </div>
      </section>
        <FooterFr />
    </>
  );
};

export default FAQsPage;