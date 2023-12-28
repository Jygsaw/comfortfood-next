import React from "react";

import type { ReactNode } from "react";

type Input = {
    label: ReactNode,
    input: ReactNode,
    example: string,
}

const FormRow = ({ label, input, example }: Input) => {
    return (
        <div className="my-3">
            <div className="py-1 font-semibold">
                {label}
            </div>
            <div className="py-1">
                {input}
                <div className="py-1 text-sm text-gray-700">
                    Example: {example}
                </div>
            </div>
        </div>
    );
};

export default FormRow;
