import styled from "@emotion/styled";

export const ErrorCardWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 710px;
height: 180px;
background: linear-gradient(-45deg, rgba(11, 27, 52, 0.62) 0%, rgba(47, 72, 111, 0.62) 100%);
border-radius: 20px; //непонятно как узнать из Mixed
backdrop-filter: blur(8px);
// Шрифт подключить
font-family: Arial, Helvetica, sans-serif;
justify-content: space-between;
`;

export const ErrorInfoWrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
gap: 6px;
padding-top: 16px;
flex: 1;
`;

export const ErrorTitle = styled.p`
color: white;
font-size: 57px;
font-weight: 600;
color: #F35E5E;
`;

export const ErrorInfo = styled.p`
font-size: 18px;
color: white;
font-weight: normal;
`;

export const ButtonWrapper = styled.p`
width: 155px;
padding-bottom: 9px;
`;