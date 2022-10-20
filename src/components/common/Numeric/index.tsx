import { StyledNumeric, Control } from "./Style";
import { FaPlus, FaMinus } from "react-icons/fa";
type EventType = "increment" | "decrement";
type Props = {
    currentValue: number;
    step?: number;
    min?: number;
    max?: number;
    onChange?: (eventType: EventType, value: number, extra?: {}) => void;
};

const Numeric = ({ currentValue, step = 1, onChange }: Props) => {
    return (
        <StyledNumeric>
            <Control
                onClick={() => {
                    onChange?.("decrement", currentValue - step);
                }}
            >
                <FaMinus />
            </Control>
            <Control
                onClick={() => {
                    onChange?.("increment", currentValue + step);
                }}
            >
                <FaPlus />
            </Control>
        </StyledNumeric>
    );
};

export default Numeric;
