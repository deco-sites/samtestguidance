interface CartSubTotalProps {
    subTotal: string;
}
export function CartSubTotal(props: CartSubTotalProps) {
    return (
        <p className="text-lg font-semibold">
            Subtotal: {props.subTotal}
        </p>
    );
}
