import { StyleSelect } from "./style"

export const Select = ({ children, id, ...rest }) => {
    return (

        <StyleSelect>

            <label className='text-style-caption' htmlFor={id}>Tipo de valor</label>
            <select className='select__default' id={id} {...rest} required>
                {children}
            </select>

        </StyleSelect>

    )
}