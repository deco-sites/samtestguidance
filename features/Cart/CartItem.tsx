import { formatToCurrency } from "../../utils/currency.ts";
import Icon from "site/components/ui/Icon.tsx";

interface CartItemProps {
    id: number;
    imageSrc: string;
    name: string;
    price: number;
    updateQuantity: (id: number, by: number) => void;
    removeItem: (id: number) => void;
    quantity: number;
}

export default function CartItem(props: CartItemProps) {
    return (
        <li>
            <div className="p-4 flex flex-wrap md:flex-nowrap items-center">
                <img
                    src={props.imageSrc}
                    alt={props.name}
                    className="w-24 h-24 object-cover rounded mr-4 mb-4 md:mb-0"
                />
                <div className="flex-grow mb-4 md:mb-0">
                    <h3 className="text-lg font-medium">
                        {props.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        {formatToCurrency(props.price)} cada
                    </p>
                </div>
                <div className="flex items-center space-x-2 mr-4 gap-2">
                    <button
                        onClick={() => props.updateQuantity(props.id, -1)}
                        aria-label={`Diminuir quantidade de ${props.name}`}
                    >
                        <Icon
                            id="Minus"
                            className="h-4 w-4"
                        />
                    </button>
                    <span
                        className="w-8 text-center"
                        aria-label={`Quantidade de ${props.name}`}
                    >
                        {props.quantity}
                    </span>
                    <button
                        onClick={() => {
                            props.updateQuantity(props.id, 1);
                        }}
                        aria-label={`Increase quantity of ${props.name}`}
                    >
                        <Icon
                            id="Plus"
                            className="h-4 w-4"
                        />
                    </button>
                </div>
            </div>
            <div className="border-b-2 p-4">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <p className="font-medium md:mr-4">
                        {formatToCurrency(
                            props.price * props.quantity,
                        )}
                    </p>
                    <button
                        onClick={() => {
                            props.removeItem(props.id);
                        }}
                        aria-label={`Remover ${props.name} do carrinho`}
                    >
                        <Icon
                            id="Trash"
                            size={22}
                        />
                    </button>
                </div>
            </div>
        </li>
    );
}
