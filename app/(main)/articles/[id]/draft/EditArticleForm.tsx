"use client";

import React, { useState } from "react";
import { updateArticleDraft } from "app/_lib/articlesAPI";

import type { ChangeEvent, FormEvent } from "react";
import type { ArticleDraft } from "app/_types/record";

type Input = {
    contentId: string,
    draft: ArticleDraft,
}

const EditArticleForm =({ contentId, draft }: Input) => {
    const [formData, setFormData] = useState<Partial<ArticleDraft>>({
        name: draft.name,
        description: draft.description,
        imageLink: draft.imageLink,
    });
    const [status, setStatus] = useState("");

    const validate = (formData: Partial<ArticleDraft>) => !!formData.name && !!formData.description;

    const changeName = (event: ChangeEvent<HTMLInputElement>) =>
        setFormData(prev => ({ ...prev, name: event.target.value }));

    const changeDescription = (event: ChangeEvent<HTMLTextAreaElement>) =>
        setFormData(prev => ({ ...prev, description: event.target.value }));

    const changeImageLink = (event: ChangeEvent<HTMLInputElement>) =>
        setFormData(prev => ({ ...prev, imageLink: event.target.value }));

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (validate(formData)) {
            updateArticleDraft(contentId, formData)
                .then(() => setStatus(""))
                .catch((error: Error) => setStatus(error.message));
        } else {
            setStatus("Errors detected");
        }
    };

    return (
        <form className="container flex flex-col gap-6" onSubmit={handleSubmit}>
            <h1 className="text-red-500 text-xl">{status}</h1>

            <div className="flex gap-6">
                <label htmlFor="name">Name</label>
                <input id="name" className="border" type="text" name="name" value={formData.name} onChange={changeName} placeholder="Pumpkin pie" />
            </div>

            <div className="flex gap-6">
                <label htmlFor="description">Description</label>
                <textarea id="description" className="border" name="description" value={formData.description} onChange={changeDescription} placeholder="Lorem ipsum" />
            </div>

            <div className="flex gap-6">
                <label htmlFor="imageLink">Image</label>
                <input id="imageLink" className="border" type="text" name="imageLink" value={formData.imageLink} onChange={changeImageLink} placeholder="http://example.com/image.jpg" />
            </div>

            <button className="w-40 h-12 my-4 bg-blue-300 rounded" type="submit">
                Save changes
            </button>

            <pre>{JSON.stringify(formData, null, 4)}</pre>
        </form>
    );
};

export default EditArticleForm;
