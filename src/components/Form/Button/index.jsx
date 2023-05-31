import { StyleButton } from "./style"


// eslint-disable-next-line react/prop-types
export const Button = ({ text, type }) => {

    return (
        <StyleButton type={type} className={`button__default `}>
             { text } 
        </StyleButton>
    )

}