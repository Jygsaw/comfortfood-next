import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buildPath } from "app/_lib/siteUtils";
import { PATH_TYPES } from "app/_lib/constants";

import type { UserContent } from "app/_types/record";

type Input = {
    data: UserContent,
}

const Card = ({ data }: Input) => {
    const href = data.draftOf === null
        ? buildPath(PATH_TYPES[data.type], data.contentId, data.slug)
        : buildPath(PATH_TYPES[`${data.type}Draft`], data.draftOf);

    return (
        <Link className="w-full h-full" href={href}>
            <article className="w-full h-full flex flex-col bg-white hover:shadow-md">
                <div className="relative w-full aspect-[1.5]">
                    <Image src={data.imageLink} alt="" fill sizes="33vw" style={{ objectFit: "cover" }} />
                </div>
                <p className="mx-2 my-1 flex-grow text-lg">
                    {data.name}
                </p>
                <div className="mx-2 my-1 flex justify-between">
                    <span>{"time" in data && !!data.time && `Time: ${data.time}`}</span>
                    <span>{"rating" in data && !!data.rating && `Rating: ${data.rating}`}</span>
                </div>
            </article>
        </Link>
    );
};

export default Card;
