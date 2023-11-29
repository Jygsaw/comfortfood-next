import React from 'react';
import type { dynamicRoute } from 'types/routing';

const Page = ({ params: { id, slug }  }: dynamicRoute) => (
    <>
        Interesting article about a recipe
    </>
);

export default Page;
