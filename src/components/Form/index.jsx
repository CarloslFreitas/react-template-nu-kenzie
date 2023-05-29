
import styles from './index.module.css'

export const Form = ({Children}) => {

    return (
        <form className={styles}>
            {Children}
        </form>
    )

}