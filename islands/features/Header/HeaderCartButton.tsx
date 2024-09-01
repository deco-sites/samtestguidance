import Icon from "../../../components/ui/Icon.tsx";
import { CartOpenFunctionalities } from "site/islands/features/Cart/signals.ts";

const { openDrawer, closeDrawer, CartDraweOpenSignal } =
    CartOpenFunctionalities;

export default function HeaderCartButton() {
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
