import { signal } from "@preact/signals";

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

const cartItemSignal = signal<CartItem[]>([
    {
        id: 1,
        name: "Vintage T-Shirt",
        price: 29.99,
        quantity: 2,
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 2,
        name: "Denim Jeans",
        price: 59.99,
        quantity: 1,
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 3,
        name: "Running Sneakers",
        price: 89.99,
        quantity: 1,
        image: "/placeholder.svg?height=100&width=100",
    },
]);

const addItem = (item: CartItem) => {
    if (cartItemSignal.value.some((u) => u.id === item.id)) {
        updateQuantity(item.id, 1);
        return;
    }
    cartItemSignal.value = [...cartItemSignal.value, item];
};

const updateQuantity = (id: number, change: number) => {
    console.log(id, cartItemSignal.value);
    cartItemSignal.value = cartItemSignal.value.map((item) =>
        item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + change) }
            : item
    );
};

const removeItem = (id: number) => {
    cartItemSignal.value = cartItemSignal.value.filter((item) =>
        item.id !== id
    );
};

const calculateSubTotal = () =>
    cartItemSignal.value.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );

export const CartFunctionalities = {
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

export const CartOpenFunctionalities = {
    openDrawer,
    closeDrawer,
    CartDraweOpenSignal,
};
