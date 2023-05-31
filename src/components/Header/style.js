import styled from 'styled-components'

export const StyleHeader = styled.header`
    display: flex;
    align-items: center;
    /* justify-content: center; */

    height: 5.5rem;
    width: 100%;
    position: relative;
    left: 0rem;
    top: 0rem;
    box-shadow: 0rem .25rem 2rem -0.75rem #00000040;

    figure {
        margin: 0 clamp(15px, 8%, 100px);
    }
`