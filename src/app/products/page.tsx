
import ProductGrid from '../components/ProductGrid';
import Productinfosection from "@/app/components/products/infosection";
import Breadcrumb from './Breadcrumb';

const Products = () => {
    return(
    <main>
      <Breadcrumb />
      <Productinfosection/>
      <ProductGrid />
    </main>
    );
}

export default  Products;