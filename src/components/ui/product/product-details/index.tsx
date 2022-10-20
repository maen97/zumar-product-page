import { useState } from "react";

import styled, {
    FlattenInterpolation,
    ThemeProps,
    DefaultTheme,
    css,
} from "styled-components";
import { Details } from "../../../../types/Product";
import { Row } from "../../../layout";
import DealsGrid from "./DealsGrid";
import Segment from "./Segment";
import Option from "../../../common/Option";
import {
    Code,
    Image,
    StyledProductDetails,
    Title,
    customOption,
    customStorage,
    customShipping,
    customQuantity,
    StyledIcon,
    customTotal,
} from "./Style";
import { Button, Hint, Numeric, Rating } from "../../../common";

type Props = {
    data: Details;
    custom?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
};

const ProductDetails = ({
    data: {
        id,
        code,
        colors,
        rating,
        shipping,
        storage_capacity,
        storage_capacity_unit,
        title,
        deals,
    },
    custom,
}: Props) => {
    const [selected, setSelected] = useState<{
        color: string;
        capacity: string;
        shipping: string;
        quantity: number;
    }>({
        color: "black",
        capacity: "512",
        shipping: "fast",
        quantity: 51,
    });
    return (
        <StyledProductDetails custom={custom}>
            <Title className="gutter-bottom">{title}</Title>
            <Row
                className="gutter-bottom"
                custom={css`
                    flex-wrap: wrap;
                    justify-content: flex-start;
                    gap: 0 ${({ theme }) => theme.spacing(12)};
                `}
            >
                <Code>Product Code: {code}</Code>
                <Rating value={rating.value} count={rating.count} />
            </Row>
            {!!deals && <DealsGrid className="gutter-bottom" deals={deals} />}
            <Segment
                title="Available color"
                onChange={(_, _color) =>
                    setSelected((prev) => ({ ...prev, color: _color }))
                }
            >
                {colors.map(({ color, image }) => {
                    return (
                        <Option
                            key={color}
                            value={color}
                            active={color == selected.color}
                        >
                            <Row custom={customOption}>
                                <Image>
                                    <img src={image} />
                                </Image>
                                <span>{color}</span>
                            </Row>
                        </Option>
                    );
                })}
            </Segment>
            <Segment
                title="Storage capacity"
                onChange={(_, _capacity) =>
                    setSelected((prev) => ({ ...prev, capacity: _capacity }))
                }
            >
                {storage_capacity.map((capacity) => {
                    return (
                        <Option
                            key={capacity}
                            value={capacity}
                            active={capacity == selected.capacity}
                        >
                            <Row custom={customStorage}>
                                <span>{capacity}</span>
                                <sub>{storage_capacity_unit}</sub>
                            </Row>
                        </Option>
                    );
                })}
            </Segment>
            <Segment title="Quantity" subtitle="$12,000">
                <Row custom={customQuantity}>
                    <Numeric
                        currentValue={selected.quantity}
                        onChange={(_, value) => {
                            setSelected((prev) => ({
                                ...prev,
                                quantity: value,
                            }));
                        }}
                    />
                    <span>{selected.quantity} Pieces</span>
                </Row>
            </Segment>
            <Segment
                title="Shipping"
                subtitle="$100"
                onChange={(_, _shipping) =>
                    setSelected((prev) => ({ ...prev, shipping: _shipping }))
                }
            >
                {shipping.map(({ estimated_time, type }) => {
                    return (
                        <Option
                            key={type}
                            value={type}
                            active={type == selected.shipping}
                        >
                            <Row custom={customShipping}>
                                <p>{type}</p>
                                <Hint>Estimated {estimated_time} days</Hint>
                            </Row>
                        </Option>
                    );
                })}
            </Segment>
            <Segment
                title="Total"
                subtitle="$12,100"
                subtitleVariant="success"
                onChange={(_, _shipping) =>
                    setSelected((prev) => ({ ...prev, shipping: _shipping }))
                }
            >
                <Row custom={customTotal}>
                    <Button variant="success" className="btn">
                        Place order now
                    </Button>
                    <Button variant="dark" className="btn">
                        <StyledIcon>
                            <img src="assets/icons/call-icon.svg" alt="" />
                        </StyledIcon>
                        <span>Call us</span>
                    </Button>
                    <Hint>We are 24/7 available</Hint>
                </Row>
            </Segment>
        </StyledProductDetails>
    );
};

export default ProductDetails;
