import React from "react";
import NextAuthProvider from "app/_components/NextAuthProvider";
import "./globals.css";

import type { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="en">
        <body className="overflow-y-scroll">
            <NextAuthProvider>
                {children}
            </NextAuthProvider>
        </body>
    </html>
);

export default RootLayout;
