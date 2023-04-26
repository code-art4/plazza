import Footer from '../../components/footer';
import Nav from '../../components/nav';
import HelpCenterLanding from '../../assets/help-center-landing.svg';

interface HelpProps {
  children: React.ReactNode;
}

const Help = ({ children }: HelpProps) => {
  return (
    <div>
      <Nav />
      <div>
        <div className='bg-gradient-to-r from-[#1DC939] to-[#D9D9D9]/100 rounded py-2 px-12 mt-10 flex items-center justify-between mx-32'>
          <div>
            <h1 className='text-5xl text-white font-bold'>Help Center</h1>
            <h2 className='font-medium text-white mt-5 text-xl'>
              Plazzar Customer Care
            </h2>
          </div>
          <div className='w-[25%] h-auto'>
            <img
              src={HelpCenterLanding}
              className='w-full h-full object-cover'
            />
          </div>
        </div>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Help;
