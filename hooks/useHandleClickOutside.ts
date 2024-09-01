import { RefObject } from "preact";
import { useEffect } from "preact/hooks";

interface UseHandleClickOutsideArgs {
    ref: RefObject<HTMLElement>;
    onClickOutside: () => void;
}
export function useHandleClickOutside(args: UseHandleClickOutsideArgs) {
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                args.ref.current &&
                !args.ref.current.contains(event.target as Node)
            ) {
                args.onClickOutside();
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);
}
