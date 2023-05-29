import styles from './index.module.css'

export const Input = ({ label, type, id, placeholder, textHelp }) => {

    return (

        <fieldset className={styles.fieldset}>
            <label className={`text-style-caption ${styles}`} htmlFor={ id }> { label } </label>

            <input className={`text-style-headline input__default ${styles}`}
                type={ type }
                id={ id }
                placeholder={ placeholder }
            />

            <span className={`text-style-caption ${styles}`}> { textHelp } </span>
        </fieldset>

    )
}