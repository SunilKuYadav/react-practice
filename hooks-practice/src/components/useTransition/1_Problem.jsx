import React, {useState} from "react";

const LIST_SIZE = 20000;

const Transition = () => {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  const handleChange = (e) => {
    setInput(e.target.value)

    const l = [];
    for( let i=0; i<LIST_SIZE; i++) {
      l.push(e.target.value)
    }

    setList(l)
  }


  return (
    <>
    <input type="text" value={input} onChange={handleChange} />
    {list.map((item, index) => (
      <div key={index}>{item}</div>
    ))}
    </>
  )
};

export default Transition;
