import React from "react";
import { titleAppend } from "app/_lib/siteUtils";
import UnderConstruction from "app/_components/UnderConstruction";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: titleAppend("Homepage"),
};

const Page = () => {
    return (
        <>
            <section className="relative w-full h-[calc(100vh-92px)] mx-auto">
                <UnderConstruction />
            </section>
            <section className="container mx-auto flex flex-col" >
                <div>SOMETHING</div>
                <div>SOMETHING</div>
                <div>SOMETHING</div>
            </section>
        </>
    );
};

export default Page;
