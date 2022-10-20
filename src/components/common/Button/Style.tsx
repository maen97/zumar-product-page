import { darken, lighten } from "polished";
import styled, {
    FlattenInterpolation,
    ThemeProps,
    DefaultTheme,
} from "styled-components/macro";

export const StyledButton = styled.button<{
    variant: "default" | "success" | "dark";
    custom?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
    border: none;
    outline: none;
    font-size: 14px;
    min-height: 46px;
    font-weight: 700;
    padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
    border-radius: ${({ theme }) => theme.spacing(2)};
    background: ${({ theme, variant }) =>
        variant == "default"
            ? theme.palette.common.highlight
            : theme.palette.common[variant]};
    color: ${({ variant }) => (variant == "default" ? "#000" : "#fff")};
    transition: background 0.25s ease-in-out;
    cursor: pointer;

    &:hover {
        background: ${({ theme, variant }) =>
            variant == "default"
                ? darken(0.1, theme.palette.common.highlight)
                : lighten(0.1, theme.palette.common[variant])};
    }
    ${({ custom }) => custom}
`;
