import { JSX } from "preact";
type Link = JSX.IntrinsicElements["a"] & { key: string };


export const links: Link[] = [{
    href: "#",
    children: "Coleções",
    key: "collections",
}, {
    href: "#",
    children: "Home",
    key: "home",
}, { href: "#", children: "Promoções", key: "promotions" }];
