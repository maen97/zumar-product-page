import type { Link } from "../../../types";
import { StyledMenu } from "./Style";

type Props = {
    links: Link[];
};

const Menu = ({ links }: Props) => {
    return (
        <StyledMenu role="menu">
            {links.map(({ id, label, link }) => {
                return (
                    <li key={id} role="menuitem">
                        <a href={link}>{label}</a>
                    </li>
                );
            })}
        </StyledMenu>
    );
};

export default Menu;
