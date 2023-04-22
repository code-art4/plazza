import Status from '../status';

interface TableProps {
  title: string;
  data: any;
}

const Table = ({ title, data }: TableProps) => {
  return (
    <div>
      <h3 className='font-semibold text-grey mb-2'>{title}</h3>
      <table className='border-collapse'>
        <tbody>
          {data.map((item: any, index: number) => {
            return (
              <tr>
                <td className='font-semibold py-2 border-none'>{item.key}:</td>
                <td
                  className={`px-4 py-2 border-none text-gray-500 text-grey ${
                    item.key === 'Currency' ? '!text-green font-medium' : ''
                  } ${item.key === 'Contact' ? '!text-green font-medium' : ''}`}
                >
                  {item.key === 'Order Status'
                    ? Status(item.value)
                    : item.value}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
