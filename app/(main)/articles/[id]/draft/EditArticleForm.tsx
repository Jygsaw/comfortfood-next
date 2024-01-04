"use client";

import React, { useMemo, useState } from "react";
import { Input, Textarea } from "@nextui-org/react";
import { updateArticleDraft } from "app/_lib/articlesAPI";
import { debounce, slugify } from "app/_lib/siteUtils";
import SectionHeader from "app/_components/SectionHeader";
import FormRow from "app/_components/FormRow";
import Button from "app/_components/Button";
import DeleteArticleButton from "./DeleteArticleButton";
import PreviewArticleButton from "./PreviewArticleButton";

import type { ChangeEvent } from "react";
import type { Article } from "app/_types/record";

type Input = {
    contentId: string,
    draft: Article,
}

const EditArticleForm =({ contentId, draft }: Input) => {
    const [formData, setFormData] = useState<Partial<Article>>({
        name: draft.name ?? "",
        slug: draft.slug ?? "",
        description: draft.description ?? "",
        imageLink: draft.imageLink ?? "",
        content: draft.content ?? "",
    });
    const [status, setStatus] = useState("");

    const slugifySlug = useMemo(() => debounce(() =>
        setFormData(prev => ({ ...prev, slug: slugify(prev.slug) })), 3000), []);

    const changeName = (event: ChangeEvent<HTMLInputElement>) =>
        setFormData(prev => ({ ...prev, name: event.target.value }));

    const changeSlug = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, slug: event.target.value }));
        slugifySlug();
    };

    const changeDescription = (event: ChangeEvent<HTMLInputElement>) =>
        setFormData(prev => ({ ...prev, description: event.target.value }));

    const changeImageLink = (event: ChangeEvent<HTMLInputElement>) =>
        setFormData(prev => ({ ...prev, imageLink: event.target.value }));

    const changeContent = (event: ChangeEvent<HTMLInputElement>) =>
        setFormData(prev => ({ ...prev, content: event.target.value }));

    const handleSave = () => {
        updateArticleDraft(contentId, formData)
            .then(() => setStatus(""))
            .catch((error: Error) => setStatus(error.message));
    };

    const Controls = ({ contentId, draftContentId }: { contentId: string, draftContentId: string }) => {
        return (
            <section className="flex gap-6 items-center justify-end">
                <DeleteArticleButton contentId={contentId} draftContentId={draftContentId} />
                <PreviewArticleButton contentId={contentId} />
                <Button color="primary" onPress={handleSave}>Save changes</Button>
            </section>
        );
    };

    return (
        <>
            <SectionHeader
                title="Edit your article"
                postTitle={<Controls contentId={contentId} draftContentId={draft.contentId} />}
            />

            <h1 className="text-red-500 text-xl">{status}</h1>

            <form className="container" onSubmit={handleSave}>
                <FormRow
                    label={<label htmlFor="name">Name</label>}
                    input={
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={changeName}
                            placeholder="Pumpkin Pie"
                        />
                    }
                    example="What's the Difference Between Expiration, Best-By, Sell-By, and Use-By Dates?"
                />

                <FormRow
                    label={<label htmlFor="slug">Slug</label>}
                    input={
                        <Input
                            id="slug"
                            name="slug"
                            value={formData.slug}
                            onChange={changeSlug}
                            placeholder="this-is-a-seo-friendly-slug"
                        />
                    }
                    example="Expiration, Best-By, Sell-By, and Use-By Dates"
                />

                <FormRow
                    label={<label htmlFor="description">Subtitle</label>}
                    input={
                        <Textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={changeDescription}
                            placeholder="Lorem ipsum"
                            minRows={1}
                        />
                    }
                    example="Reducing food waste is critical. Understanding expiration, sell-by, best-by, use-by, and freeze-by date labels can help you do your part, as well as save you money."
                />

                <FormRow
                    label={<label htmlFor="imageLink">Image</label>}
                    input={
                        <Input
                            id="imageLink"
                            name="imageLink"
                            value={formData.imageLink}
                            onChange={changeImageLink}
                            placeholder="http://example.com/image.jpg"
                        />
                    }
                    example="https://www.simplyrecipes.com/thmb/aNnI7QfPFNrPdzU0Mbb7EcRvN4I=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Expiration-Dates-LEAD-a9c08d6e07f14ea1a80e06e1dd86cdd7.jpg"
                />

                <FormRow
                    label={<label htmlFor="content">Content</label>}
                    input={
                        <Textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={changeContent}
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                            minRows={5}
                        />
                    }
                    example="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />

                <Controls contentId={contentId} draftContentId={draft.contentId} />
            </form>
        </>
    );
};

export default EditArticleForm;
