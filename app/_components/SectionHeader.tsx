import React from "react";
import Image from "next/image";
import Link from "next/link";

import type { ReactNode } from "react";

type Input = {
    title: string,
    link?: string,
    bannerLink?: string,
    banner?: ReactNode,
}

const SectionHeader = ({ title, link, bannerLink, banner }: Input) => {
    return (
        <header>
            {bannerLink ? (
                <div className="relative w-full h-24">
                    <Image src={bannerLink} alt="" fill style={{ objectFit: "cover" }}/>
                </div>
            ) : banner}
            <div className="m-4 text-3xl text-center">
                {link ? <Link href={link}>{title}</Link> : title}
            </div>
        </header>
    );
};

export default SectionHeader;
