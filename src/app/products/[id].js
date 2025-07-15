import React from 'react';
import { allProducts } from './data/products'; // Adjust the import path as needed
import Link from 'next/link';

// --- Data Fetching Functions for Next.js ---

// This function runs at build time. It tells Next.js which dynamic pages to create.
export async function getStaticPaths() {
  // We will create a page for every single product in our allProducts array
  const paths = allProducts.map((product) => ({
    params: { id: product.id }, // The 'id' here must match the filename [id].js
  }));

  return {
    paths,
    fallback: false, // If a user tries to access a product id that doesn't exist, show a 404 page.
  };
}

// For each page created above, this function runs to get the specific data for that page.
export async function getStaticProps({ params }) {
  // Find the product from our big array that matches the id from the URL params
  const product = allProducts.find((p) => p.id === params.id);

  // Return the found product data as props to our page component
  return {
    props: {
      product,
    },
  };
}


// --- The React Component for the Page ---

const SingleProductPage = ({ product }) => {
  // A safety check in case the product isn't found
  if (!product) {
    return (
        <div style={styles.pageContainer}>
            <div style={styles.mainContent}>
                <h1>Product Not Found</h1>
                <Link href="/products" style={styles.breadcrumbLink}>
                    &larr; Back to all products
                </Link>
            </div>
        </div>
    );
  }

  return (
    <div style={styles.pageContainer}>
      <main style={styles.mainContent}>
        {/* Breadcrumbs */}
        <div style={styles.breadcrumbs}>
          <Link href="/" style={styles.breadcrumbLink}>HOME</Link>
          <span> / </span>
          <Link href={`/products/${product.category}`} style={styles.breadcrumbLink}>
            {product.category.toUpperCase()}
          </Link>
          <span> / </span>
          <span style={styles.breadcrumbActive}>{product.name.toUpperCase()}</span>
        </div>

        <hr style={styles.hr} />

        {/* Product Details Section */}
        <section style={styles.productSection}>
          <div style={styles.imageWrapper}>
            <img src={product.imageUrl} alt={product.name} style={styles.productImage} />
          </div>
          <div style={styles.detailsWrapper}>
            <div style={styles.titleHeader}>
              <h1 style={styles.productName}>{product.name}</h1>
              {product.naturalGum && <span style={styles.naturalGum}>{product.naturalGum}</span>}
            </div>
            <p style={styles.brand}>
              Brand: <span style={{fontWeight: 'bold'}}>{product.brand}</span>
            </p>
            <p style={styles.description}>{product.description}</p>
          </div>
        </section>

        {/* Specifications Section */}
        {product.specifications && product.specifications.length > 0 && (
            <section style={styles.specSection}>
                <div style={styles.specGrid}>
                    {product.specifications.map((spec, index) => (
                        <div key={index} style={styles.specItem}>
                            <p style={styles.specLabel}>{spec.label}</p>
                            <p style={styles.specValue}>{spec.value}</p>
                        </div>
                    ))}
                </div>
            </section>
        )}


        <hr style={styles.hr} />

        {/* Certifications Section */}
        {product.certifications && product.certifications.length > 0 && (
            <section style={styles.certSection}>
              {product.certifications.map((cert, index) => (
                <img key={index} src={cert.imageUrl} alt={cert.name} style={styles.certImage} />
              ))}
            </section>
        )}
      </main>
    </div>
  );
};


// --- Inline Styles for the Component ---
const styles = {
  pageContainer: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: '#fff',
    color: '#333',
  },
  mainContent: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '2rem 1.5rem',
  },
  breadcrumbs: {
    fontSize: '0.75rem',
    color: '#888',
    marginBottom: '1rem',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },
  breadcrumbLink: {
    color: '#888',
    textDecoration: 'none',
  },
  breadcrumbActive: {
    color: '#333',
  },
  hr: {
    border: 0,
    borderTop: '1px solid #e9e9e9',
    margin: '2rem 0',
  },
  productSection: {
    display: 'flex',
    flexDirection: 'row',
    gap: '3rem',
    flexWrap: 'wrap', // This makes it responsive
  },
  imageWrapper: {
    flex: '1 1 300px', // Flex properties for responsiveness
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #e9e9e9',
    padding: '2rem',
    minHeight: '250px',
  },
  productImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
  detailsWrapper: {
    flex: '2 1 500px', // Flex properties for responsiveness
  },
  titleHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottom: '1px solid #e9e9e9',
    paddingBottom: '1rem',
    marginBottom: '1rem',
    flexWrap: 'wrap', // Responsive title
    gap: '1rem',
  },
  productName: {
    fontSize: '1.75rem',
    fontWeight: 'normal',
    margin: 0,
    lineHeight: 1.2,
  },
  naturalGum: {
    fontSize: '0.9rem',
    color: '#666',
    whiteSpace: 'nowrap',
    paddingLeft: '1rem',
  },
  brand: {
    fontSize: '1rem',
    margin: '0 0 1.5rem 0',
  },
  description: {
    fontSize: '0.9rem',
    lineHeight: 1.6,
    color: '#555',
  },
  specSection: {
    textAlign: 'center',
    marginTop: '3rem',
  },
  specGrid: {
    display: 'grid',
    // Responsive grid: 2 columns on small screens, up to 5 on large screens
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1.5rem 1rem',
    justifyContent: 'center',
  },
  specItem: {
    textAlign: 'center',
  },
  specLabel: {
    fontSize: '0.7rem',
    color: '#888',
    margin: '0 0 0.25rem 0',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  specValue: {
    fontSize: '0.9rem',
    margin: 0,
    fontWeight: 500,
  },
  certSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '3rem',
    padding: '1rem 0',
    flexWrap: 'wrap', // Responsive certifications
  },
  certImage: {
    height: '60px',
  },
};

export default SingleProductPage;