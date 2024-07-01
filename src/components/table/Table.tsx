import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import "./styles.scss";

const columnHelper = createColumnHelper<ICountry>();

const columns = [
  columnHelper.accessor("name", {
    header: () => "Country Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("abbreviation", {
    header: () => "Code",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("capital", {
    header: () => "Capital",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("phone", {
    header: () => "Ph Code",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("population", {
    header: () => "Population",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("media.flag", {
    header: () => "Flag",
    cell: (info) => (
      <div className="icon-container">
        <img className="flag-icon" src={info.getValue()} alt="" />
      </div>
    ),
  }),
  columnHelper.accessor("media.emblem", {
    header: () => "Emblem",
    cell: (info) => (
      <div className="icon-container">
        <img className="flag-icon" src={info.getValue()} alt="" />
      </div>
    ),
  }),
];

const Table: React.FC<ITableProps> = ({ data = [] }) => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr className="head-row" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th className="t-head" key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr className="body-row" key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td className="t-cell" key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
        {!data.length ? (
          <tr>
            <td className="t-cell" colSpan={7}>
              No data!
            </td>
          </tr>
        ) : null}
      </tbody>
    </table>
  );
};

export default Table;
