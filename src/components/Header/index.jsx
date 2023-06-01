import logo from '../../../src/assets/NUKenzie.png'

import { StyleHeader } from './style'

import ReactSwitch from 'react-switch'

export const Header = ({toggleTheme, theme}) => {

    return (
        
        <StyleHeader>
            <figure>
                <img src={logo} alt="NuKenzie-Logo" />
                <button>
                    <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
                </button>
            </figure>
        </StyleHeader>
    )
}