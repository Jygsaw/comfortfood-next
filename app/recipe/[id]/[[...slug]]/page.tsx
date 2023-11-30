import React from "react";
import type { dynamicRoute } from "types/routing";

const Page =({ params: { id, slug } }: dynamicRoute) => (
    <>
        Amazing recipe for delicious food
    </>
);

export default Page;
