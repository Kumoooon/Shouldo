import { useState } from "react";
import { Link } from "react-router-dom";
export default function Daylist() {
  const [days, setdays] = useState([]);
  console.log(dummy);
  function onclick() {
    setdays([...days, { id: Math.random(), day: 1 }]);
  }
  return (
    <ul className="list_day">
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day{day.day}</Link>
        </li>
      ))}
    </ul>
  );
}
