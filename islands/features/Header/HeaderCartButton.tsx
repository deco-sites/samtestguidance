import Icon from "site/components/ui/Icon.tsx";
import { CartDrawerOpenCloseHandler } from "../Cart/signals.ts";

const { openDrawer, closeDrawer, CartDraweOpenSignal } =
    CartDrawerOpenCloseHandler;

export function HeaderCartButton() {
    return (
        <Icon
            onClick={() => {
                CartDraweOpenSignal.value ? closeDrawer() : openDrawer();
            }}
            id="ShoppingCart"
            size={20}
            className="cursor-pointer text-neutral"
            role="button"
        />
    );
}
