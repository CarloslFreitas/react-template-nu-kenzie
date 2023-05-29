import style from './index.module.css'

export const Button = ({ text }) => {

    return (
        <button className={`button__default `}> { text } </button>
    )

}