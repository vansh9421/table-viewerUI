type Props = {
  table: string[][];
};

export default function TableStructureViewer({ table }: Props) {
  return (
    <table className="table-content">
      {table.map((row, idx) => (
        <tr key={idx}>
          {row.map((cell, idx) => (
            <td className="table-cell" key={idx}>
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
}
