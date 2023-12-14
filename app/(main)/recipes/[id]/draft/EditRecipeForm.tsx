"use client";

import React, { useState } from "react";
import { updateRecipeDraft } from "app/_lib/recipesAPI";

import type { ChangeEvent, FormEvent } from "react";
import type { RecipeDraft } from "app/_types/record";

type Input = {
    draft: RecipeDraft,
}

const EditRecipeForm =({ draft }: Input) => {
    const [formData, setFormData] = useState<RecipeDraft>(draft);
    const [status, setStatus] = useState("");

    const validate = (formData: RecipeDraft) => !!formData.name && !!formData.description;

    const changeName = (event: ChangeEvent<HTMLInputElement>) =>
        setFormData(prev => ({ ...prev, name: event.target.value }));

    const changeDescription = (event: ChangeEvent<HTMLTextAreaElement>) =>
        setFormData(prev => ({ ...prev, description: event.target.value }));

    const changeImageLink = (event: ChangeEvent<HTMLInputElement>) =>
        setFormData(prev => ({ ...prev, imageLink: event.target.value }));

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (validate(formData)) {
            updateRecipeDraft(formData.draftOf, formData)
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

export default EditRecipeForm;
