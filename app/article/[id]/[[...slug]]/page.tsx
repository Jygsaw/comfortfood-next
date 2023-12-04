import React from "react";
import UnderConstruction from "components/UnderConstruction";
import type { dynamicRoute } from "types/routing";

const Page = ({ params: { id } }: dynamicRoute) => {
    console.log("fetching id:", id);
    return <UnderConstruction />;
};

export default Page;
