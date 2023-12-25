"use client";

import React, { useState } from "react";
import { updateRecipeDraft } from "app/_lib/recipesAPI";

import type { ChangeEvent, FormEvent } from "react";
import type { Recipe } from "app/_types/record";

type Input = {
    contentId: string,
    draft: Recipe,
}

const EditRecipeForm =({ contentId, draft }: Input) => {
    const [formData, setFormData] = useState<Partial<Recipe>>({
        name: draft.name ?? "",
        description: draft.description ?? "",
        imageLink: draft.imageLink ?? "",
    });
    const [status, setStatus] = useState("");

    const changeName = (event: ChangeEvent<HTMLInputElement>) =>
        setFormData(prev => ({ ...prev, name: event.target.value }));

    const changeDescription = (event: ChangeEvent<HTMLTextAreaElement>) =>
        setFormData(prev => ({ ...prev, description: event.target.value }));

    const changeImageLink = (event: ChangeEvent<HTMLInputElement>) =>
        setFormData(prev => ({ ...prev, imageLink: event.target.value }));

    const handleSave = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        updateRecipeDraft(contentId, formData)
            .then(() => setStatus(""))
            .catch((error: Error) => setStatus(error.message));
    };

    return (
        <form className="container flex flex-col gap-6" onSubmit={handleSave}>
            <h1 className="text-red-500 text-xl">{status}</h1>

            <div className="flex gap-6">
                <label htmlFor="name">Name</label>
                <input id="name" className="w-1/2 border" type="text" name="name" value={formData.name} onChange={changeName} placeholder="Pumpkin pie" />
            </div>
            <div className="text-sm text-gray-700">DEV EXAMPLE: Lorem ipsum dolor sit amet</div>

            <div className="flex gap-6">
                <label htmlFor="description">Description</label>
                <textarea id="description" className="w-1/2 border" name="description" value={formData.description} onChange={changeDescription} placeholder="Lorem ipsum" />
            </div>
            <div className="text-sm text-gray-700">DEV EXAMPLE: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

            <div className="flex gap-6">
                <label htmlFor="imageLink">Image</label>
                <input id="imageLink" className="w-1/2 border" type="text" name="imageLink" value={formData.imageLink} onChange={changeImageLink} placeholder="http://example.com/image.jpg" />
            </div>
            <div className="text-sm text-gray-700">DEV EXAMPLE: https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_59565821-77e2-437c-9113-cdf304316dd4.jpg</div>

            <button className="w-40 h-12 my-4 bg-blue-300 rounded" type="submit">
                Save changes
            </button>

            <pre>{JSON.stringify(formData, null, 4)}</pre>
        </form>
    );
};

export default EditRecipeForm;
