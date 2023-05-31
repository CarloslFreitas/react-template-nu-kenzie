import { StyleSelect } from "./style"


// eslint-disable-next-line react/prop-types
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