export default interface IProduct {
    gallery: string[];
    details: Details;
}

export type Details = {
    id?: string;
    title: string;
    code: string;
    rating: Rating;
    deals?: Deals;
    colors: Color[];
    storage_capacity: string[];
    storage_capacity_unit: string;
    shipping: Shipping[];
};

export type Rating = {
    count: number;
    value: number;
};

export type Deals = Record<string, string>;

export type Shipping = {
    type: string;
    estimated_time: string;
};

export type Color = { color: string; image: string };
