import ReactDOM from "react-dom/client";

// useState from scratch

// create variable for persitting state value
let stateValue;

const useStateCustome = (initialValue) => {
  // check for initial render
  if (stateValue === undefined) {
    stateValue = initialValue;
  }

  // update state value
  const setValue = (newValue) => {
    stateValue = newValue;
    // upadte the components
    renderApp();
  };

  // return hooks
  return [stateValue, setValue];
};

const State = () => {
  const [count, setCount] = useStateCustome(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
};

// native functions
const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
  root.render(<State />);
};
renderApp();
