"use client";

import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const AccountControls = () => {
    const { status } = useSession();
    const isLoggedIn = status === "authenticated";

    const handleLogout = () => signOut();
    const handleLogin = () => signIn();

    return (
        <nav className="flex gap-5 justify-end items-center text-xl font-semibold">
            {isLoggedIn && <Link href="/profile">Profile</Link>}
            {isLoggedIn && <button className="p-1 rounded bg-orange-300" onClick={handleLogout}>Logout</button>}
            {!isLoggedIn && <button className="p-1 rounded bg-orange-300" onClick={handleLogin}>Login</button>}
        </nav>
    );
};

export default AccountControls;
