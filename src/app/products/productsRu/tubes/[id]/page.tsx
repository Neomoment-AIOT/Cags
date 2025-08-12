import { allProducts, Product } from './products'; 
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaChevronRight } from 'react-icons/fa';
import styles from "@/app/products/products.module.css";
import FooterRu from '@/app/components/FooterRu';
type Product = {
  id: number;
  category: string;
  brand: string;
  tip: string;
  name: string;
  imageUrl: string;
  description: string;
  naturalGum?: string;
  specifications: {
     imageUrl: string; label: string; value: string }[];
  certifications: { name: string; imageUrl: string }[];
};

// This function now works correctly with the new flat data structure
function getProductById({ id }: { id: string; }): Product | undefined {
  return allProducts.find(
    (product) => product.category === 'tubes' && product.id.toString() === id
  );
}

export default function PaperDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById({ id: params.id });

  if (!product) {
    notFound();
  }

  return (
    <section className={styles.pageSection} >
        <div className={styles.container}>
           {/*Breadcrumb*/} 
                <div className={styles.pageTitleCont}>
                  <div className={`${styles.container} ${styles.relative} ${styles.alignLeft}`}>
                    <div className={styles.breadcrumbs}>
                      <Link href="/home/HomeRu">Главная</Link>
                      <span className={styles.divider}>/</span>
                      {/* This link can be updated if you create a "Company" page */}
                      <Link href="../" className={styles.productsLink}>Продукция</Link>
                      <span className={styles.divider}>/</span>
                      <span className={styles.currentProductName}>{product.name}</span>
                    </div>
                  </div>
                </div>
             <div className={styles.singleproductContainer}>
                <div className={styles.singleproductLeftContainer}>
                    <Image src={product.imageUrl} alt={product.name} width={500} height={500} className="object-contain" />
                </div>
                <div className={styles.rightcontainer} >
                    <div className={styles.singleProductTextContainer}>
                        <h3 className={styles.SingleproductName}
                       >{product.name}</h3>
                    </div>
                    <div className={styles.branding}
                    >
                        <div className={styles.brandName}
                        >
                        <h6 className={styles.brand}> Brand:

                        </h6>
                         <p className={styles.itemprice}
                         >
                            {product.brand}</p>
                            </div>
                            <div  className={styles.tip}
                            >
                        <p className={styles.rightsidedtip}
                        >
                           {product.tip}
                        </p>
                            </div>
                    </div>
                    <div>
                        <p className={styles.description}
                       >{product.description}</p>
                    </div>
                    {product.specifications && product.specifications.length > 0 && (
                        <div>
                            <dl className={styles.specification}
                            >
                                {product.specifications.map((spec) => (
                                    <div key={spec.label} className={styles.card}
                                    >
                                         <Image src={spec.imageUrl}
                                             alt=''
                                              width={250} 
                                              height={250}
                                               />
                                        
                                        <dt className={styles.labelname}
                                        >{spec.label}</dt>
                                        <dd className={styles.value}
                                        >{spec.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    )}
                    {product.certifications && product.certifications.length > 0 && (
                        <div className={styles.certification}
                        >
                            {/* <h2 className="text-lg font-semibold text-gray-800 mb-3">Certifications</h2> */}
                            <div className="flex items-center gap-4">
                                {product.certifications.map((cert) => (
                                    <div key={`${cert.name}-${cert.imageUrl}`} className="text-center">
                                        <div className=" rounded-full shadow-smw-20 h-20 flex items-center justify-center">
                                            <Image src={cert.imageUrl}
                                             alt=''
                                            //  {cert.name}
                                              width={85} height={85} />
                                        </div>
                                        {/* <p className="text-xs text-gray-600 mt-2 font-medium">{cert.name}</p> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
         <main>
      <FooterRu />
    </main>
    </section>
  );
}