import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
const PostForm = ({ createPost }) => {
  const [post, setPost] = useState({ title: "", stack: "" });
  const addPost = (e) => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };
    createPost(newPost);

    setPost({ title: "", stack: "" });
  };
  return (
    <form>
      <h4 className="text-center">Create your first post</h4>
      <MyInput
        type="text"
        className="form-control"
        placeholder="Programming language"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />

      <MyInput
        type="text"
        className="form-control my-3"
        placeholder="Enter your favourite stack"
        value={post.stack}
        onChange={(e) => setPost({ ...post, stack: e.target.value })}
      />

      <MyButton onClick={addPost}>Add Post</MyButton>
    </form>
  );
};

export default PostForm;
