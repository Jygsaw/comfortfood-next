"use client";

import React from "react";
import { signIn } from "next-auth/react";

type Input = {
    type?: "button" | "link",
    text?: string,
}

const LoginControl = ({ type, text = "Login" }: Input) => {
    const handleLogin = () => signIn();

    if (type === "link") {
        return <a className="text-blue-600 hover:underline hover:text-blue-800 visited:text-purple-600" onClick={handleLogin}>{text}</a>;
    } else {
        return <button className="p-1 rounded bg-orange-300" onClick={handleLogin}>{text}</button>;
    }
};

export default LoginControl;
