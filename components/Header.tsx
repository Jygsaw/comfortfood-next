import React from "react";
import Link from "next/link";
import AccountControls from "components/AccountControls";
import Logo from "components/Logo";
import NavBar from "components/NavBar";

const Header = () => {
    return (
        <div className="bg-slate-500 min-h-24 px-5 py-3 flex gap-7 items-center">
            <div className="w-48 min-w-fit">
                <Link href="/"><Logo /></Link>
            </div>
            <div className="flex-grow">
                <NavBar />
            </div>
            <div className="w-48 min-w-fit">
                <AccountControls />
            </div>
        </div>
    );
};

export default Header;
