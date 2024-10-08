import { formatToCurrency } from "site/utils/currency.ts";
interface ProductDetailsProps {
    name: string;
    price?: number;
    description: string;
}

export function ProductDetails(props: ProductDetailsProps) {
    return (
        <div>
            <h1 className="text-3xl font-bold">{props.name}</h1>
            <p className="text-xl font-semibold mt-2">
                {props.price ? formatToCurrency(props.price) : ""}
            </p>
            <p className="text-gray-600">{props.description}</p>
        </div>
    );
}
