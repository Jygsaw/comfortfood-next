import React from "react";
import Link from "next/link";
import UserControls from "app/_components/UserControls";
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
                <UserControls />
            </div>
        </div>
    );
};

export default Header;
