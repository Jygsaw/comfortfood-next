import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import type { PropsWithChildren, ReactNode } from "react";

const Layout = ({ children }: PropsWithChildren): ReactNode => (
    <>
        <div className="min-h-screen flex flex-col mx-20">
            <header>
                <Header />
            </header>
            <main className="flex-grow">
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    </>
);

export default Layout;
