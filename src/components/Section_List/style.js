import styled from "styled-components";

export const StyledSectionList = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
    max-height: 452px;
    width: 100%;
    max-width: 560px;
    margin-bottom: 1.875rem;

    ul{
        display: flex;
        flex-direction: column;
        gap: .9375rem;
        transition: .3s;
        animation: lefAppear .8s ease-in-out;
    }
`