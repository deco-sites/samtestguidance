import { signal } from "@preact/signals";

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    size: string;
}

const cartItemSignal = signal<CartItem[]>([
    {
        id: "vintage_blusa_medio",
        size: "Médio",
        name: "Vintage T-Shirt",
        price: 29.99,
        quantity: 2,
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: "denin_jeans_pequeno",
        size: "Pequeno",
        name: "Denim Jeans",
        price: 59.99,
        quantity: 1,
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: "sneakers_grande",
        size: "Grande",
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
