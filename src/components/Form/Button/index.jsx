import { StyleButton } from "./style"

export const Button = ({ text, type }) => {

    return (
        <StyleButton type={type} className={`button__default `}>
            {text}
        </StyleButton>
    )

}