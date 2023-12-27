import React from "react";
import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="flex gap-16 justify-center text-2xl font-semibold">
            <Link className="text-orange-500" href="/">Home</Link>
            <Link className="text-orange-500" href="/cookbook">Cookbook</Link>
            <Link className="text-orange-500" href="/articles">Articles</Link>
            <Link className="text-orange-500" href="/recipes">Recipes</Link>
            <Link className="text-orange-500" href="/search">Search</Link>
        </nav>
    );
};

export default NavBar;
