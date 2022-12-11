import TableCell from "./tableCell";

const TableRow = ({ flight }) => {
  const words = Object.values(flight);

  console.log(words);

  return (
    <tr>
      <td>✈</td>
      {words?.map((word, index) => (
        <TableCell key={index} word={word}/>
      ))}
    </tr>
  );
};

export default TableRow;
