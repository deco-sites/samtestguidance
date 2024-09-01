import { useEffect, useRef, useState } from "preact/hooks";
import Icon from "site/components/ui/Icon.tsx";
import { JSX } from "preact";
import { links } from "site/features/Header/links.ts";

const DrawerLink = (props: JSX.IntrinsicElements["a"] & { key: string }) => {
    return (
        <a
            {...props}
            className="block py-2 px-4 text-gray-800 hover:bg-gray-100 rounded-md"
        >
            {props.children}
        </a>
    );
};

export function MobileDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    const drawerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                drawerRef.current &&
                !drawerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <div className="relative md:hidden">
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out"
                    aria-hidden="true"
                />
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1 rounded-md bg-primary shadow-md"
                aria-label="Toggle drawer"
            >
                {isOpen
                    ? <Icon id="XMark" size={22} className="text-neutral" />
                    : <Icon id="Bars3" size={22} className="text-neutral" />}
            </button>

            <div
                ref={drawerRef}
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4">Menu</h2>
                    <nav>
                        <ul className="space-y-2">
                            {links.map((link) => {
                                return <DrawerLink {...link} />;
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
