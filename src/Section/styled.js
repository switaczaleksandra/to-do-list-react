import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 10px 0;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 5px ${({ theme }) => theme.color.alto};
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px ${({ theme }) => theme.color.alto};
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.MobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h3`
    ont-size: 1.5em;
    margin: 0;
`;

export const Body = styled.div`
    padding: 20px;
`;