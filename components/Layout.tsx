import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import type { PropsWithChildren, ReactNode } from "react";

const Layout = ({ children }: PropsWithChildren): ReactNode => (
    <>
        <div className="container max-w-screen-7xl min-h-screen mx-auto flex flex-col">
            <header>
                <Header />
            </header>
            <main className="relative flex-grow">
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    </>
);

export default Layout;
