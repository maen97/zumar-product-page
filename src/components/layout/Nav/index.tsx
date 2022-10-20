import { Logo } from "../../common";
import Container from "../Container";
import Actions from "./Actions";
import Filters from "./Filters";
import { StyledNav, containerCustomStyles } from "./Style";

const Nav = () => {
    return (
        <StyledNav>
            <Container custom={containerCustomStyles}>
                <Logo />
                <Filters />
                <Actions />
            </Container>
        </StyledNav>
    );
};

export default Nav;
