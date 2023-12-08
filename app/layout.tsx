import React from "react";
import "./globals.css";
import type { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="en">
        <body className="overflow-y-scroll">
            {children}
        </body>
    </html>
);

export default RootLayout;
