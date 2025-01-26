import { MainButton } from "./styles";
import type { ButtonProps } from "./types";

function Button({buttonName, buttonType, onClick}: ButtonProps){
    return(
        <MainButton type={buttonType} onClick={onClick}>
            {buttonName}
        </MainButton>
    )
}

export default Button