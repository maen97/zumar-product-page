import styled, { css } from "styled-components/macro";

export const containerCustomStyles = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0 40px;

    @media ${({ theme }) => theme.breakpoints.md} {
        gap: 0 5px;
    }
`;

export const galleryCustomStyles = css`
    flex: 0 0 calc(50% - 20px);
    @media ${({ theme }) => theme.breakpoints.md} {
        flex: 0 0 100%;
    }
`;

export const detailsCustomStyles = css`
    flex: 0 0 calc(50% - 20px);
    @media ${({ theme }) => theme.breakpoints.md} {
        flex: 0 0 100%;
    }
`;
