
import ProductGridAr from '../../components/ProductGridAr';
import ProductinfosectionAr from "@/app/components/products/infosectionAr";
import BreadcrumbAr from './BreadcrumbAr';
import FooterAr from '@/app/components/FooterAr';

const ProductsAr = () => {
    return(
    <main>
      <BreadcrumbAr />
      <ProductinfosectionAr />
      <ProductGridAr />
      <FooterAr />
    </main>
    );
}

export default  ProductsAr ;