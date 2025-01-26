import { useContext } from "react"
import Button from "../Button/Button"
import {
  ButtonWrapper,
  DegreesCelsius,
  ImagePictures,
  InfoCardWrapper,
  InfoContainer,
  InfoPicturesWrapper,
  InfoWrapper,
  LocationInfo,
} from "./styles"
import type { infocardProps } from "./types"
import { ButtonContext } from "pages/Home/Home"

function InfoCard({
  degrees,
  city,
  img,
  showSaveButton = true,
}: infocardProps) {
  const onClickButton = useContext(ButtonContext)

  return (
    <InfoCardWrapper>
      <InfoContainer>
        <InfoWrapper>
          <DegreesCelsius>{degrees}°</DegreesCelsius>
          <LocationInfo>{city}</LocationInfo>
        </InfoWrapper>
        <InfoPicturesWrapper>
          <ImagePictures src={img} />
          <ImagePictures src={img} />
          <ImagePictures src={img} />
        </InfoPicturesWrapper>
      </InfoContainer>

      <ButtonWrapper>
        {showSaveButton && (
          <Button
            buttonName="Save"
            buttonType="button"
            onClick={onClickButton?.onSave}
          />
        )}
        <Button
          buttonName="Delete"
          buttonType="button"
          onClick={onClickButton?.onDelete}
        />
      </ButtonWrapper>
    </InfoCardWrapper>
  )
}

export default InfoCard
