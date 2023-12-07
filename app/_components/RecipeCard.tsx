import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Recipe } from "app/_types/recipe";

const RecipeCard = ({ id, slug, name, image, description, likes, bookmarked }: Recipe) => {
    const href = `recipe/${id}/${slug}`;

    return (
        <article className="relative w-full h-full border-2 shadow-md">
            <Link className="group" href={href}>
                <Image src={image} alt={name} fill />
                <section className="absolute w-full h-full flex flex-col z-10 bg-gray-800 bg-opacity-0 hover:bg-opacity-80">
                    <header className="h-12">
                        {bookmarked && <span className="absolute top-0 right-0">BKMRK</span>}
                    </header>
                    <p className="flex-grow m-3 text-white invisible group-hover:visible">
                        {description}
                    </p>
                    <footer className="flex h-16 place-items-end bg-gradient-to-t from-gray-800 to-transparent">
                        <p className="flex-grow mx-2 my-1 text-white text-lg truncate">{name}</p>
                        <span className="mx-2 my-1 text-white text-lg">LIKE:{likes}</span>
                    </footer>
                </section>
            </Link>
        </article>
    );
};

export default RecipeCard;