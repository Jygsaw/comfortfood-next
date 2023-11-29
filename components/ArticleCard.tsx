import React from "react";
import Link from 'next/link';

type Input = {
    id: string,
    slug?: string,
}

const ArticleCard = ({ id, slug }: Input) => {
    const href = `article/${id}/${slug}`;
    return (
        <div>
            <Link href={href}>
                ArticleCard
            </Link>
        </div>
    );
};

export default ArticleCard;
