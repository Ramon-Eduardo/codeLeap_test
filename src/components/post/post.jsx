import { useEffect, useState } from "react";
import "./styles.css";
import { Delete } from "../svg/delete";
import { Edit } from "../svg/edit";
import DeleteModal from "../modal/delete/deleteModal";
import EditModal from "../modal/edit/editModal";

export function Post({ username }) {
    const [postList, setPostList] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);


    const editPost = (id, newTitle, newContent) => {
        fetch(`https://dev.codeleap.co.uk/careers/${id}/`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: newTitle,
                content: newContent,
            }),
        })
            .then((response) => response.json())
            .then((updatedPost) => {
                setPostList((prevList) =>
                    prevList.map((post) =>
                        post.id === id ? updatedPost : post
                    )
                );
                setOpenEditModal(false);
            })
            .catch((error) => console.error("Error:", error));
    };


    const deletePost = (id) => {
        fetch(`https://dev.codeleap.co.uk/careers/${id}/`, {
            method: "DELETE",
        })
            .then(() => {
                setPostList((prevList) => prevList.filter((post) => post.id !== id));
                setOpenDeleteModal(false);
            })
            .catch((error) => console.error("Error:", error));
    };



    const getPosts = () => {
        fetch("https://dev.codeleap.co.uk/careers/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => setPostList(data.results))
            .catch((error) => console.error("Error:", error));
    };

    const createPost = () => {
        if (title.trim() === "" || content.trim() === "") {
            alert("Title and content cannot be empty.");
            return;
        }
        fetch("https://dev.codeleap.co.uk/careers/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                content,
                username
            })
        })
            .then((response) => response.json())
            .then((data) => {
                setPostList((prevList) => [data, ...prevList]);
                setTitle("");
                setContent("");
            })
            .catch((error) => console.error("Error:", error));
    };


    useEffect(() => {
        getPosts();
    }, []);

    return (

        <main>
            <div className="headerTitle">
                <h2>CodeLeap Network</h2>
            </div>

            <section>
                <div className="postContainer">
                    <div className="postForm">
                        <div className="title">
                            <h3>What's on your mind?</h3>
                        </div>
                        <span>Title</span>
                        <div className="titleContent">
                            <input value={title} className="postTitle" type="text" placeholder='Hello world' onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <span>Content</span>
                        <div className="content">
                            <textarea value={content} className="textContent" placeholder='Content here' onChange={(e) => setContent(e.target.value)} ></textarea>
                        </div>
                        <div className="button">
                            <button onClick={createPost}>Create</button>
                        </div>
                    </div>
                    <div className="postList">
                        {postList?.map((post) => (
                            <div key={post.id} className="postItem">
                                <div className="postHeader">
                                    <h2>{post.title}</h2>
                                    {username === post.username && <div className="editDelete">
                                        <button onClick={() => setOpenDeleteModal(true)}> <Delete /> </button>
                                        <button onClick={() => setOpenEditModal(true)}> <Edit /> </button>
                                    </div>}
                                    <DeleteModal isOpen={openDeleteModal}
                                        onClose={() => setOpenDeleteModal(false)}
                                        onDelete={() => deletePost(post.id)}
                                    />

                                    <EditModal isOpen={openEditModal}
                                        onClose={() => setOpenEditModal(false)}
                                        onEdit={(newTitle, newContent) => editPost(post.id, newTitle, newContent)}
                                        currentTitle={post.title}
                                        currentContent={post.content}
                                    />
                                </div>
                                <div className="postContent">
                                    <p className="username">@{post.username}</p>
                                    <p>{post.content}</p>
                                </div>
                            </div>
                        ))}
                        {postList?.length == 0 && <p>No posts available.</p>}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Post;