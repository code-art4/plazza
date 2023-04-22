const Status = ({ status }: { status: string }) => {
  switch (status) {
    case 'Delivered':
      return <p className='text-green font-medium'>Delivered</p>;
    case 'Cancelled':
      return <p className='text-red font-medium'>Cancelled</p>;
    case 'Pending':
      return <p className='text-[#B9F1C2] font-medium'>Pending</p>;
    default:
      return <p className='text-green font-medium'>Delivered</p>;
      break;
  }
};

export default Status;
