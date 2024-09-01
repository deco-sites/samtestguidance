import Icon from "site/components/ui/Icon.tsx";
import ProductDetails from "site/features/Product/components/Details.tsx";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import {
    ImageMiniature,
    SelectedImage,
} from "../features/Product/components/Images.tsx";
import { useScript } from "deco/hooks/useScript.ts";
import RadioButton from "site/components/ui/RadioButton.tsx";
import AddToCartButton from "site/islands/features/Product/AddToCartButton.tsx";

interface ProductProps {
    name: string;
    price: number;
    description: string;
    sizes: string[];
    images: string[];
    selectedImage?: string;
    selectedSize?: string;
}

const AddUrlWhatsApp = () => {
    (document.getElementById("whatsapp_button") as HTMLAnchorElement).href =
        `whatsapp://send?text=${globalThis.location.href}`;
};

export default function Product(props: ProductProps) {
    const selectedImage = props.selectedImage ||
        props.images[0];
    return (
        <>
            <div className="container mx-auto p-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <SelectedImage
                            alt={props.name}
                            image={selectedImage}
                        />
                        <div className="grid grid-cols-4 gap-4">
                            {props.images.map((image, index) => (
                                <ImageMiniature
                                    alt={`${props.name} thumbnail ${index + 1}`}
                                    image={image}
                                    selectedImage={selectedImage}
                                    ButtonProps={usePartialSection<
                                        typeof Product
                                    >({
                                        props: {
                                            selectedImage: image,
                                            selectedSize: props.selectedSize,
                                        },
                                    })}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <ProductDetails
                            name={props.name}
                            price={props.price}
                            description={props.description}
                        />

                        <div>
                            <h3 className="text-lg font-semibold mb-2">
                                Tamanhos
                            </h3>
                            <fieldset className="flex gap-4">
                                {props.sizes.map((size) => (
                                    <div
                                        key={size}
                                        className="flex items-center space-x-2"
                                    >
                                        <RadioButton
                                            RadioButtonProps={usePartialSection<
                                                typeof Product
                                            >({
                                                props: {
                                                    selectedSize: size,
                                                    selectedImage:
                                                        props.selectedImage,
                                                },
                                            })}
                                            radioGroupName="size"
                                            radioProperty={size}
                                            text={size}
                                        />
                                    </div>
                                ))}
                            </fieldset>
                        </div>
                        <div className="flex items-center gap-2 w-full">
                            {
                                /* <button
                                className="btn btn-sm btn-secondary"
                                disabled={!props.selectedSize}
                            >
                                Adicionar ao Carrinho
                            </button> */
                            }
                            <AddToCartButton
                                selectedSize={props.selectedSize}
                                Product={{
                                    id: 111,
                                    image: props.images[0],
                                    name: props.name,
                                    price: props.price,
                                    quantity: 1,
                                }}
                            />
                            <a
                                id="whatsapp_button"
                                href="#"
                                data-action="share/whatsapp/share"
                            >
                                <Icon
                                    id="WhatsApp"
                                    size={24}
                                    className="text-[#25D366]"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <script
                type="module"
                dangerouslySetInnerHTML={{ __html: useScript(AddUrlWhatsApp) }}
            />
        </>
    );
}
