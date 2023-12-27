import React from "react";
import Image from "next/image";

import type { ImageProps } from "next/image";

const BLUR_DATA_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8PclmOwAG2wKCfrZQGwAAAABJRU5ErkJggg==";

const BlurredImage = (props: ImageProps) => {
    /* disable jsx-a11y/alt-text because eslint generating false positive */
    // eslint-disable-next-line jsx-a11y/alt-text
    return <Image placeholder="blur" blurDataURL={BLUR_DATA_URL} {...props} />;
};

export default BlurredImage;
