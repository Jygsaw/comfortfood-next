import React, { type PropsWithChildren, type ReactNode } from 'react';
import Footer from 'components/Footer';

const Layout = ({ children }: PropsWithChildren): ReactNode => (
    <>
        <main>{children}</main>
        <Footer />
    </>
);

export default Layout;
