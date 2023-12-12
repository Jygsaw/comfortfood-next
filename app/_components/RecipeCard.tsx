import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buildPath } from "app/_lib/siteUtils";

import type { Recipe } from "app/_types/record";

const RecipeCard = ({ id, slug, name, imageLink, description }: Recipe) => {
    const href = buildPath("recipe", id, slug);

    return (
        <Link className="group w-full h-full" href={href}>
            <article className="relative w-full h-full border-2 shadow-md">
                <Image src={imageLink} alt={name} fill sizes="33vw" />
                <section className="absolute w-full h-full flex flex-col z-10 bg-gray-800 bg-opacity-0 hover:bg-opacity-80">
                    <header className="h-12" />
                    <p className="flex-grow m-3 text-white invisible group-hover:visible">
                        {description}
                    </p>
                    <footer className="flex h-16 place-items-end bg-gradient-to-t from-gray-800 to-transparent">
                        <p className="flex-grow mx-2 my-1 text-white text-lg truncate">{name}</p>
                    </footer>
                </section>
            </article>
        </Link>
    );
};

export default RecipeCard;
