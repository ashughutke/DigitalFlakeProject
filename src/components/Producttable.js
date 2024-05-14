import React, { useMemo, useState } from 'react';
import { useTable, useSortBy, useFilters } from 'react-table';
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";



// Define a default UI for filtering
function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
  }) {
    const count = preFilteredRows.length;
  
    return (
      <input
        value={filterValue || ''}
        onChange={e => setFilter(e.target.value || undefined)}
        placeholder={`Search ${count} records...`}
      />
    );
  }
  

function Producttable({ data }) {
  const [rowsData, setRowsData] = useState(data);

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const deleteRow = rowIndex => {
    setRowsData(old => old.filter((row, index) => index !== rowIndex));
  };

  const editRow = rowIndex => {
    alert(`Editing row id ${data[rowIndex].id}`);
  };

  const columns = useMemo(() => [
    {
      Header: 'ID',
      accessor: 'id',
      disableFilters: true, // you can disable filters for specific columns
    },
    {
      Header: 'Name',
      accessor: 'name',
      disableFilters: true
    },
    {
      Header: 'Packsize',
      accessor: 'packsize',
      disableFilters: true, // you can disable sorting for specific columns
    },
    {
      Header: 'Category',
      accessor: 'category',
      disableFilters: true, // you can disable sorting for specific columns
    },
    {
      Header: 'MRP',
      accessor: 'mrp',
      disableFilters: true, // you can disable sorting for specific columns
    },
    {
      Header: 'Image',
      accessor: 'img',
      disableFilters: true, // you can disable sorting for specific columns
    },
    {
        Header: 'Status',
        accessor: 'status',
        disableFilters: true, // you can disable sorting for specific columns
      },
    {
      Header: 'Actions',
      id: 'actions',
      Cell: ({ row }) => (
        <div>
          <button onClick={() => editRow(row.index)} className="btn btn-light me-2"><FaRegEdit /></button>
          <button onClick={() => deleteRow(row.index)} className="btn btn-light"><FaRegTrashAlt /></button>
        </div>
      ),
      disableSortBy: true,
      disableFilters: true
    }
  ], []);

  const defaultColumn = useMemo(() => ({
    // Let's set up our default Filter UI
    Filter: DefaultColumnFilter,
  }), []);

  const tableInstance = useTable({ columns, data: rowsData, defaultColumn },
    useFilters, // useFilters!
    useSortBy // useSortBy!
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  

  return (
    <div>
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} >
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''}
                </span>
                <div>{column.canFilter ? column.render('Filter') : null}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={row.id}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()} key={cell.id}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>

    
    </div>
  );
}

export default Producttable;
