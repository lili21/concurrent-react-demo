import { useState } from "react";

export default function InputDemo() {
  const [value, setValue] = useState();
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
    let l = [];
    for (let i = 0; i < 20000; i++) {
      l.push(e.target.value);
    }
    setList(l);
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
