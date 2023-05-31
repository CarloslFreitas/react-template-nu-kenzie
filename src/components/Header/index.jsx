import logo from '../../../src/assets/NUKenzie.png'
import { StyleHeader } from './style'


export const Header = () => {
    return (
        <StyleHeader>
            <figure>
                <img src={logo} alt="NuKenzie-Logo" />
            </figure>
        </StyleHeader>
    )
}