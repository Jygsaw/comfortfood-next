import React from 'react';
import { titleAppend } from 'lib/seoUtils';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: titleAppend('About Us'),
};

const Page = () => (
    <>
        This is the about page.
    </>
);

export default Page;
