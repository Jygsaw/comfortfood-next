import React from "react";
import UnderConstruction from "app/_components/UnderConstruction";
import type { dynamicRoute } from "app/_types/routing";

const Page =({ params: { id } }: dynamicRoute) => {
    console.log("fetching id:", id);
    return <UnderConstruction />;
};

export default Page;
