import Nav from '../components/nav';
import Footer from '../components/footer';
import {
  SideImage,
  Product,
  ProductDetails,
} from '../features/description/components';

const Description = () => {
  return (
    <div>
      <Nav />
      <div className='px-32 flex items-start gap-x-12 my-16 mb-24'>
        <SideImage />
        <Product />
        <ProductDetails />
      </div>
      <Footer />
    </div>
  );
};

export default Description;
