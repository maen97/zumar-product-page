import React, { PropsWithChildren } from "react";
import { StyledOptionGroup } from "./Style";

type Props = {
    value?: string;
    onChange?: (event: React.MouseEvent<HTMLElement>, value: string) => void;
};

const OptionGroup: React.FC<PropsWithChildren<Props>> = ({
    children,
    onChange,
}) => {
    return (
        <StyledOptionGroup
            onClick={(e) => {
                const trigger = (e.target as HTMLButtonElement).closest(
                    "button"
                );
                if (trigger) {
                    onChange?.(e, trigger.value);
                }

                return;
            }}
        >
            {children}
        </StyledOptionGroup>
    );
};

export default OptionGroup;
