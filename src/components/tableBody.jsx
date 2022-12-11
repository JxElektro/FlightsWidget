import { useState, useEffect } from "react";
import TableRow from "./tableRow";

const TableBody = () => {
  const [flight, setFlight] = useState(null);

  const getFlight = () => {
    fetch("http://localhost:8000/flight")
      .then((res) => res.json())
      .then((flight) => setFlight(Object.values(flight.data)))
      .catch((err) => console.log(err));
  };

  useEffect(() => getFlight(), []);

  console.log(flight);

  return (
    <tbody>
      {flight?.map((flight, index) => (
        <TableRow key={index} flight={flight} />
      ))}
    </tbody>
  );
};

export default TableBody;
