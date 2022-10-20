import styled, {
    FlattenInterpolation,
    ThemeProps,
    DefaultTheme,
} from "styled-components";

const Row = styled.div<{
    custom?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
    display: flex;
    justify-content: space-between;

    ${({ custom }) => custom}
`;

export default Row;
