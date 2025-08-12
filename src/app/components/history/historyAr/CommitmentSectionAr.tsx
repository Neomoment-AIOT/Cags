import styles from './../CommitmentSection.module.css';
import Image from 'next/image';
import Link from 'next/link';


const CommitmentSectionFr = () => {
  return (
    <section className={styles.pageSection}>
      <div className={styles.container}>
        <div className={styles.contentBox}>
          <p className={styles.text}>
          CAGS على مدار تاريخها
<br/>
ملتزمة بتقديم منتجات تبغ عالية الجودة لزبائنها في جميع أنحاء العالم. الالتزام الدائم بالابتكار وتلبية متطلبات السوق ساعد في تحقيق نمو ونجاح كبيرين.،
<br/>
 علامة تجارية موثوق بها، معروفة بجودتها، اتساقها، وخدمتها للعملاءCAGS
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSectionFr;