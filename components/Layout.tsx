import React, { type PropsWithChildren, type ReactNode } from "react";
import Header from "components/Header";
import Footer from "components/Footer";

const Layout = ({ children }: PropsWithChildren): ReactNode => (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
);

export default Layout;
