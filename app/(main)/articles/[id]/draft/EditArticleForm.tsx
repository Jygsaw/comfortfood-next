"use client";

import React, { useState } from "react";
import { updateArticleDraft } from "app/_lib/articlesAPI";

import type { ChangeEvent, FormEvent } from "react";
import type { Article } from "app/_types/record";

type Input = {
    contentId: string,
    draft: Article,
}

const EditArticleForm =({ contentId, draft }: Input) => {
    const [formData, setFormData] = useState<Partial<Article>>({
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

        updateArticleDraft(contentId, formData)
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
            <div className="text-sm text-gray-700">DEV EXAMPLE: What&apos;s the Difference Between Expiration, Best-By, Sell-By, and Use-By Dates?</div>

            <div className="flex gap-6">
                <label htmlFor="description">Description</label>
                <textarea id="description" className="w-1/2 h-48 border" name="description" value={formData.description} onChange={changeDescription} placeholder="Lorem ipsum" />
            </div>
            <div className="text-sm text-gray-700">DEV EXAMPLE: Reducing food waste is critical. Understanding expiration, sell-by, best-by, use-by, and freeze-by date labels can help you do your part, as well as save you money.</div>

            <div className="flex gap-6">
                <label htmlFor="imageLink">Image</label>
                <input id="imageLink" className="w-1/2 border" type="text" name="imageLink" value={formData.imageLink} onChange={changeImageLink} placeholder="http://example.com/image.jpg" />
            </div>
            <div className="text-sm text-gray-700">DEV EXAMPLE: https://www.simplyrecipes.com/thmb/aNnI7QfPFNrPdzU0Mbb7EcRvN4I=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Expiration-Dates-LEAD-a9c08d6e07f14ea1a80e06e1dd86cdd7.jpg</div>

            <button className="w-40 h-12 my-4 bg-blue-300 rounded" type="submit">
                Save changes
            </button>

            <pre>{JSON.stringify(formData, null, 4)}</pre>
        </form>
    );
};

export default EditArticleForm;
