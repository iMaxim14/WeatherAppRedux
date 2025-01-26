import styled from "@emotion/styled"

export const MainButton = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  background: none;
  border: 1px solid white;
  color: white;
  font-size: 20px;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    color: rgba(47, 72, 111, 0.62);
    background: white;
  }

  &:active {
    transform: translateY(4px);
  }
`
