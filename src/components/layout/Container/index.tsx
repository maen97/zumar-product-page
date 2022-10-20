import styled, {
    FlattenInterpolation,
    ThemeProps,
    DefaultTheme,
} from "styled-components";

const Container = styled.div<{
    custom?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};

    ${({ custom }) => custom}
`;

export default Container;
