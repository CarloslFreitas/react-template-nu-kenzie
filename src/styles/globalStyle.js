import styled from "styled-components";

export const StyledGlobal = styled`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    :root {
        --color-color-primary: rgba(253,55,126,1);
        --color-color-primary-2: rgba(227,73,129,1);
        --color-color-secondary: rgba(3,184,152,1);
        --color-grey-4: rgba(33,37,41,1);
        --color-grey-3: rgba(52,58,64,1);
        --color-grey-2: rgba(233,236,239,1);
        --color-grey-1: rgba(248,249,250,1);

        --font-family: 'Nunito', sans-serif;
        --font-button: 'Inter', sans-serif;
    }

    #root {
        max-width: 1300px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        overflow-y: auto;
        gap: 50px;
    }

    main{
        display: flex;
        flex-wrap: wrap;
        gap: 60px;
        margin: 0 clamp(15px, 8%, 100px);
    }
    @media (min-width: 50rem) {
        main {
            justify-content: space-between;
            flex-direction: row;
            flex-wrap: nowrap;
        }
    }
    
    .text-style-title-1 {
        font-size: 38px;
        font-family: var(--font-family);
        
        font-weight: 800;
        font-style: normal;
        line-height: 48px;
        text-decoration: none;
        text-transform: none;
    }
    .text-style-title-2 {
        font-size: 22px;
        font-family: var(--font-family);

        font-weight: 700;
        font-style: normal;
        line-height: 34px;
        text-decoration: none;
        text-transform: none;
    }
    .text-style-title-3 {
        font-size: 16px;
        font-family: var(--font-family);

        font-weight: 700;
        font-style: normal;
        line-height: 30px;
        text-decoration: none;
        text-transform: none;
    }
    .text-style-title-4 {
        font-size: 12px;
        font-family: var(--font-family);
        
        font-weight: 600;
        font-style: normal;
        line-height: 26px;
        text-decoration: none;
        text-transform: none;
    }
    .text-style-headline {
        font-size: 16px;
        font-family: var(--font-family);
        
        font-weight: 400;
        font-style: normal;
        line-height: 26px;
        text-decoration: none;
        text-transform: none;
    }
    .text-style-body {
        font-size: 12px;
        font-family: var(--font-family);
        
        font-weight: 400;
        font-style: normal;
        line-height: 22px;
        text-decoration: none;
        text-transform: none;
    }
    .text-style-caption {
        font-size: 12px;
        font-family: var(--font-family);
        
        font-weight: 400;
        font-style: normal;
        line-height: 18px;
        text-decoration: none;
        text-transform: none;
    }
    .text-style-caption-bold {
        font-size: 8px;
        font-family: var(--font-family);

        font-weight: 700;
        font-style: normal;
        line-height: 18px;
        text-decoration: none;
        text-transform: none;
    }


    .button__default{
        height: 48px;
        border-radius: 8px;
        padding: 13px 20px 13px 20px;
        background-color: var(--color-color-primary);
        font-family: var(--font-button);
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        letter-spacing: 0em;
        cursor: pointer;
        color: rgba(255, 255, 255, 1);
        transition: .3s;
    }
    .button__default:hover{
        background-color: var(--color-color-primary-2);
    }

    .input__default {
        height: 48px;
        border: solid 2px var(--color-grey-1);
        border-radius: 8px;
        padding: 0px 16px 0px 16px;
        background-color: var(--color-grey-1);
    }
    .input__default:focus {
        border: 2px solid var(--color-grey-4);
        background-color: rgba(255, 255, 255, 1);
    }

    .select__default {
        height: 48px;
        border-radius: 8px;
        padding: 0px 16px 0px 16px;
        border: solid 2px var(--color-grey-1);
        background-color: var(--color-grey-1);

        font-family: 'Inter', sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: 26px;
        text-align: left;

    }
    .select__default:focus{
        border: 2px solid var(--color-grey-4);
    }

`