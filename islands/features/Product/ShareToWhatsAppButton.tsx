import Icon from "site/components/ui/Icon.tsx";

export function ShareToWhatsAppButton() {
    return (
        <a
            id="whatsapp_button"
            href={`whatsapp://send?text=${globalThis.location.href}`}
            data-action="share/whatsapp/share"
        >
            <Icon
                id="WhatsApp"
                size={24}
                className="text-[#25D366]"
            />
        </a>
    );
}
