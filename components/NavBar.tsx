import React from "react";
import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="flex gap-16 justify-center text-white text-2xl font-semibold">
            <div><Link href="/">Home</Link></div>
            <div><Link href="/cookbook">Cookbook</Link></div>
            <div><Link href="/articles">Articles</Link></div>
            <div><Link href="/recipes">Recipes</Link></div>
            <div><Link href="/search">Search</Link></div>
        </nav>
    );
};

export default NavBar;
