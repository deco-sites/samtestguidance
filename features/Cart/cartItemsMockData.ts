import { CartItem } from "site/features/Cart/types.ts";

export const cartItemsMockData: CartItem[] = [
    {
        id: "vintage_blusa_medio_palmeiras",
        size: "Médio",
        name: "Blusa Palmeiras Vintage",
        price: 29.99,
        quantity: 2,
        image:
            "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/samtestguidance/eae50d39-b90c-43a1-95fb-856d74ef6662/camisa_palmeiras_vintage_eterna_academia_masculina_811_1_20220408102712.webp",
    },
    {
        id: "blusa_america_pequeno",
        size: "Pequeno",
        name: "Blusa do América",
        price: 59.99,
        quantity: 1,
        image:
            "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/samtestguidance/d1451223-5eec-48c0-8a0b-c5ec90039e2a/america_blusa.webp",
    },
    {
        id: "blusa_bahia_grande",
        size: "Grande",
        name: "Blusa do Bahia",
        price: 89.99,
        quantity: 1,
        image:
            "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/samtestguidance/1ca5dc97-f88f-4da4-9228-fb150e8dfbfe/camisa_esquadrao_bahia_ii_2023_torcedor_125003_1_12adaba6b06b023472fc6007d1fbef04.jpg",
    },
];
