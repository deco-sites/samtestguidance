import {
    CartFunctionalities,
    CartItem,
    CartOpenFunctionalities,
} from "site/islands/features/Cart/signals.ts";

interface AddToCartButtonProps extends CartItem {
}

const { addItem } = CartFunctionalities;
const { openDrawer } = CartOpenFunctionalities;

export default function AddToCartButton(props: AddToCartButtonProps) {
    return (
        <button
            className="btn btn-sm btn-secondary"
            disabled={!props.id}
            onClick={() => {
                addItem(props);
                openDrawer();
            }}
        >
            Adicionar ao Carrinho
        </button>
    );
}
