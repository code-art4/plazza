import { Button } from '../../components/ui';
import { HiLocationMarker } from 'react-icons/hi';
import Table from '../../features/orders/table';
import AuthenticatedLayout from '../../layout/AuthenticatedLayout';

const OrderData = [
  {
    key: 'Order Date/Time',
    value: '12-10-2022 08:35:09',
  },
  {
    key: 'Order Status',
    value: 'Delivered',
  },
  {
    key: 'Vendor',
    value: 'Gadget Space',
  },
];

const AccountInfo = [
  {
    key: 'Customer Name',
    value: 'Cameron Easton',
  },
  {
    key: 'Email',
    value: 'Cameron@gmail.com',
  },
  {
    key: 'Account Type',
    value: 'Buyer',
  },
];

const BillingInfo = [
  {
    key: 'Delivery Method',
    value: 'Door Delivery',
  },
  {
    key: 'Billing Address',
    value: 'Block A7, Unity Road Lagos, Lagos Nigeria',
  },
  {
    key: 'Contact',
    value: '+2349000000000',
  },
];

const ShippingInfo = [
  {
    key: 'Delivery Method',
    value: 'Door Delivery',
  },
  {
    key: 'Billing Address',
    value: 'Block A7, Unity Road Lagos, Lagos Nigeria',
  },
  {
    key: 'Contact',
    value: '+2349000000000',
  },
];

const PaymentInfo = [
  {
    key: 'Payment Method',
    value: 'Pay with cards',
  },
  {
    key: 'Currency',
    value: 'USD',
  },
];

const Details = () => {
  return (
    <AuthenticatedLayout topBar={true} className='pt-7 bg-[#2C2C2C]/[4%] px-6'>
      <div className='flex items-center justify-between mb-6 px-7 mt-8'>
        <h1 className='text-2xl font-semibold'>Orders</h1>
      </div>

      <div className='mx-16'>
        <h2 className='text-green font-semibold mb-4'>
          ORDER AND ACCOUNT INFORMATION
        </h2>
        <div className='flex items-start justify-between'>
          <div className='flex-1'>
            <Table title='Order Information' data={OrderData} />
            <Button className='text-white flex items-center justify-center gap-x-3 w-[70%] py-3 mt-4'>
              <HiLocationMarker /> Track My Item
            </Button>
          </div>

          <div className='flex-1'>
            <Table title='Account Information' data={AccountInfo} />
          </div>
        </div>
      </div>

      <div className='mx-16 mt-11'>
        <h2 className='text-green font-semibold mb-4'>
          DELIVERY AND SHIPPING INFORMATION
        </h2>
        <div className='flex items-start justify-between'>
          <div className='flex-1'>
            <Table title='Billing Information' data={BillingInfo} />
            <p className='text-grey mt-2'>
              Delivery between 15 October and 16 October
            </p>
          </div>

          <div className='flex-1'>
            <Table title='Shipping Information' data={ShippingInfo} />
            <p className='text-grey mt-2'>
              Shipping between 13 October and 15 October
            </p>
          </div>
        </div>
      </div>

      <div className='mx-16 mt-11'>
        <h2 className='text-green font-semibold mb-4'>PAYMENT INFORMATION</h2>
        <Table title='Payment' data={PaymentInfo} />
      </div>
    </AuthenticatedLayout>
  );
};

export default Details;
