interface CartSubTotalProps{
    subTotal:string
}
export default function CartSubTotal(props:CartSubTotalProps) {
    return (
        <p className="text-lg font-semibold">
            Subtotal: {props.subTotal}
        </p>
    );
}
