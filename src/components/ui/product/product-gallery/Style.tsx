import styled, {
    css,
    FlattenInterpolation,
    ThemeProps,
    DefaultTheme,
} from "styled-components/macro";

export const StyledProductGallery = styled.section<{
    custom?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    @media ${({ theme }) => theme.breakpoints.md} {
        gap: 0 5px;
    }

    ${({ custom }) => custom}
`;

export const StyledImagesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: ${({ theme }) => theme.spacing(2)} auto;
    padding: ${({ theme }) => theme.spacing(2)};
    max-width: 80%;
    max-height: 130px;

    @media ${({ theme }) => theme.breakpoints.xs} {
        max-width: 100%;
        max-height: 90px;
    }
`;

export const StyledMainImage = styled.div`
    display: flex;
    justify-content: center;

    > img {
        object-fit: contain;
        max-width: 100%;
        height: auto;
    }

    width: 100%;
    @media ${({ theme }) => theme.breakpoints.md} {
    }
`;

export const StyledMiniImage = styled.div`
    flex: 0 0 calc(33.333% - 10px);
    border-radius: ${({ theme }) => theme.spacing(4)};
    overflow: hidden;
    cursor: pointer;

    > img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    @media ${({ theme }) => theme.breakpoints.md} {
        gap: 0 5px;
    }
`;
