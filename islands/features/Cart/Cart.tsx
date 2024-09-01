import { CartFunctionalities, CartOpenFunctionalities } from "./signals.ts";
import { formatToCurrency } from "../../../utils/currency.ts";
import CartItem from "site/features/Cart/CartItem.tsx";
import CartHeader from "site/features/Cart/CartHeader.tsx";
import EmptyCart from "site/features/Cart/EmptyCart.tsx";
import CartSubTotal from "site/features/Cart/CartSubTotal.tsx";

const { removeItem, calculateSubTotal, updateQuantity, cartItemsSignal } =
    CartFunctionalities;

const { closeDrawer, CartDraweOpenSignal } = CartOpenFunctionalities;

export default function Cart() {
    return (
        <div
            style={{
                position: "fixed",
                top: "64px",
                border: "1px solid black",
                backgroundColor: "white",
                zIndex: 9999,
            }}
            className={`w-full sm:w-3/4 md:w-1/2 lg:w-1/2 transition-all ${
                CartDraweOpenSignal.value ? "right-0" : "-right-full"
            }`}
        >
            <CartHeader
                onClickCloseCart={() => {
                    closeDrawer();
                }}
            />
            <div className="max-h-96 min-h-56 overflow-y-auto">
                {cartItemsSignal.value.length === 0 ? <EmptyCart /> : (
                    <ul>
                        {cartItemsSignal.value.map((item) => (
                            <CartItem
                                size={item.size}
                                id={item.id}
                                imageSrc={item.image}
                                name={item.name}
                                price={item.price}
                                quantity={item.quantity}
                                removeItem={removeItem}
                                updateQuantity={updateQuantity}
                            />
                        ))}
                    </ul>
                )}
            </div>
            <div className="mt-6 p-4 text-right">
                <CartSubTotal
                    subTotal={formatToCurrency(calculateSubTotal())}
                />
            </div>
        </div>
    );
}
