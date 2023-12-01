import React from "react";
import Link from "next/link";

const AccountControls = () => {
    const isLoggedIn = false;

    return (
        <div className="flex gap-5 justify-end text-white text-xl font-semibold">
            {isLoggedIn && <Link href="/profile">Profile</Link>}
            {isLoggedIn && <Link href="/logout">Logout</Link>}
            {!isLoggedIn && <Link href="/login">Login</Link>}
        </div>
    );
};

export default AccountControls;
