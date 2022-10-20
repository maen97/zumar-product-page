import { StyledIcon } from "./Style";

type Props = {};

const Toggle = (props: Props) => {
    return (
        <StyledIcon role="button">
            <img src="assets/icons/toggle-icon.svg" alt="" />
        </StyledIcon>
    );
};

export default Toggle;
