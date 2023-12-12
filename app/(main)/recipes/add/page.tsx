"use client";

// TODO: deprecate and split into create action and "edit" page

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { RECIPE_DEFAULTS } from "app/_lib/constants";
import { createRecipe } from "app/_lib/recipesAPI";
import { buildPath } from "app/_lib/siteUtils";

import type { ChangeEvent, FormEvent } from "react";
import type { Recipe } from "app/_types/record";

const Page = () => {
    const router = useRouter();
    const [recipe, setRecipe] = useState<Recipe>(RECIPE_DEFAULTS);
    const [status, setStatus] = useState("");

    const validate = (recipe: Recipe) => !!recipe.name && !!recipe.description;

    const changeName = (event: ChangeEvent<HTMLInputElement>) =>
        setRecipe(prev => ({ ...prev, name: event.target.value }));

    const changeDescription = (event: ChangeEvent<HTMLTextAreaElement>) =>
        setRecipe(prev => ({ ...prev, description: event.target.value }));

    const changeImageLink = (event: ChangeEvent<HTMLInputElement>) =>
        setRecipe(prev => ({ ...prev, imageLink: event.target.value }));

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (validate(recipe)) {
            createRecipe(recipe)
                .then((recipe) => {
                    router.push(buildPath(recipe.type, recipe.id, recipe.slug));
                })
                .catch((error: Error) => setStatus(error.message));
        } else {
            setStatus("Errors detected");
        }
    };

    return (
        <form className="container flex flex-col gap-6" onSubmit={onSubmit}>
            <h1 className="text-red-500 text-xl">{status}</h1>

            <div className="flex gap-6">
                <label htmlFor="name">Name</label>
                <input id="name" className="border" type="text" name="name" value={recipe.name} onChange={changeName} placeholder="Pumpkin pie" />
            </div>

            <div className="flex gap-6">
                <label htmlFor="description">Description</label>
                <textarea id="description" className="border" name="description" value={recipe.description} onChange={changeDescription} placeholder="Lorem ipsum" />
            </div>

            <div className="flex gap-6">
                <label htmlFor="imageLink">Image</label>
                <input id="imageLink" className="border" type="text" name="imageLink" value={recipe.imageLink} onChange={changeImageLink} placeholder="http://example.com/image.jpg" />
            </div>

            <input className="border" type="submit" value="Add" />
        </form>
    );
};

export default Page;
