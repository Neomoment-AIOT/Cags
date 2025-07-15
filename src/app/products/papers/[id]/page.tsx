// import { allProducts, Product } from '../../data/products'; 
import { allProducts, Product } from "@/app/products/data/products";
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
// import styles from '../../products.module.css';
import { FaChevronRight } from 'react-icons/fa';
import styles from './product.module.css';

// Define the type for a single Product 
// This should match the structure of an object in your new allProducts array
type Product = {
  id: number;
  category: string;
  brand: string;
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
    (product) => product.category === 'papers' && product.id.toString() === id
  );
}

export default function PaperDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById({ id: params.id });

  if (!product) {
    notFound();
  }

  return (
    <section className={`${styles.pageSection} bg-gray-50 py-10`}>
        <div className={styles.container}>
            <div className="flex items-center text-sm text-gray-500
            text-[11px] tracking-[2px] uppercase
             breadcrumbs ml-22 mr-22
            mb-8">
                <Link href="/" className="hover:text-gray-800
                text-[#7e8082]
                ">Home</Link>
                <span className=" text-[#7e8082] m-2 
                ">/</span>
                <Link href="/products/papers" className="hover:text-gray-800
                 text-[#7e8082]
                ">Products
                </Link>
                <span className=" text-[#7e8082] m-2 
                ">/</span>
                <span className="font-medium
                bread-current color-black
                text-gray-800">{product.name}</span>
            </div>
            <div className="md:flex md:gap-x-8
             gap-12 items-start
             ml-22 mr-22 pt-20
            ">
                <div className="
                max-w-[390px] w-full
                bg-[#f3f3f4] border border-[#cbcccd] rounded-none p-1
             shadow-none outline-none
                rounded-lg shadow-sm p-6 flex justify-center items-center">
                    <Image src={product.imageUrl} alt={product.name} width={500} height={500} className="object-contain" />
                </div>
                <div className={styles.rightcontainer}
               >
                    <div className="border-b 
                     tracking-normal
                         text-[#1c242d] font-lato
                    pb-2">
                        <h3 className={styles.productName}
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
                            Individual Paper Tip
                        </p>
                            </div>
                    </div>
                    <div>
                        {/* <h2 className="text-lg font-semibold text-gray-800 mb-2">Description</h2> */}
                        <p className={styles.description}
                       >{product.description}</p>
                    </div>
                    {/* {product.naturalGum && (
                        // <div>
                        //     <h2 className="text-lg font-semibold text-gray-800 mb-2">Natural Gum</h2>
                        //     <p className="text-gray-600">{product.naturalGum}</p>
                        // </div>
                    )} */}
                    {product.specifications && product.specifications.length > 0 && (
                        <div>
                            {/* <h2 className="text-lg font-semibold text-gray-800 mb-3">Specifications</h2> */}
                            {/* Use a <dl> for the list */}
                            <dl className={styles.specification}
                            >
                                {product.specifications.map((spec) => (
                                    <div key={spec.label} className={styles.card}
                                    >
                                         <Image src={spec.imageUrl}
                                             alt=''
                                            //  {cert.name}
                                              width={150   } 
                                              height={150  }
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
                                    <div key={cert.name} className="text-center">
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
    </section>
  );
}