import React from "react";
import Image from "app/_components/Image";

const IMAGE_LINK = "https://static.vecteezy.com/system/resources/previews/008/382/506/original/404-error-page-with-explorer-man-illustration-on-white-background-vector.jpg";

const Page = () => {
    return (
        <div className="relative w-3/4 aspect-[1.5] mx-auto my-12">
            <Image src={IMAGE_LINK} alt="" fill sizes="33vw" style={{ objectFit: "contain" }} />
        </div>
    );
};

export default Page;
