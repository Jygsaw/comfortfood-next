"use client";

import React from "react";
import { signIn } from "next-auth/react";
import Button from "app/_components/Button";

type Input = {
    type?: "button" | "link",
    text?: string,
}

const LoginControl = ({ type, text = "Login" }: Input) => {
    const handleLogin = () => signIn();

    if (type === "link") {
        return <a className="text-blue-600" onClick={handleLogin}>{text}</a>;
    } else {
        return <Button variant="contained" onClick={handleLogin}>{text}</Button>;
    }
};

export default LoginControl;
