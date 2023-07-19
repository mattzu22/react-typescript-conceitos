import { useState, ChangeEvent } from "react";

const State = () => {
  const [text, setText] = useState< string | null>(null);
    //o evento possue um tipo especifico, o ChangeEvent, e ele possui o HTMLInputElement é um tipo que vai dizer que vem uma mudança de um elemento HTML  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>O texto é: {text}</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default State;
