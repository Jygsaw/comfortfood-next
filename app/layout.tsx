import React from "react";
import Layout from "components/Layout";
import "./globals.css";
import type { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="en">
        <body>
            <Layout>
                {children}
            </Layout>
        </body>
    </html>
);

export default RootLayout;
