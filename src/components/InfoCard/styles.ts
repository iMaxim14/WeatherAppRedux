import styled from "@emotion/styled"

export const InfoCardWrapper = styled.div`
  display: flex;
  width: 710px;
  height: 180px;
  background: linear-gradient(
    -45deg,
    rgba(11, 27, 52, 0.62) 0%,
    rgba(47, 72, 111, 0.62) 100%
  );
  border-radius: 20px; //непонятно как узнать из Mixed
  backdrop-filter: blur(8px);
  // Шрифт подключить
  font-family: Arial, Helvetica, sans-serif;
  flex-direction: column;
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const InfoWrapper = styled.div`
  margin-top: 22px;
  margin-left: 36px;
`

export const DegreesCelsius = styled.p`
  color: white;
  font-size: 57px;
  font-weight: bold;
  margin-bottom: -5px;
`

export const LocationInfo = styled.p`
  font-size: 20px;
  color: white;
  font-weight: bolder;
`

export const InfoPicturesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 290px;
  height: 74px;
  margin-right: 126px;
  margin-top: 28px;
`

export const ImagePictures = styled.img``

export const ButtonWrapper = styled.p`
  display: flex;
  width: 405px;
  flex-direction: row;
  margin-top: 19px;
  gap: 95px;
  margin-left: 145px;
`
