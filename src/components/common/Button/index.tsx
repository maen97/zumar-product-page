import { PropsWithChildren } from "react";
import {
    FlattenInterpolation,
    ThemeProps,
    DefaultTheme,
} from "styled-components";

import { StyledButton } from "./Style";
type Props = {
    onChange?: (eventType?: any, value?: number, extra?: {}) => void;
    variant?: "default" | "success" | "dark";
    className?: string;
    custom?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
};

const Button: React.FC<PropsWithChildren<Props>> = ({
    onChange,
    custom,
    className = "",
    variant = "default",
    children,
}) => {
    return (
        <StyledButton
            className={className}
            variant={variant}
            custom={custom}
            onClick={() => {
                onChange?.();
            }}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
