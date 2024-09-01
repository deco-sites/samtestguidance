import Image from "apps/website/components/Image.tsx";
import { JSX } from "preact";

interface SelectedImageProps {
    image: string;
    alt: string;
}
export function SelectedImage(props: SelectedImageProps) {
    return (
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <Image
                id="selectedImage"
                height={100}
                width={30}
                src={props.image}
                alt={props.alt}
                className="h-full w-full object-cover object-center"
            />
        </div>
    );
}

interface ImageMiniatureProps {
    image: string;
    alt: string;
    selectedImage?: string;
    ButtonProps?: JSX.IntrinsicElements["button"];
}
export function ImageMiniature(props: ImageMiniatureProps) {
    return (
        <button
            {...props.ButtonProps}
            className={`aspect-square overflow-hidden border-2 rounded-lg bg-gray-100 ${
                props.selectedImage === props.image &&
                "border-secondary"
            }`}
        >
            <Image
                width={30}
                height={100}
                src={props.image}
                alt={props.alt}
                className="h-full w-full object-cover object-center"
            />
        </button>
    );
}
