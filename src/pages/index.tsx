import Footer from '../components/footer';
import Nav from '../components/nav';
import { Status, Card } from '../features/landingPage/components';
import LandingPageImg from '../assets/image/landing-page-main-image.png';
import Ad1 from '../assets/image/ad-1.png';
import Ad2 from '../assets/image/ad-2.png';
import Deal1 from '../assets/image/deal-1.png';
import Deal2 from '../assets/image/deal-2.png';
import Deal3 from '../assets/image/deal-3.png';

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <div className='px-32 grid gap-x-12 my-9 mb-24'>
        <Status />
        <ul className='mt-4 flex items-center justify-between text-[#888888] font-medium'>
          <li className='text-green'> All Categories</li>
          <li> Public market</li>
          <li> Health & Beauty</li>
          <li> Plazzar Fashion</li>
          <li> Groceries</li>
          <li> Phone & Tablets</li>
          <li> Home & Office</li>
          <li> Home & Kitchen </li>
        </ul>

        <div className='object-cover mt-8'>
          <img src={LandingPageImg} className='object-cover w-full h-auto' />
        </div>

        <div className='flex gap-x-12 justify-between mt-12 px-12'>
          <div className='flex flex-col gap-y-[5rem] w-1/2'>
            {Array(6)
              .fill('1')
              .map((_, i) => (
                <Card />
              ))}
          </div>
          <div className='w-1/2'>
            <div>
              <img src={Ad1} className='w-full object-cover h-auto' />
            </div>

            <div className='mt-5'>
              <p className='font-medium text-green text-lg'>Todays Deal</p>
              <div className='flex items-center justify-between mt-4 gap-x-6 overflow-hidden'>
                <img src={Deal1} className='w-full object-cover h-auto' />
                <img src={Deal2} className='w-full object-cover h-auto' />
                <img src={Deal3} className='w-full object-cover h-auto' />
              </div>
            </div>

            <div className='mt-12'>
              <img src={Ad2} className='w-full object-cover h-auto' />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
