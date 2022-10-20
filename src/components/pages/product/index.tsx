import { useState } from "react";
import PRODUCT from "../../../data/product";
import IProduct from "../../../types/Product";
import { Container } from "../../layout";
import { ProductDetails, ProductGallery } from "../../ui";
import {
    galleryCustomStyles,
    containerCustomStyles,
    detailsCustomStyles,
} from "./Style";

type Props = {};

const Product = (props: Props) => {
    const [product, setProduct] = useState<IProduct>(PRODUCT);
    return (
        <section>
            <Container custom={containerCustomStyles}>
                <ProductGallery
                    images={product.gallery}
                    custom={galleryCustomStyles}
                />
                <ProductDetails
                    data={product.details}
                    custom={detailsCustomStyles}
                />
            </Container>
        </section>
    );
};

export default Product;
