import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import RadioButton from "site/components/ui/RadioButton.tsx";
import { Product, SKU } from "site/Dtos/product.ts";
import {
    AddToCartButton,
    ShareToWhatsAppButton,
} from "site/features/Product/islands.ts";
import {
    ImageMiniature,
    ProductDetails,
    SelectedImage,
} from "site/features/Product/components/index.ts";

interface ProductProps extends Product {
    selectedSku?: SKU;
    selectedImage?: string;
}

export default function Section(props: ProductProps) {
    const selectedImage = props.selectedImage ||
        props.images[0];
    return (
        <>
            <div className="container mx-auto px-4 py-6">
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
                                        typeof Section
                                    >({
                                        props: {
                                            selectedImage: image,
                                            selectedSku: props.selectedSku,
                                        },
                                    })}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <ProductDetails
                            name={props.name}
                            price={props.selectedSku?.price}
                            description={props.description}
                        />

                        <div>
                            <h3 className="text-lg font-semibold mb-2">
                                Tamanhos
                            </h3>
                            <fieldset className="flex gap-4">
                                {props.skus.map((sku) => (
                                    <div
                                        key={sku.id}
                                        className="flex items-center space-x-2"
                                    >
                                        <RadioButton
                                            RadioButtonProps={usePartialSection<
                                                typeof Section
                                            >({
                                                props: {
                                                    selectedSku: sku,
                                                    selectedImage:
                                                        props.selectedImage,
                                                },
                                            })}
                                            radioGroupName="size"
                                            radioProperty={sku.size}
                                            text={sku.size}
                                        />
                                    </div>
                                ))}
                            </fieldset>
                        </div>
                        <div className="flex items-center gap-2 w-full">
                            <AddToCartButton
                                id={props.selectedSku?.id!}
                                image={props.images[0]}
                                name={props.name}
                                price={props.selectedSku?.price!}
                                quantity={1}
                                size={props.selectedSku?.size!}
                            />
                            <ShareToWhatsAppButton />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
