import styled from "@emotion/styled";

export const InputWrapper = styled.div`
display: flex;
`;

export const InputElement = styled.input`
border: none;
width: 550px;
height: 45px;
font-size: 20px;
border-radius: 40px;
padding-left: 20px;
background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 1);
backdrop-filter: blur(16px);
color: rgba(255, 255, 255, 1);

&::placeholder{
    color: #0B1B34;
    opacity: calc(0.2);
}
`;