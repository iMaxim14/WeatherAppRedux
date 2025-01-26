import { MainButton } from "./styles"
import type { ButtonProps } from "./types"

function MainButtonCopmponent({
  buttonName,
  buttonType,
  onClick,
}: ButtonProps) {
  return (
    <MainButton type={buttonType} onClick={onClick}>
      {buttonName}
    </MainButton>
  )
}

export default MainButtonCopmponent
