
import ProductGridRu from '../../components/ProductGridRu';
import ProductinfosectionRu from "@/app/components/products/infosectionRu";
import BreadcrumbRu from './BreadcrumbRu';
import FooterRu from '@/app/components/FooterRu';

const ProductsRu = () => {
    return(
    <main>
      <BreadcrumbRu />
      <ProductinfosectionRu/>
      <ProductGridRu />
      <FooterRu />
    </main>
    );
}

export default  ProductsRu;