import styled from "styled-components";

export const StyledLogo = styled.a`
    max-width: 122px;
    height: 44px;
    display: flex;
    flex: 0 0 33.33%;
    @media ${(props) => props.theme.breakpoints.md} {
        max-width: 80px;
        flex: 0 0 25%;
    }
    > img {
        object-fit: contain;
        max-width: 100%;
        height: auto;
    }
`;
