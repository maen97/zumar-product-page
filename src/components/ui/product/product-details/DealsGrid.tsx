import { Deals } from "../../../../types/Product";
import { StyledDealsGrid, Deal, Label, Price } from "./Style";
type Props = {
    deals: Deals;
    className?: string;
};

const DealsGrid = ({ deals, className }: Props) => {
    return (
        <StyledDealsGrid className={className || ""}>
            {Object.entries(deals).map(([label, price]) => {
                return (
                    <Deal key={`${label}-${price}`}>
                        <Label>{label} Pieces</Label>
                        <Price>{price}</Price>
                    </Deal>
                );
            })}
        </StyledDealsGrid>
    );
};

export default DealsGrid;
