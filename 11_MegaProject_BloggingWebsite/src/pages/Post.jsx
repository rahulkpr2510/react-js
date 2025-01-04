import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import postservice from "../appwrite/post.js";
import uploadservice from "../appwrite/upload.js";
import { Button, Container } from "../components/index.js";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            postservice.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        postservice.deletePost(post.$id).then((status) => {
            if (status) {
                uploadservice.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="max-w-fit flex justify-center mb-4 relative border rounded-xl p-2">
                        <img
                            src={uploadservice.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-xl border-2 border-white"
                            width={700}
                            height={700}
                        />
                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button className="mr-3 rounded-xl font-bold bg-green-500" textColor="text-black">
                                    Edit
                                </Button>
                            </Link>
                                <Button className="rounded-xl font-bold bg-red-500" textColor="text-black" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold capitalize">{post.title}</h1>
                </div>
                <div className="browser-css first-letter:capitalize">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}