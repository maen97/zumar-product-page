import React, { PropsWithChildren } from "react";
import { StyledOption } from "./Style";
import {
    FlattenInterpolation,
    ThemeProps,
    DefaultTheme,
} from "styled-components";

type Props = {
    value: string;
    active: boolean;
    custom?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
};

const Option: React.FC<PropsWithChildren<Props>> = ({
    children,
    value,
    active,
}) => {
    return (
        <StyledOption role="button" value={value} active={active}>
            {children}
        </StyledOption>
    );
};

export default Option;
