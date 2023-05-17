import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.MobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.alto};
`;

export const Button = styled.button`
    padding: 10px;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    border: none;
    transition: 0.3s;

    &:hover {
       filter: brightness(110%);
       transform: scale(1.1);
    }

    &:active {
        filter: brightness(120%);
    }
`;