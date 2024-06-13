import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Person />
    </>
  );
}
function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <CustomInput updateName={ChangeInputValue} />
    </>
  );
}
function CustomInput(updateName) {
  const [value, setValue] = useState("");
  function ChangeInputValue(value) {
    setValue(value);
  }
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => ChangeInputValue(event.target.value)}
    />
  );
}

export default App;
