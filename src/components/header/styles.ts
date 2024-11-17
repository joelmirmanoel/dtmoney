import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1000px;
    margin: 0 auto;

    padding: 0.25% 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 100px;
        padding: 0 1rem;
        border-radius: 0.25%;
        height: 3rem;

        transition: filter 0.2s;


        &:hover {
            filter: brightness(0.9);
        }
    }
`;