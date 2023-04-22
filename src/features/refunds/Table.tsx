import React from 'react';
import Pagination from '../../components/ui/Table/Pagination';
import Status from './../../features/status/index';

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
                      >
                        {name}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className='overflow-auto scrollbar-hidden'>
                {currentTableData.map((cell: any, index: any) => {
                  return (
                    <tr
                      key={index}
                      className={`whitespace-nowrap font-semibold text-sm rounded`}
                    >
                      {Object.entries(cell).map(
                        ([key, value]: [key: string, value: any]) => {
                          return key === 'refundAmount' ? null : key ===
                            'status' ? (
                            <td
                              className={`rounded-[8px] max-w-min text-sm
                          pr-6 py-2 my-2`}
                            >
                              {Status({ status: value })}
                            </td>
                          ) : (
                            <td className='pr-6 py-3' key={key}>
                              {value}
                            </td>
                          );
                        }
                      )}
                      <td className='pr-6 py-3 text-green underline'>
                        <input
                          type='text'
                          className='border border-green rounded-lg text-grey placeholder:text-grey py-3 px-4 outline-none'
                          readOnly={true}
                          defaultValue={cell.refundAmount}
                        />
                      </td>
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
