interface ProductDetailsProps {
    name: string;
    price: number;
    description: string;
}

function formatToCurrency(value: number) {
    return Intl.NumberFormat("pt-BR", {
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(
        value,
    );
}
export default function ProductDetails(props: ProductDetailsProps) {
    return (
        <div>
            <h1 className="text-3xl font-bold">{props.name}</h1>
            <p className="text-xl font-semibold mt-2">
                R$ {formatToCurrency(props.price)}
            </p>
            <p className="text-gray-600">{props.description}</p>
        </div>
    );
}
