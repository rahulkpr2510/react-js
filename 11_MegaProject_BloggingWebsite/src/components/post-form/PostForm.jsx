import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import {Button, Input, Select, RTE} from '../index.js';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import uploadservice from "../../appwrite/upload.js";
import postservice from "../../appwrite/post.js";

export default function PostForm({post}){
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.slug || "",
            content: post?.content || "",
            status: post?.status || "active"
        }
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async(data) => {
        if(post){
            const file = data.image?.[0] ? await uploadservice.uploadFile(data.image[0]) : null;

            if(file && post.featuredImage){
                uploadservice.deleteFile(post.featuredImage);
            }

            const dbPost = await postservice.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined
            });

            if(dbPost){
                navigate(`/post/${dbPost.$id}`);
            }
        }else{
            const file = data.image?.[0] ? await uploadservice.uploadFile(data.image[0]) : null;

            if(file){
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await postservice.createPost({
                    ...data,
                    userId: userData.$id
                });

                if(dbPost){
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if(value && typeof value === 'string'){
            return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s/g, "-");
        }
        return '';
    }, []);

    useEffect(() => {
        const subscription = watch((value, {name}) => {
            if(name === 'title'){
                setValue('slug', slugTransform(value.title), {shouldValidate : true});
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full">
                        <img
                            src={uploadservice.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["Active", "Inactive"]}
                    label="Status: "
                    className="mt-20 mb-6"
                    {...register("status", { required: true })}
                />
                <Button type="submit" className="w-full rounded-full bg-[#ff0] font-bold" textColor="text-black">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}