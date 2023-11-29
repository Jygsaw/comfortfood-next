import React from "react";
import Link from 'next/link';

type Input = {
    id: string,
    slug?: string,
}

const RecipeCard = ({ id, slug }: Input) => {
    const href = `recipe/${id}/${slug}`;
    return (
        <div>
            <Link href={href}>
                RecipeCard
            </Link>
        </div>
    );
};

export default RecipeCard;
