import React from "react";
import Link from "next/link";
import NavBar from "components/NavBar";
import AccountControls from "components/AccountControls";

const Header = () => {
    return (
        <div className="flex">
            <div>
                <Link href="/">Vizro</Link>
            </div>
            <div className="flex-grow">
                <NavBar />
            </div>
            <div>
                <AccountControls />
            </div>
        </div>
    );
};

export default Header;
