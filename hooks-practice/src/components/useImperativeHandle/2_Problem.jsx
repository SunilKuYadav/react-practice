import React, { useRef, forwardRef, useState } from "react";
import styled from "styled-components";

const ImperativeHandle = () => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef();

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <button>Focus Close</button>
      <button>Focus Conform</button>
      <button>Focus Deny</button>

      <ConfirmationModal
        ref={modalRef}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default ImperativeHandle;

const ConfirmationModal = forwardRef(({ isOpen, onClose }, ref) => {
  if (!isOpen) return;

  return (
    <Modal ref={ref}>
      <CloseBtn onClick={onClose}>&times;</CloseBtn>
      <div>
        <h4>Title</h4>
        <div>Do you confirm?</div>
      </div>
      <div>
        <YesBtn onClick={onClose}>Yes</YesBtn>
        <NoBtn onClick={onClose}>No</NoBtn>
      </div>
    </Modal>
  );
});

const Modal = styled.div`
  background-color: lightblue;
  width: 150px;
  max-height: 500px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CloseBtn = styled.button`
  width: 30px;
  align-self: flex-end;
  transition: 0.3s all ease;
  border: 2px solid transparent;
  margin: 0.5rem;
  &:focus,
  &:hover {
    transition: 0.3s all ease;
    border: 2px solid red;
    border-radius: 5px;
  }
`;

const YesBtn = styled(CloseBtn)`
  width: 40px;
  &:focus,
  &:hover {
    border-color: green;
  }
`;

const NoBtn = styled(YesBtn)`
  &:focus,
  &:hover {
    border-color: yellow;
  }
`;
