import React from "react";
import type { dynamicRoute } from "types/routing";

const Page =({ params: { id } }: dynamicRoute) => {
    console.log("fetching id:", id);
    return (
        <>
            Amazing recipe for delicious food
        </>
    );

};

export default Page;
