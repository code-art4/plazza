import PaymentLayout from '../features/payment/nav';
import Table from '../features/payment/table';
import CreditCard from '../features/payment/creditCard';

const columns = [
  {
    name: 'Products',
    selector: (row: any) => row.product,
  },
  {
    name: 'Quantity',
    selector: (row: any) => row.quantity,
  },
  {
    name: 'Price',
    selector: (row: any) => row.price,
  },
];

const data = [
  {
    product: 'Macook Pro',
    quantity: 1,
    price: '$87,500',
  },
  {
    product: 'Luxury Chair',
    quantity: 1,
    price: '$10,200',
  },
  {
    product: 'Sneakers',
    quantity: 1,
    price: '$34,000',
  },
];

const Payment = () => {
  return (
    <PaymentLayout>
      <div className='h-max w-[70%] mx-auto border border-green py-10 px-16 rounded-xl flex-1'>
        <h1 className='text-xl font-semibold'>Order Summary</h1>
        <Table
          columns={columns}
          pageSize={10}
          columnColor='text-grey'
          data={data}
          pagination={false}
        />
        <p className='text-grey mt-10 text-center font-medium'>
          Total amount payable
        </p>
        <p className='text-green text-2xl mt-2 text-center font-semibold mb-32'>
          $131,700
        </p>
      </div>
      <div className='flex-1 h-max'>
        <CreditCard />
      </div>
    </PaymentLayout>
  );
};

export default Payment;
