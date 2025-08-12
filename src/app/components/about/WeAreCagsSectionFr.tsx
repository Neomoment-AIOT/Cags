import styles from './WeAreCagsSection.module.css';

const textContent = [
    {
        title: "Nous sommes CAGS",
        description: "CAGS est une entreprise familiale distinguée dans le domaine du tabac, avec un patrimoine riche et un engagement fort envers l'excellence."
    },
    {
        title: "Nous sommes Engagés",
        description: "Notre parcours est guidé par notre engagement indéfectible envers la satisfaction de nos clients et la fourniture d'une qualité durable. Nous sommes extrêmement fiers de notre succès significatif."
    },
    {
        title: "Nous Sommes Liés par Notre Héritage",
        description: "Depuis notre fondation en 1982 jusqu'à l'expansion de notre gamme de produits et nos ventes internationales, nous avons constamment évolué et continuons à évoluer pour répondre aux demandes changeantes du marché."
    },
    {
        title: "Nous Sommes Passionnés par l'Innovation",
        description: "Chez CAGS, nous reconnaissons le pouvoir du développement et de l'innovation. Nous sommes extrêmement fiers de repousser les limites de ce qui est possible, en nous efforçant toujours d'être à l'avant-garde de notre industrie."
    },
    {
        title: "Nous Sommes une Équipe ",
        description: "En tant qu'entreprise familiale, nous considérons notre personnel comme notre plus grand atout. Ensemble, nous travaillons vers une vision commune de succès, cherchant constamment à dépasser les attentes et à contribuer à la croissance et au développement du secteur du tabac."
    },
    {
        title: "Nous sommes l'avenir",
        description: "Grâce à notre engagement indéfectible à maintenir les normes les plus élevées, à mettre en œuvre des techniques de production de pointe et à prioriser l'innovation, nous continuons de façonner l'avenir de l'industrie du tabac."
    }
];

const WeAreCagsSectionFr = () => {
  return (
    <div className={styles.pageSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
            {textContent.map((item, index) => (
                <div key={index} className={styles.textBox}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WeAreCagsSectionFr;