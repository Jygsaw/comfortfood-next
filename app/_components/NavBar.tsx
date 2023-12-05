import React from "react";
import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="flex gap-16 justify-center text-white text-2xl font-semibold">
            <Link href="/">Home</Link>
            <Link href="/cookbook">Cookbook</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/recipes">Recipes</Link>
            <Link href="/search">Search</Link>
        </nav>
    );
};

export default NavBar;
