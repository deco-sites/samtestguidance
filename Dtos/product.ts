export interface SKU {
    id: string;
    size: string;
    price: number;
}
export interface Product {
    name: string;
    id: string;
    description: string;
    skus: SKU[];
    images: string[];
}
