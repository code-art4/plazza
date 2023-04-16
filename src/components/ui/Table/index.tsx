import React from 'react';
import Pagination from './Pagination';

interface TableProps {
  columns: any;
  data: any;
  pageSize: number;
  columnColor?: string;
  pagination: boolean;
}

const Table = ({
  pageSize,
  data,
  columns,
  columnColor,
  pagination,
}: TableProps) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const currentTableData = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  return (
    <div className='flex flex-col w-full'>
      <div className='overflow-x-auto w-full '>
        <div className='py-2 inline-block min-w-full '>
          <div className='overflow-hidden w-full'>
            <table className='min-w-full'>
              <thead className=''>
                <tr>
                  {columns.map(({ name }: any) => {
                    return (
                      <th
                        scope='col'
                        className={`text-sm font-medium pr-6 ${
                          columnColor ? columnColor : 'text-gray-900'
                        } py-4 text-left whitespace-nowrap`}>
                        {name}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className='overflow-auto scrollbar-hidden'>
                {currentTableData.map(
                  (
                    {
                      id,
                      date,
                      customer,
                      location,
                      tracking,
                      item,
                      amount,
                      status,
                    }: any,
                    index: any
                  ) => {
                    return (
                      <tr
                        key={index}
                        className={`whitespace-nowrap font-semibold text-sm`}>
                        <td className='text-sm py-3 text-left text-black '>
                          {id}
                        </td>
                        <td className='pr-6 py-3 text-grey'>{date}</td>
                        <td className='pr-6 py-3 text-grey'>
                          {customer?.name}
                        </td>
                        <td className='pr-6 py-3 text-grey'>{location}</td>
                        <td className='pr-6 py-3 text-grey'>{tracking}</td>
                        <td className='pr-6 py-3 text-grey'>{item}</td>
                        <td className='pr-6 py-3 text-grey'>{amount}</td>
                        <td
                          className={`rounded-[8px] max-w-min text-sm ${
                            status === 'Delivered'
                              ? 'text-[#16962B]'
                              : status === 'Pending'
                              ? 'text-[#B9F1C2]'
                              : 'text-[#FF3E3E]'
                          } pr-6 py-2 my-2 block`}>
                          {status}
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
            {pagination && (
              <Pagination
                className='ml-auto'
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={pageSize}
                onPageChange={(page: React.SetStateAction<number>) =>
                  setCurrentPage(page)
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
