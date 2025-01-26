import styled from "@emotion/styled"

export const MainButton = styled.button`
  width: 100%;
  height: 48px;
  background-color: #3678b4;
  border: none;
  color: white;
  font-size: 20px;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background: #115390;
  }

  &:active {
    transform: translateY(4px);
  }
`
