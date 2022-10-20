import { StyledRating } from "./Style";
import { FaRegStar, FaStar } from "react-icons/fa";
import Hint from "../Hint";
type Props = {
    count?: number;
    value: number;
};

const Rating = ({ value, count }: Props) => {
    return (
        <StyledRating>
            <p>
                {[...new Array(5)].map((_, index) => {
                    return index < Math.round(value) ? (
                        <FaStar fill="#f9c744" />
                    ) : (
                        <FaRegStar fill="#f9c744" />
                    );
                })}
            </p>
            <div>
                <Hint color="#000">{value}</Hint>
                <Hint>({count})</Hint>
            </div>
        </StyledRating>
    );
};

export default Rating;
