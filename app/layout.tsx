import React from "react";
import SiteHeader from "app/_components/SiteHeader";
import SiteFooter from "app/_components/SiteFooter";
import "./globals.css";

import type { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="en">
        <body className="overflow-y-scroll">
            <div className="min-h-screen flex flex-col">
                <header className="sticky top-0 h-24 z-30 border-b border-slate-500">
                    <SiteHeader />
                </header>
                <main className="w-full flex-grow">
                    {children}
                </main>
                <footer className="border-t border-slate-500">
                    <SiteFooter />
                </footer>
            </div>
        </body>
    </html>
);

export default RootLayout;
