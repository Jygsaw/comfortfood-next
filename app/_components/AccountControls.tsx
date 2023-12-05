import React from "react";
import Link from "next/link";

const AccountControls = () => {
    const isLoggedIn = false;

    return (
        <nav className="flex gap-5 justify-end text-xl font-semibold">
            {isLoggedIn && <Link href="/profile">Profile</Link>}
            {isLoggedIn && <Link href="/logout">Logout</Link>}
            {!isLoggedIn && <Link href="/login">Login</Link>}
        </nav>
    );
};

export default AccountControls;
