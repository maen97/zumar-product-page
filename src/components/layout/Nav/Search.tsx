import { SearchField, StyledIcon, StyledSearch, FilterBy, Line } from "./Style";

type Props = {};

const Search = (props: Props) => {
    return (
        <>
            <FilterBy>
                <option defaultChecked value="all">
                    All
                </option>
                <option value="x">X</option>
                <option value="x">Y</option>
                <option value="z">Z</option>
            </FilterBy>
            <StyledSearch>
                <StyledIcon role="button">
                    <img src="assets/icons/filter-icon.svg" alt="" />
                </StyledIcon>
                <SearchField
                    type="text"
                    placeholder="Search by product or seller"
                />
                <Line className="line" />
            </StyledSearch>
        </>
    );
};

export default Search;
