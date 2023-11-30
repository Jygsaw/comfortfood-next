import React from "react";
import Link from "next/link";
import NavBar from "components/NavBar";

const Header = () => {
    return (
        <div className="flex">
            <div className="w-100 font-bold">
                <Link href="/">Vizro</Link>
            </div>
            <div className="flex-grow">
                <NavBar />
            </div>
            <div className="text-slate-800">
                LOGIN
            </div>
        </div>
    );
};

export default Header;
