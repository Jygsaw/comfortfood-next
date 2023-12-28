import React from "react";
import Link from "next/link";
import Image from "app/_components/Image";

import type { ReactNode } from "react";

type Input = {
    title: string,
    link?: string,
    bannerLink?: string,
    banner?: ReactNode,
    preTitle?: ReactNode,
    postTitle?: ReactNode,
}

const SectionHeader = ({ title, link, bannerLink, banner, preTitle, postTitle }: Input) => {
    return (
        <header>
            {bannerLink ? (
                <div className="relative w-full h-24">
                    <Image src={bannerLink} alt="" priority fill style={{ objectFit: "cover" }}/>
                </div>
            ) : banner}
            <div className="m-4 grid grid-cols-3 items-center">
                <div className="justify-self-start">{preTitle}</div>
                <div className="justify-self-center text-3xl">
                    {link ? <Link href={link}>{title}</Link> : title}
                </div>
                <div className="justify-self-end">{postTitle}</div>
            </div>
        </header>
    );
};

export default SectionHeader;
