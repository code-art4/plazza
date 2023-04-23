import React from 'react';
import Pagination from './Pagination';
import Status from './../../../features/status/index';
import { CiMail } from 'react-icons/ci';

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
            <table className='min-w-full border-spacing-y-3'>
              <thead className=''>
                <tr>
                  {columns.map(({ name }: any) => {
                    return (
                      <th
                        scope='col'
                        className={`text-sm font-medium pr-6 ${
                          columnColor ? columnColor : 'text-gray-900'
                        } py-4 text-left whitespace-nowrap`}
                        key={name}
                      >
                        {name}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className='overflow-auto scrollbar-hidden'>
                {currentTableData.map((cell: any, index: any) => {
                  const { campaign, status }: any = cell;
                  return (
                    <tr
                      key={index}
                      className={`whitespace-nowrap font-semibold text-sm  rounded`}
                    >
                      <td className='text-sm py-5 text-left text-black flex flex-row'>
                        <CiMail color='#16962B' size={24} className='mr-2' />
                        <div>
                          <p>
                        {campaign}
                          </p>
<p className='text-[#8c8c8c] text-sm font-extralight mt-2'>Untitled campaign</p>
                        </div>
                      </td>
                      <td
                        className={`rounded-[8px] max-w-min text-sm
                          pr-6 py-2 my-2`}
                      >
                        {Status(status)}
                      </td>
                      {Object.entries(cell).map(
                        ([key, value]: [key: string, value: any]) => {
                          return key === 'campaign' ||
                            key === 'status' ? null : (
                            <td className='pr-6 py-3 text-grey' key={key}>
                              {Array.isArray(value)
                                ? value.map((each) => {
                                    return (
                                      <span className='block' key={each}>
                                        {each}
                                      </span>
                                    );
                                  })
                                : value}
                            </td>
                          );
                        }
                      )}
                      
                    </tr>
                  );
                })}
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
