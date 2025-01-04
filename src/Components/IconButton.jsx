import styled from "styled-components";

const ButtonContainerS = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
  transition: border-color 0.3s, background-color 0.3s;
  cursor: pointer;
  &:hover {
      color: #FF4500;
      opacity: 0.75;
    }

  button {
    background: none;
    border: none;

    outline: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

  }
`;

export function IconButton({ onClick,children }) {
  return (
    <ButtonContainerS onClick={onClick}>
      <button>
        {/* <BiTrashAlt /> */}
        {children}
      </button>
    </ButtonContainerS>
  );
}
