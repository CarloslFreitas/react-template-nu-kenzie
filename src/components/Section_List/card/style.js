import styled, {css} from "styled-components";

export const StyledCard = styled.li`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    height: 87px;
    max-width: 560px;

    padding: 10px 20px;
    border-radius: 4px;
    
    background: var(--color-grey-1);

    ${(props) => {
        
        if(props.type === 'entrada'){
            return css`
                border-left: solid 5px var(--color-color-secondary) ;
            `
        }else if(props.type === 'saida') {
            return css`
                border-left: solid 5px var(--color-grey-2) ;
            `
        }
    }}

    transition: .3s;
    animation: appears 1s ease-in-out;

    .value__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .8rem;

    }
    .text__container {
        display: flex;
        flex-direction: column;
        gap: .8rem;
    }

    button{
        height: 19px;
        width: 49px;
        border-radius: 2px;

        font-family: 'Nunito',sans-serif;
        font-size: 10px;
        font-weight: 400;   

        background: var(--color-grey-2);
        transition: .2s;

        cursor: pointer;
    }
    button:hover{
        background: var(--color-grey-4);
        color: var(--color-grey-2);
    }

    :hover {
        transform: scale(1.01);
        background-color: var(--color-white);
        box-shadow: 0px 4px 42px -12px #00000040;
    }
`