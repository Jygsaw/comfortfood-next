import React from "react";
import Card from "app/_components/Card";
import Link from "next/link";
import type { CardData } from "app/_types/card";

type Input = {
    title: string,
    link: string,
    cardData: CardData[],
}

const Teaser = ({ title, link, cardData }: Input) => {
    return (
        <section className="container mx-auto">
            <header className="m-4 text-center text-3xl">
                <Link href={link}>{title}</Link>
            </header>
            <div className="w-full grid grid-cols-3 gap-10 justify-items-center">
                {cardData.map(data => (
                    <Card key={data.id} {...data} />
                ))}
            </div>
        </section>
    );
};

export default Teaser;
