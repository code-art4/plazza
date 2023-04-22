import Order1 from '../../assets/image/order-1.png';
import FeaturesTable from '../../features/table';

const columns = [
  {
    name: '#Order ID',
    selector: (row: any) => row.id,
  },
  {
    name: 'Image',
    selector: (row: any) => row.img,
  },
  {
    name: 'Customer Name',
    selector: (row: any) => row.customer,
  },
  {
    name: 'Location',
    selector: (row: any) => row.location,
  },
  {
    name: 'Vendor',
    selector: (row: any) => row.vendor,
  },
  {
    name: 'Total',
    selector: (row: any) => row.total,
  },
  {
    name: 'Item',
    selector: (row: any) => row.item,
  },
  {
    name: 'Status',
    selector: (row: any) => row.status,
  },
  {
    name: 'Info',
    selector: (row: any) => row.info,
  },
];

const data = [
  {
    id: '#719261',
    img: <img src={Order1} />,
    customer: 'Cameron Easton',
    location: 'Lagos, Nigeria',
    vendor: 'Gadget Space',
    item: 'Macbook Pro',
    amount: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    customer: 'Cameron Easton',
    location: 'Lagos, Nigeria',
    vendor: 'Gadget Space',
    item: 'Macbook Pro',
    amount: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    customer: 'Cameron Easton',
    location: 'Lagos, Nigeria',
    vendor: 'Gadget Space',
    item: 'Macbook Pro',
    amount: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    customer: 'Cameron Easton',
    location: 'Lagos, Nigeria',
    vendor: 'Gadget Space',
    item: 'Macbook Pro',
    amount: '$875',
    status: 'Delivered',
  },
  {
    id: '#719261',
    img: <img src={Order1} />,
    customer: 'Cameron Easton',
    location: 'Lagos, Nigeria',
    vendor: 'Gadget Space',
    item: 'Macbook Pro',
    amount: '$875',
    status: 'Delivered',
  },
];

const Order = () => {
  return (
    <FeaturesTable
      columns={columns}
      data={data}
      title={'Orders'}
      subtitle='Recent Orders'
    />
  );
};

export default Order;
