import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import type { PropsWithChildren, ReactNode } from "react";

const Layout = ({ children }: PropsWithChildren): ReactNode => (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
);

export default Layout;
