import { Children } from "react";
import styled, {
    FlattenInterpolation,
    ThemeProps,
    DefaultTheme,
} from "styled-components";

import {
    StyledImagesContainer,
    StyledMainImage,
    StyledMiniImage,
    StyledProductGallery,
} from "./Style";

type Props = {
    images: string[];
    custom?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
};

const ProductGallery = ({ images, custom }: Props) => {
    return (
        <StyledProductGallery custom={custom} role="figure">
            <StyledMainImage>
                <img src={images[0]} alt="product image" />
            </StyledMainImage>
            <StyledImagesContainer>
                {Children.map(images.slice(1), (img) => (
                    <StyledMiniImage>
                        <img src={img} alt="" />
                    </StyledMiniImage>
                ))}
            </StyledImagesContainer>
        </StyledProductGallery>
    );
};

export default ProductGallery;
