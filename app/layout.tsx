import React, { type PropsWithChildren } from "react";
import Layout from "components/Layout";
import "./globals.css";

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="en">
        <head />
        <body>
            <Layout>
                {children}
            </Layout>
        </body>
    </html>
);

export default RootLayout;
