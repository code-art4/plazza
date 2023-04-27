import { useLocation, useNavigate } from 'react-router-dom';

const navs = [
  {
    name: 'Place Order',
    link: '/help/place-order',
  },
  {
    name: 'Track Order',
    link: '/help/track-order',
  },
  {
    name: 'Order Cancellation',
    link: '/help/order-cancel',
  },
  {
    name: 'Returns & Refunds',
    link: '/help/returns',
  },
  {
    name: 'Payment',
    link: '/help/payment',
  },
];

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className='flex items-center justify-between mx-24 text-grey font-medium'>
      {navs.map((each) => {
        return (
          <span
            className={`${
              each.link === location.pathname
                ? 'text-green border-b-2 border-green'
                : 'text-gray'
            } cursor-pointer pb-2`}
            onClick={() => navigate(each.link)}
          >
            {each.name}
          </span>
        );
      })}
    </div>
  );
};

export default Nav;
