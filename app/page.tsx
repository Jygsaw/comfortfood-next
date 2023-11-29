import React from 'react';
import Link from 'next/link';
import { titleAppend } from 'lib/seoUtils';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: titleAppend('Homepage'),
};

const Page = () => (
    <>
        Hello, Homepage.
        <div>
            <Link href="/search">Search for recipes</Link>
        </div>
    </>
);

export default Page;
