import styled from "styled-components"

export const StyleInput = styled.fieldset`
    display: flex;
    flex-direction: column;

    label {
        margin-bottom: .75rem;
    }
    input {
        width: 100%;
    }
    span {
        margin-top: .3125rem;
        color:rgba(134, 142, 150, 1);
    }
`