
import ProductGrid from '../components/ProductGrid';
import Productinfosection from "@/app/components/products/infosection";
import Breadcrumb from './Breadcrumb';
import Footer from '../components/Footer';

const Products = () => {
    return(
    <main>
      <Breadcrumb />
      <Productinfosection/>
      <ProductGrid />
      <Footer />
    </main>
    );
}

export default  Products;