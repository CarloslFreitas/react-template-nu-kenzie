import { StyleInput } from "./style"

export const Input = ({ label, type, id, placeholder, textHelp, value, ...rest }) => {

    return (
        <StyleInput>
            <label className='text-style-caption' htmlFor={id}> {label} </label>

            <input className='text-style-headline input__default'
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                required
                {...rest} />

            <span className='text-style-caption'> {textHelp} </span>
        </StyleInput>
    )
}