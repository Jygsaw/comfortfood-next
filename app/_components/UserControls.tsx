import React from "react";
import Link from "next/link";
import { getAuth } from "app/_lib/auth";
import LoginControl from "app/_components/LoginControl";
import LogoutControl from "app/_components/LogoutControl";

const AccountControls = async () => {
    const session = await getAuth();

    return (
        <nav className="flex gap-5 justify-end items-center text-xl font-semibold">
            {!!session && <Link href="/profile">Profile</Link>}
            {!!session && <LogoutControl />}
            {!session && <LoginControl />}
        </nav>
    );
};

export default AccountControls;
