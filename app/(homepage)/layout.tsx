import React from "react";
import Header from "app/_components/Header";
import Footer from "app/_components/Footer";
import type { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="border-b border-slate-500">
                <Header />
            </header>
            <main className="relative w-screen flex-grow">
                {children}
            </main>
            <footer className="border-t border-slate-500">
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
