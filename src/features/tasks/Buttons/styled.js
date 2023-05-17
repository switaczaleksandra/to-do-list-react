import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.color.teal};
    border: none;
    transition: color 0.3s;
    margin: 0 0 0 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.MobileMax}px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
         filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
    }
`;