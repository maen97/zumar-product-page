import styled, {
    css,
    FlattenInterpolation,
    ThemeProps,
    DefaultTheme,
} from "styled-components/macro";
import { lighten } from "polished";

export const StyledNav = styled.nav`
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    /* border-radius: ${({ theme }) => theme.radius}; */
`;

export const StyledMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1 0 60%;
    > li {
        display: flex;
        flex: 0 0 33.333%;
        justify-content: center;
        font-weight: 500;

        a {
            display: flex;
            align-items: center;
            position: relative;
            &::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                height: 3px;
                background: currentColor;
                transition: width 0.5s ease-in-out;
            }
            &:hover {
                &::after {
                    width: 100%;
                }
            }
        }
    }

    @media ${({ theme }) => theme.breakpoints.md} {
        display: none;
    }
`;

export const StyledIcon = styled.div<{
    custom?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
    padding: 8px;
    display: flex;
    align-items: center;
    flex: 0 0 min(44px, 20%);
    position: relative;
    z-index: 2;
    cursor: pointer;

    &:hover {
        transform: translateY(-4px);
    }
    transition: transform 0.25s ease-in-out;
    > img {
        width: 22px;
        height: 22px;
        object-fit: contain;
    }

    @media ${({ theme }) => theme.breakpoints.md} {
        padding: 2px;
        flex: 0 0 min(22px, 20%);
    }

    ${({ custom }) => custom}
`;

export const Badge = styled.span<{
    custom?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 8px;
    font-weight: 500;
    color: #fff;
    background: ${({ theme }) => theme.palette.common.accent};
    box-shadow: 0 4px 11px ${({ theme }) => theme.palette.common.accent};
    width: 14px;
    height: 14px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ custom }) => custom}
`;

export const StyledActions = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 0 0 33.333%;

    @media ${({ theme }) => theme.breakpoints.md} {
        flex: 0 0 15%;
    }
`;

export const StyledFilters = styled.form`
    display: flex;
    justify-content: space-between;
    flex: 0 0 33.333%;
    gap: 0 10px;

    @media ${({ theme }) => theme.breakpoints.md} {
        flex: 0 0 50%;
    }
`;

export const FilterBy = styled.select`
    flex: 0 0 min(50px, 20%);
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 16px;
    font-weight: 500;
    position: relative;
    cursor: pointer;
    color: #000;
    outline: none;
    border: none;
`;

export const StyledSearch = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1 0 70%;
    padding: ${({ theme }) => `0 ${theme.spacing(1)}`};
    border-radius: ${({ theme }) => theme.radius};
    overflow: hidden;
    position: relative;
`;

export const SearchField = styled.input`
    outline: none;
    border: none;
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.main};
    width: 100%;
    background: transparent;
    z-index: 2;
    position: relative;

    &::placeholder {
        color: rgba(0, 0, 0, 0.2);
    }
    &:focus,
    &:active {
        + .line {
            height: 100%;
            border-width: 3px;
        }
    }
`;

export const Line = styled.span`
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => lighten(0.02, theme.palette.common.highlight)};
    border: 0 solid ${({ theme }) => theme.palette.common.highlight};
    transition: height 0.25s ease-in-out, border 0.5s ease-in-out;
    z-index: 1;
`;

export const containerCustomStyles = css`
    display: flex;
    justify-content: space-between;

    @media ${({ theme }) => theme.breakpoints.md} {
        gap: 0 5px;
    }
`;
