import { signal } from "@preact/signals";
import { CartItem } from "site/features/Cart/types.ts";
import { cartItemsMockData } from "site/features/Cart/cartItemsMockData.ts";

const cartItemSignal = signal<CartItem[]>(cartItemsMockData);

const addItem = (item: CartItem) => {
    if (cartItemSignal.value.some((u) => u.id === item.id)) {
        updateQuantity(item.id, 1);
        return;
    }
    cartItemSignal.value = [...cartItemSignal.value, item];
};

const updateQuantity = (id: string, change: number) => {
    console.log(id, cartItemSignal.value);
    cartItemSignal.value = cartItemSignal.value.map((item) =>
        item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + change) }
            : item
    );
};

const removeItem = (id: string) => {
    cartItemSignal.value = cartItemSignal.value.filter((item) =>
        item.id !== id
    );
};

const calculateSubTotal = () =>
    cartItemSignal.value.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );

export const CartItemStateManager = {
    updateQuantity,
    removeItem,
    calculateSubTotal,
    cartItemsSignal: cartItemSignal,
    addItem,
};

const CartDraweOpenSignal = signal(false);

const openDrawer = () => {
    CartDraweOpenSignal.value = true;
};

const closeDrawer = () => {
    CartDraweOpenSignal.value = false;
};

export const CartDrawerOpenCloseHandler = {
    openDrawer,
    closeDrawer,
    CartDraweOpenSignal,
};
