
import ProductGridFr from '../../components/ProductGridFr';
import ProductinfosectionFr from "@/app/components/products/infosectionFr";
import BreadcrumbFr from './BreadcrumbFr';
import FooterFr from '@/app/components/FooterFr';

const ProductsFr = () => {
    return(
    <main>
      <BreadcrumbFr />
      <ProductinfosectionFr/>
      <ProductGridFr />
      <FooterFr />
    </main>
    );
}

export default  ProductsFr;