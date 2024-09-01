import {
    CartDrawerOpenCloseHandler,
    CartItemStateManager,
} from "./signals.ts";
import { formatToCurrency } from "site/utils/currency.ts";
import {
    CartHeader,
    CartItem,
    CartSubTotal,
    EmptyCart,
} from "site/features/Cart/components/index.ts";

const { removeItem, calculateSubTotal, updateQuantity, cartItemsSignal } =
    CartItemStateManager;

const { closeDrawer, CartDraweOpenSignal } = CartDrawerOpenCloseHandler;

export function Cart() {
    return (
        <div
            className={`rounded overflow-hidden bg-neutral top-[77px] fixed w-full sm:w-3/4 md:w-1/2 lg:w-1/2 transition-all ${
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
