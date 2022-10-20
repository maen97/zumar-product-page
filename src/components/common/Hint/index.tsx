import styled from "styled-components/macro";

const Hint = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ color }) => color ?? "#828282"};
`;

export default Hint;
