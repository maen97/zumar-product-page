import { darken } from "polished";
import styled from "styled-components/macro";

export const StyledNumeric = styled.div`
    min-width: 90px;
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    background: ${({ theme }) => theme.palette.common.highlight};
    border-radius: 4rem;
    overflow: hidden;
`;

export const Control = styled.button`
    outline: none;
    border: none;
    font: inherit;
    display: flex;
    align-items: center;
    cursor: pointer;
    background: transparent;
    padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(3)}`};
    transition: background-color 0.25s ease-in-out;
    svg {
        fill: #082933;
    }
    &:hover {
        background: ${({ theme }) =>
            darken(0.04, theme.palette.common.highlight)};
    }
`;
