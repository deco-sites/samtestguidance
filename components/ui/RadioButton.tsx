import { JSX } from "preact";

export interface RadioButtonProps {
    radioGroupName: string;
    radioProperty: string;
    text: string;
    RadioButtonProps?: JSX.IntrinsicElements["button"];
}

export default function RadioButton(props: RadioButtonProps) {
    return (
        <button {...props?.RadioButtonProps}>
            <input
                type="radio"
                htmlFor={props.radioProperty}
                value={props.radioProperty}
                id={props.radioProperty}
                name={props.radioGroupName}
                className="peer hidden"
            />

            <label
                className="border-2 rounded peer-checked:border-secondary px-2 py-2 cursor-pointer"
                for={props.radioProperty}
            >
                {props.radioProperty}
            </label>
        </button>
    );
}
