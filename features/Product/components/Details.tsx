import { formatToCurrency } from "../../../utils/currency.ts";
interface ProductDetailsProps {
    name: string;
    price: number;
    description: string;
}

export default function ProductDetails(props: ProductDetailsProps) {
    return (
        <div>
            <h1 className="text-3xl font-bold">{props.name}</h1>
            <p className="text-xl font-semibold mt-2">
                {formatToCurrency(props.price)}
            </p>
            <p className="text-gray-600">{props.description}</p>
        </div>
    );
}
