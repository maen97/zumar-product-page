import styled, {
    FlattenInterpolation,
    ThemeProps,
    DefaultTheme,
} from "styled-components";

export const StyledOption = styled.button<{
    active: boolean;
    custom?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
    display: inline-block;
    padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 18px;
    font-weight: 500;
    color: #111;
    outline: none;
    border: 0;
    background: ${({ theme, active }) =>
        active ? theme.palette.common.highlight : "transparent"};
    border-radius: ${({ theme }) => theme.radius};
    transition: background 0.25s ease-in-out;
    cursor: pointer;

    ${({ custom }) => custom}
`;

export const StyledOptionGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
