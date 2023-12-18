"use client";

import React, { useEffect } from "react";
import Image from "next/image";

const IMAGE_LINK = "https://st5.depositphotos.com/70183936/64515/v/450/depositphotos_645153956-stock-illustration-error-creative-icons-desig.jpg";

type Input = {
    error: Error & { digest?: string },
    reset: () => void,
};

const GlobalError = ({ error }: Input) => {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <html>
            <body>
                <div className="relative w-1/2 aspect-[1.5] mx-auto my-24">
                    <Image src={IMAGE_LINK} alt="" fill sizes="33vw" style={{ objectFit: "contain" }} />
                </div>
            </body>
        </html>
    );
};

export default GlobalError;
