"use client";

import React from "react";
import { signOut } from "next-auth/react";
import Button from "app/_components/Button";

type Input = {
    type?: "button" | "link",
    text?: string,
}

const LogoutControl = ({ type, text = "Logout" }: Input) => {
    const handleLogout = () => signOut();

    if (type === "link") {
        return <a className="text-blue-600 hover:underline hover:text-blue-800 visited:text-purple-600" onClick={handleLogout}>{text}</a>;
    } else {
        return <Button variant="contained" onClick={handleLogout}>{text}</Button>;
    }
};

export default LogoutControl;
