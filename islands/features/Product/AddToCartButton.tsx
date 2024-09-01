import {
    CartDrawerOpenCloseHandler,
    CartItemStateManager,
} from "../Cart/signals.ts";
import { CartItem } from "site/features/Cart/types.ts";

interface AddToCartButtonProps extends CartItem {
}

const { addItem } = CartItemStateManager;
const { openDrawer } = CartDrawerOpenCloseHandler;

export function AddToCartButton(props: AddToCartButtonProps) {
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
