import Button from "../Button/Button"
import {
  ErrorCardWrapper,
  ErrorInfoWrapper,
  ErrorTitle,
  ErrorInfo,
  ButtonWrapper,
} from "./styles"

function ErrorCard() {
  return (
    <ErrorCardWrapper>
      <ErrorInfoWrapper>
        <ErrorTitle>Error</ErrorTitle>
        <ErrorInfo>Something went wrong with API data</ErrorInfo>
      </ErrorInfoWrapper>
      <ButtonWrapper>
        <Button buttonName="Delete" buttonType="button" />
      </ButtonWrapper>
    </ErrorCardWrapper>
  )
}

export default ErrorCard
