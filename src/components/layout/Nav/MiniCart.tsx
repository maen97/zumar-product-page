import { StyledIcon, Badge } from "./Style";

type Props = {};

const MiniCart = (props: Props) => {
    return (
        <StyledIcon role="button">
            <img src="/assets/icons/cart-icon.svg" alt="" />
            <Badge>2</Badge>
        </StyledIcon>
    );
};

export default MiniCart;
