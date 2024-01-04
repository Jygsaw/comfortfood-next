import React from "react";
import Providers from "app/providers";
import SiteHeader from "app/_components/SiteHeader";
import SiteFooter from "app/_components/SiteFooter";
import "./globals.css";

import type { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="en" className="light">
        <body className="overflow-y-scroll">
            <Providers>
                <div className="min-h-screen flex flex-col light text-foreground bg-background">
                    <header className="sticky top-0 h-24 z-30 border-b border-slate-500">
                        <SiteHeader />
                    </header>
                    <main className="w-full basis-0 flex-grow">
                        {children}
                    </main>
                    <footer className="my-4 border-t border-slate-500">
                        <SiteFooter />
                    </footer>
                </div>
            </Providers>
        </body>
    </html>
);

export default RootLayout;
