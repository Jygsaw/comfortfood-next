import React from "react";
import Header from "app/_components/Header";
import Footer from "app/_components/Footer";
import type { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="min-h-screen flex flex-col">
            <header>
                <Header />
            </header>
            <main className="relative container mx-auto flex-grow">
                {children}
            </main>
            <footer className="container mx-auto">
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
