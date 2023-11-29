import React from 'react';
import { titleAppend } from 'lib/seoUtils';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: titleAppend('Homepage'),
};

const Page = () => (
    <>
        Hello, Homepage.
    </>
);

export default Page;
