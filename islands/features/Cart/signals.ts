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
        id: "vintage_blusa_medio_palmeiras",
        size: "Médio",
        name: "Blusa Palmeiras Vintage",
        price: 29.99,
        quantity: 2,
        image: "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/samtestguidance/eae50d39-b90c-43a1-95fb-856d74ef6662/camisa_palmeiras_vintage_eterna_academia_masculina_811_1_20220408102712.webp",
    },
    {
        id: "blusa_america_pequeno",
        size: "Pequeno",
        name: "Blusa do América",
        price: 59.99,
        quantity: 1,
        image: "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/samtestguidance/d1451223-5eec-48c0-8a0b-c5ec90039e2a/america_blusa.webp",
    },
    {
        id: "blusa_bahia_grande",
        size: "Grande",
        name: "Blusa do Bahia",
        price: 89.99,
        quantity: 1,
        image: "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/samtestguidance/1ca5dc97-f88f-4da4-9228-fb150e8dfbfe/camisa_esquadrao_bahia_ii_2023_torcedor_125003_1_12adaba6b06b023472fc6007d1fbef04.jpg",
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
