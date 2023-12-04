import React from "react";
import "./globals.css";
import type { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="en">
        <body>
            {children}
        </body>
    </html>
);

export default RootLayout;
