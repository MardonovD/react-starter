import React, { useState } from "react";
import PostForm from "./components/PostForm";

import TableList from "./components/TableList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

import "./style/styles.css";
function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      stack: "Mern-Stack",
    },
    {
      id: 2,
      title: "Python",
      stack: "Full-Stack",
    },
    {
      id: 3,
      title: "C#",
      stack: "Cyber",
    },
    {
      id: 4,
      title: "Goo",
      stack: "Back-End",
    },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((s) => s.id !== post.id));
  };

  return (
    <div className="app w-50 mx-auto">
      <PostForm createPost={createPost} />
      <div className="d-flex justify-content-end my-2">
        <select className="form-select w-50">
          <option value="val">Sorted By Title</option>
          <option value="val">Sorted By Job</option>
        </select>
      </div>
      {posts.length ? (
        <TableList
          remove={removePost}
          posts={posts}
          title="Programming Language"
        />
      ) : (
        <h5 style={{ color: "red", textAlign: "center ", marginTop: "20px" }}>
          Sizda hech qanday malumotlar mavjud emas...
        </h5>
      )}
    </div>
  );
}

export default App;
