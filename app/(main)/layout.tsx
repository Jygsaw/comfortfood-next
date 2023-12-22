import React from "react";
import type { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="container mx-auto">
            {children}
        </div>
    );
};

export default Layout;
