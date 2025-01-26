import type { ChangeEvent } from "react";

export interface InputProps {
    inputName: string,
    inputPlaceholder: string,
    inputType: string,
    value?: string,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}