import IProduct from "../types/Product";

const PRODUCT: IProduct = {
    gallery: [
        "assets/product-media/main-image.png",
        "assets/product-media/mini-image-1.png",
        "assets/product-media/mini-image-2.png",
        "assets/product-media/mini-image-3.png",
    ],
    details: {
        id: "584-Y",
        title: "Single SIM 11 Pro Max Phone Gold 512GB 6.5 Inch Hot Selling Phone Wholesale",
        code: "578902-00",
        rating: {
            count: 200,
            value: 4.6,
        },
        deals: {
            "10-25": "$1,150,50.00",
            "10-19": "$1,145.00",
            "50+": "$1,145.00",
        },
        colors: [
            { color: "black", image: "assets/product-media/black.jpg" },
            { color: "red", image: "assets/product-media/red.jpg" },
            { color: "green", image: "assets/product-media/green.jpg" },
        ],
        storage_capacity: ["128", "256", "512"],
        storage_capacity_unit: "GB",
        shipping: [
            {
                type: "free",
                estimated_time: "15-30",
            },
            {
                type: "fast",
                estimated_time: "5-7",
            },
            {
                type: "rocket",
                estimated_time: "2-5",
            },
        ],
    },
};

export default PRODUCT;
