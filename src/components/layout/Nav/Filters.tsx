import Search from "./Search";
import { StyledFilters } from "./Style";

type Props = {};

const Filters = (props: Props) => {
    return (
        <StyledFilters>
            <Search />
        </StyledFilters>
    );
};

export default Filters;
