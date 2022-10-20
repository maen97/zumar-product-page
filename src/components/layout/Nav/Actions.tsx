import { StyledActions } from "./Style";
import Menu from "./Menu";
import MiniCart from "./MiniCart";
import { Link } from "../../../types";
import Toggle from "./Toggle";

const Links: Link[] = [
    {
        id: 1,
        label: "Services",
        link: "#",
    },
    {
        id: 2,
        label: "Orders",
        link: "#",
    },
    {
        id: 3,
        label: "Account",
        link: "#",
    },
];
type Props = {};

const Actions = (props: Props) => {
    return (
        <StyledActions>
            <Menu links={Links} />
            <MiniCart />
            <Toggle />
        </StyledActions>
    );
};

export default Actions;
