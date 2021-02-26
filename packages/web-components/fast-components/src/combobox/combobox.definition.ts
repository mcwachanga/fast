import { WebComponentDefinition } from "@microsoft/fast-tooling/dist/esm/data-utilities/web-component";
import { DataType } from "@microsoft/fast-tooling";
import { SelectPosition } from "@microsoft/fast-foundation/dist/esm/select/select.options";

export const fastComboboxDefinition: WebComponentDefinition = {
    version: 1,
    tags: [
        {
            name: "fast-combobox",
            title: "Combobox",
            description: "The FAST combobox element",
            attributes: [
                {
                    name: "disabled",
                    description: "Sets the disabled state of the combobox",
                    type: DataType.boolean,
                    default: false,
                    required: false,
                },
                {
                    name: "name",
                    description:
                        "This element's value will be surfaced during form submission under the provided name",
                    type: DataType.string,
                    default: "",
                    required: false,
                },
                {
                    name: "position",
                    description: "Controls the placement of the combobox dropdown",
                    default: undefined,
                    required: false,
                    type: DataType.string,
                    values: Object.keys(SelectPosition).map(x => ({ name: x })),
                },
                {
                    name: "value",
                    title: "Value",
                    description: "The initial value of the combobox",
                    default: undefined,
                    required: false,
                    type: DataType.string,
                },
            ],
            slots: [
                {
                    name: "",
                    title: "Default slot",
                    description:
                        "Supports fast-option, option elements, or elements with a role of option",
                },
                {
                    name: "control",
                    title: "Input Control slot",
                    description: "Slot to replace the contents of the control container",
                },
                {
                    name: "indicator",
                    title: "Indicator slot",
                    description:
                        "Slot to provide a custom icon to represent the visual indicator",
                },
                {
                    name: "start",
                    title: "Start slot",
                    description:
                        "Contents of the start slot are positioned before the contents of the control container",
                },
                {
                    name: "end",
                    title: "End slot",
                    description:
                        "Contents of the end slot are positioned after the contents of the control container",
                },
            ],
        },
    ],
};
