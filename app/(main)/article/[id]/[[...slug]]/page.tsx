import React from "react";
import UnderConstruction from "app/_components/UnderConstruction";

import type { DynamicRoute } from "app/_types/next";

const Page = ({ params: { id } }: DynamicRoute) => {
    console.log("fetching id:", id);
    return <UnderConstruction />;
};

export default Page;
