import Icon from "site/components/ui/Icon.tsx";

interface CartContainerProps {
    onClickCloseCart: () => void;
}

export function CartHeader(props: CartContainerProps) {
    return (
        <div>
            <div className="bg-primary flex items-center justify-between p-4">
                <button
                    onClick={() => {
                        props.onClickCloseCart();
                    }}
                >
                    <Icon
                        id="ChevronRight"
                        size={22}
                        className="text-neutral text-bold"
                    />
                </button>
                <p className="text-neutral">Carrinho</p>
            </div>
        </div>
    );
}
