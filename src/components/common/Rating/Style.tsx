import styled from "styled-components/macro";

export const StyledRating = styled.div`
    display: flex;
    align-items: center;
    gap: 0 ${({ theme }) => theme.spacing(6)};
    p {
        margin: 0;
    }
`;
