import styled from 'styled-components'

export const StyleHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-grey-1);
    height: 5.5rem;
    width: 100%;
    position: fixed;
    left: 0rem;
    top: 0rem;
    box-shadow: 0rem .25rem 2rem -0.75rem #00000040;

    figure {
        width: 1300px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap:wrap;
        gap: 20px;
    }
    img {
        margin: 0 clamp(15px, 8%, 100px); 
    }
    button {
        display: none;
        margin: 0 clamp(15px, 8%, 100px) 0 0; 
        cursor: pointer;
    }
`