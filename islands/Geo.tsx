import { useState } from "preact/hooks";

export default function Geo() {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const add = parseFloat(value) + parseFloat(value2);
  const sub = parseFloat(value) - parseFloat(value2);
  const mul = parseFloat(value) * parseFloat(value2);
  const divi = parseFloat(value) / parseFloat(value2);

  return (
    <div>
      <div>Add: {add}</div>
      <div>Subtract: {sub}</div>
      <div>Multiply: {mul}</div>
      <div>Divide: {divi}</div>
      <input type="number" onInput={(e) => setValue(e.target.value)} />
      <input type="number" onInput={(e) => setValue2(e.target.value)} />
    </div>
  );
}