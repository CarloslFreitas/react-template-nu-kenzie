import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`

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
        max-width: 81.25rem;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        overflow-y: auto;
        gap: 3.125rem;
        
    }

    main{
        display: flex;
        flex-wrap: wrap;
        gap: 3.75rem;
        margin: 8.125rem clamp(.9375rem, 8vw, 6.25rem);
    }
    @media (min-width: 50rem) {
        main {
            justify-content: space-between;
            flex-direction: row;
            flex-wrap: nowrap;
        }
    }
    @media (max-width: 23.75rem) {
        main {
            margin:8.125rem .9375rem;
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
        margin-top: 10px;
    }
    .button__default:hover{
        background-color: var(--color-color-primary-2);
        transform: scale(1.02);
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

    @keyframes appears {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
  
    50% {
      transform: translateY(5px);
      opacity: 1;
    }
}

    @keyframes moveFadeIn {
        0% {
        transform: scale(0.3);
        opacity: 0;
        }
    
        50% {
        transform: scale(1);
    
        opacity: 1;
        }
    }

    @keyframes spin {
        0%{
        transform: rotate(0);
        }
        100%{
        transform: rotate(360deg);
        }
    }

    @keyframes lefAppear{
        from{
        opacity: 0;
        transform: translateX(-150px);
        }
        to{
        opacity: 1;
        }
    }

    @keyframes rigthAppear{
        0% {
        transform: scale(0.3);
        opacity: 0;
        }
        50% {
        transform: scale(1);
    
        opacity: 1;
        }
    }

    @keyframes dropAppear{
        from{
        opacity: 0;
        transform: translateY(-400px);
        }
        to{
        opacity: 1;
        }
    }

    @keyframes anime {
        0%, 100% {
        transform: translateY(0);
        }
        50%{
        transform: translateY(-20px);
        }
    }

    @keyframes beat {
        0%, 100% {
        transform: scale(1);
        }
        50%{
        transform: scale(1.1);
        }
    }

    @keyframes colorChange {
        0% {background-position: 0% 100%;}
        50%{background-position: 100% 0%;}
        100% {background-position: 0% 100%;}
    }
    ::-webkit-scrollbar{
    width: 10px;
    background-color: var(--color-grey-1);
    }
    ::-webkit-scrollbar-track{
        border-radius: 50px;
        background-color: var(--color-);
    }
    ::-webkit-scrollbar-thumb{
        border: solid 1px var(--color-color-primary-2);
        border-radius: 50px;
    }
`