import {
    CartFunctionalities,
    CartItem,
    CartOpenFunctionalities,
} from "site/islands/features/Cart/signals.ts";

interface AddToCartButtonProps {
    selectedSize?: string;
    Product: CartItem;
}

const { addItem } = CartFunctionalities;
const { openDrawer } = CartOpenFunctionalities;

export default function AddToCartButton(props: AddToCartButtonProps) {
    return (
        <button
            className="btn btn-sm btn-secondary"
            disabled={!props.selectedSize}
            onClick={() => {
                addItem(props.Product);
                openDrawer();
            }}
        >
            Adicionar ao Carrinho
        </button>
    );
}
