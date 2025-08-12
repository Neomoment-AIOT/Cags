import styles from './WeAreCagsSection.module.css';

const textContent = [
    {
        title: "We are CAGS",
        description: "CAGS is a distinguished family-owned tobacco company with a rich heritage and a strong commitment to excellence."
    },
    {
        title: "We are Committed",
        description: "Our journey has been driven by our unwavering focus on customer satisfaction and the delivery of enduring quality. We take immense pride in our significant success."
    },
    {
        title: "We are Capable",
        description: "Located in Turkey, our state-of-the-art production facilities enable us to maintain the highest levels of quality in every aspect of our operations."
    },
    {
        title: "We are Bounded by Our Heritage",
        description: "From our establishment in 1982 to the expansion of our product range and international sales, we have continuously evolved and still evolving to meet the changing demands of the market."
    },
    {
        title: "We are Passionate for Innovation",
        description: "At CAGS, we recognize the power of development and innovation. We take great pride in pushing the boundaries of what is possible, always striving to be at the forefront of our industry."
    },
    {
        title: "We are a Team",
        description: "As a family-owned company, we value our workforce as our greatest asset. Together, we work towards a shared vision of success, constantly striving to exceed expectations and contribute to the growth and development of the tobacco sector."
    },
    {
        title: "We are the Future",
        description: "With a steadfast commitment to maintaining the highest standards, implementing cutting-edge production techniques, and prioritizing innovation, we continue to shape the future of the tobacco industry."
    }
];

const WeAreCagsSection = () => {
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

export default WeAreCagsSection;