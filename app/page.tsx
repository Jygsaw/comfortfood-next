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
        <div>
            <Link href="/article/1/interesting-article">article with id and slug</Link>
        </div>
        <div>
            <Link href="/article/1">article with only id</Link>
        </div>
    </>
);

export default Page;
