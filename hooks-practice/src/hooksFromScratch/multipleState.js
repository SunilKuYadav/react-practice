import ReactDOM from "react-dom/client";

// useState from scratch

// track index of hooks => call order => in which order hooks are called
let callIndex = -1;

// create variable for persitting state value
const stateValues = [];

const useStateCustome = (initialValue) => {
  // increment the callIndes
  callIndex++;

  // freeze the call index
  const currentCallIndex = Number(callIndex);

  // check for initial render
  if (stateValues[currentCallIndex] === undefined) {
    stateValues[currentCallIndex] = initialValue;
  }

  // update state value
  const setValue = (newValue) => {
    stateValues[currentCallIndex] = newValue;
    // upadte the components
    renderApp();
  };

  // return hooks
  return [stateValues[currentCallIndex], setValue];
};

const State = () => {
  const [count, setCount] = useStateCustome(0);
  const [value, setValue] = useStateCustome(-1);
  return (
    <>
      <h1>First hooks</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <span>{count}</span>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <h1>Second hooks</h1>
      <div>
        <button onClick={() => setValue(value + 1)}>+</button>
        <span>{value}</span>
        <button onClick={() => setValue(value - 1)}>-</button>
      </div>
    </>
  );
};

// native functions
const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
  // reset the call index
  callIndex = -1;
  root.render(<State />);
};
renderApp();
