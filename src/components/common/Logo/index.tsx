import { StyledLogo } from "./Style";

type Props = { alt?: string };

const Logo = ({ alt = "ZUMAR logo" }: Props) => {
    return (
        <StyledLogo href="#">
            <img src="assets/brand/logo.svg" alt={alt} />
        </StyledLogo>
    );
};

export default Logo;
