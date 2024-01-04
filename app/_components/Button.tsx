import React from "react";
import { Button as BaseButton } from "@nextui-org/react";

import type { ButtonProps } from "@nextui-org/react";

const Button = ({ className, ...rest }: ButtonProps) => {
    return (
        <BaseButton
            className={`font-semibold ${className}`}
            {...rest}
        />
    );
};

export default Button;
