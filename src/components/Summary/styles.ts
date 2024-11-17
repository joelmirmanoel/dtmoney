import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 10fr);
    gap: 15rem;
    margin-top: --10rem;  

    div {
        background: var(--chape);
        padding: 1rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 2rem;
            font-size: center;
            font-weight: 1500;
            line-height: 0.50%;
        }

        &.highlight-background {
            background: var(--green);
            color: #FFF;
        }
    }`