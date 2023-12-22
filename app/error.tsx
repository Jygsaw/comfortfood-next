"use client";

import React, { useEffect } from "react";
import Image from "next/image";

const IMAGE_LINK = "https://st5.depositphotos.com/70183936/64515/v/450/depositphotos_645153956-stock-illustration-error-creative-icons-desig.jpg";

type Input = {
    error: Error & { digest?: string },
    reset: () => void,
};

const Error = ({ error }: Input) => {
    useEffect(() => {
        // TODO: Log the error to an error reporting service
    }, [error]);

    return (
        <>
            <div className="relative w-1/2 aspect-[1.5] mx-auto my-24">
                <Image src={IMAGE_LINK} alt="" fill sizes="33vw" style={{ objectFit: "contain" }} />
            </div>
        </>
    );
};

export default Error;
