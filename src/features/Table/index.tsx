import Table from '../../components/ui/Table/Table2';
import AuthenticatedLayout from '../../layout/AuthenticatedLayout';
import { Button } from '../../components/ui';
import { RxCaretDown } from 'react-icons/rx';

interface FeaturesTableProps {
  button?: React.ReactNode;
  data: any;
  columns: any;
  title: string;
  subtitle: string;
}

const FeaturesTable = ({
  button,
  data,
  columns,
  title,
  subtitle,
}: FeaturesTableProps) => {
  return (
    <AuthenticatedLayout topBar={true} className='pt-7 bg-[#2C2C2C]/[4%] h-max'>
      <div className='flex items-center justify-between mb-5 px-7 mt-8'>
        <h2 className='text-xl font-bold'>{title}</h2>
        <div className='flex gap-x-3'>
          <Button
            className='flex items-center w-max px-5 gap-x-2 bg-[transparent] py-3'
            type='secondary'
          >
            Filter
            <RxCaretDown size='20px' />
          </Button>
          {button}
        </div>
      </div>
      <div className='bg-white py-8 px-6 rounded-lg mx-7'>
        <h2 className='text-lg text-grey font-semibold ml-4 mb-3'>
          {subtitle}
        </h2>
        <div className='px-3'>
          <Table
            pageSize={10}
            data={data}
            columns={columns}
            columnColor={'text-[#16962B]'}
            pagination={true}
          />
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default FeaturesTable;
