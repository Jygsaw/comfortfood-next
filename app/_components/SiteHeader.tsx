import React from "react";
import Link from "next/link";
import AccountControls from "app/_components/AccountControls";
import Logo from "app/_components/Logo";
import NavBar from "app/_components/NavBar";

const Header = () => {
    return (
        <div className="h-full px-5 py-3 bg-white flex gap-7 items-center">
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
