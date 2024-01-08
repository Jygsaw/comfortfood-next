import React from "react";
import { Spinner } from "@nextui-org/react";

const Loading = () => {
    return (
        <div className="w-full h-full grid place-content-center">
            <Spinner size="lg" />
        </div>
    );
};

export default Loading;
