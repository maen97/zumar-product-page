import { PropsWithChildren } from "react";
import OptionGroup from "../../../common/Option/OptionGroup";
import {
    StyledSegment,
    SegmentTitle,
    SegmentBody,
    SegmentSubtitle,
} from "./Style";
type Props = {
    title: string;
    subtitle?: string;
    subtitleVariant?: "danger" | "success";
    onChange?: (event: React.MouseEvent<HTMLElement>, value: string) => void;
    className?: string;
};

const Segment: React.FC<PropsWithChildren<Props>> = ({
    title,
    subtitle = "",
    subtitleVariant = "danger",
    className,
    onChange,
    children,
}) => {
    return (
        <StyledSegment className={`gutter-bottom ${className}`}>
            <SegmentTitle>
                {title}
                <SegmentSubtitle variant={subtitleVariant}>
                    {subtitle}
                </SegmentSubtitle>
            </SegmentTitle>
            <SegmentBody>
                <OptionGroup onChange={(e, value) => onChange?.(e, value)}>
                    {children}
                </OptionGroup>
            </SegmentBody>
        </StyledSegment>
    );
};

export default Segment;
