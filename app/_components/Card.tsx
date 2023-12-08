import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buildPath } from "app/_lib/siteUtils";
import type { CardData } from "app/_types/card";

const Card = ({ type, id, slug, name, imageLink, bookmarked }: CardData) => {
    const href = buildPath(type, id, slug);

    return (
        <Link className="w-full h-full" href={href}>
            <article className="w-full h-full flex flex-col bg-white hover:shadow-md">
                <div className="relative w-full h-64 mx-auto">
                    {bookmarked && <span className="absolute top-0 right-0 z-10">BKMRK</span>}
                    <Image src={imageLink} alt={name} fill style={{ objectFit: "contain" }} />
                </div>
                <p className="mx-2 my-1 flex-grow text-lg">
                    {name}
                </p>
                <div className="mx-2 my-1 grid grid-cols-3">
                    <span className="justify-self-start">LEVEL</span>
                    <span className="justify-self-center">TIME</span>
                    <span className="justify-self-end">RATING</span>
                </div>
            </article>
        </Link>
    );
};

export default Card;
