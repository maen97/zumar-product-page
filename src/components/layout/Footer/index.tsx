import { Hint } from "../../common";
import Container from "../Container";
import { containerCustomStyles, StyledFooter } from "./Style";

type Props = {};

const Footer = (props: Props) => {
    return (
        <StyledFooter>
            <Container custom={containerCustomStyles}>
                <Hint>
                    Made with ❤️ by{" "}
                    <a href="https://www.linkedin.com/in/maen-sbahi-a5a1a519b">
                        Maen Sbahi
                    </a>
                </Hint>
            </Container>
        </StyledFooter>
    );
};

export default Footer;
