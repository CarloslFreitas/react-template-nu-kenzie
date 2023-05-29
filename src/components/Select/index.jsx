
import styles from './index.module.css'

export const Select = ({ children, id }) => {
    return (

        <fieldset className={styles.fieldset}>

            <label className='text-style-caption' htmlFor={id}>Tipo de valor</label>
            <select className='select__default' id={id}>
                {children}
            </select>

        </fieldset>

    )
}