import React, { useState, useRef, useLayoutEffect } from "react";

const LayoutEffect = () => {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 50}px`;
  });

  return (
    <>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Click here
      </button>

      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          This is popup
        </div>
      )}
    </>
  );
};

export default LayoutEffect;
