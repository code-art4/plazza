import DataTable from 'react-data-table-component';

function MyComponent({columns, data, customStyles}: any) {
    return (
        <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
        />
    );
};

export default MyComponent