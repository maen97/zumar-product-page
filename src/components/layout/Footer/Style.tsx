import styled, { css } from "styled-components/macro";

export const StyledFooter = styled.footer`
    box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.05);
`;

export const containerCustomStyles = css`
    display: flex;
    justify-content: center;
    padding: ${({ theme }) => `${theme.spacing(3)}`};

    a {
        transition: color 0.2s ease-in-out;
        font-weight: 600;
        &:hover {
            color: ${({ theme }) => `${theme.palette.common.danger}`};
        }
    }
`;
