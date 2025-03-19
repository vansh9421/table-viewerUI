type Props = {
  table: string[][];
};

export default function TableStructureViewer({ table }: Props) {
  if (table.length === 0) return <p>No data available</p>; // Handle empty data

  return (
    <table className="table-content">
      <thead>
        <tr>
          {table[0].map((header, idx) => (
            <th key={idx} className="table-header">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.slice(1).map((row, rowIdx) => (
          <tr key={rowIdx}>
            {row.map((cell, cellIdx) => (
              <td key={cellIdx} className="table-cell">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
