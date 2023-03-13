import { useState, startTransition } from "react";

export default function InputDemo() {
  const [value, setValue] = useState();
  const [list, setList] = useState([]);
  const handleChange = (e) => {
    setValue(e.target.value);
    startTransition(() => {
      let l = [];
      for (let i = 0; i < 20000; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  };
  return (
    <div>
      <input value={value} onChange={handleChange} />
      {list.map((v) => (
        <h4>{v}</h4>
      ))}
    </div>
  );
}

const L = 20000;

function LargeList({ text }) {
  return (
    <div>
      <ul>
        {Array.from({ length: 2000 }).map(() => (
          <li>{text}</li>
        ))}
      </ul>
    </div>
  );
}
