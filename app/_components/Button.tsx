import React from "react";
import { Button as BaseButton } from "@mui/base";

import type { ButtonProps } from "@mui/base";

const TEXT_STYLE = {
    text: "text-orange-500 font-semibold",
    outlined: "text-orange-500 font-semibold",
    contained: "text-white font-semibold"
};

const BUTTON_STYLE = {
    text: "",
    outlined: "min-w-fit w-32 h-12 px-3 rounded-lg border border-orange-500",
    contained: "min-w-fit w-32 h-12 px-3 rounded-lg bg-orange-400",
};

type Input = {
    variant?: "text" | "outlined" | "contained",
    className?: string,
} & ButtonProps;

const Button = ({ variant = "text", className = "", ...rest }: Input) => {
    const styling = [TEXT_STYLE[variant], BUTTON_STYLE[variant], className];

    return <BaseButton slotProps={{ root: { className: styling.join(" ") } }} {...rest} />;
};

export default Button;
