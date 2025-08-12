import styles from './WeAreCagsSection.module.css';

const textContent = [
    {
        title: "CAGS   نحن شركة",
        description: "هي شركة تبغ عائلية متميزة لديها تراث غني والتزام قوي بالتميز CAGS"
    },
    {
        title: "نحن ملتزمون",
        description: " كانت رحلتنا مدفوعة بتركيزنا الثابت على رضاء العملاء وتقديم جودة دائمة. نحن نفخر كثيرًا بنجاحنا البارز"
    },
    {
        title: "نحن مؤهلون",
        description: "موقعنا في تركيا، حيث تُمكِّننا مرافق الإنتاج المتطورة من الحفاظ على أعلى مستويات الجودة في كافة جوانب عملياتنا"
    },
    {
        title: "نحن ملتزمون بتراثنا",
        description: "منذ تأسيسنا في عام 1982 وحتى توسيع مجموعة منتجاتنا والمبيعات الدولية، لقد تطورنا باستمرار ونستمر في التطور لنلبي المتطلبات المتغيرة للسوق"
    },
    {
        title: "نحن متحمسون للابتكار",
        description: "، ندرك قوة التطوير والابتكار. نحن نفخر بدفع حدود الممكن، ونسعى دائمًا لأن نكون في الصدارة في صناعتنا  CAGS في"
    },
    {
        title: "نحن فريق واحد",
        description: "كشركة عائلية، نقدر فريق العمل كأهم مورد لدينا. نعمل معًا نحو رؤية مشتركة للنجاح، نسعى باستمرار لتجاوز التوقعات والمساهمة في نمو وتطوير قطاع التبغ"
    },
    {
        title: "نحن المستقبل",
        description: "مع التزام ثابت بالحفاظ على أعلى المعايير، وتطبيق تقنيات الإنتاج المتطورة، وإعطاء الأولوية للابتكار، نواصل تشكيل مستقبل صناعة التبغ"
    }
];

const WeAreCagsSectionAr = () => {
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

export default WeAreCagsSectionAr;