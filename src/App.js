import React, { useState } from "react";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
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

  const [select, setSelect] = useState("");
  const [search, setSearch] = useState("");

  function getSortedPosts() {
    console.log("render");
    if (select) {
      return [...posts].sort((a, b) => a[select].localeCompare(b[select]));
    }
    return posts;
  }
  const sortedPost = getSortedPosts();
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((s) => s.id !== post.id));
  };

  const sortPost = (sort) => {
    setSelect(sort);
    setPosts(sortedPost);
  };

  return (
    <div className="app w-50 mx-auto">
      <PostForm createPost={createPost} />
      <div className="d-flex justify-content-between my-2">
        <MyInput
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="search"
        />
        <MySelect
          value={select}
          onChange={sortPost}
          defaultValue="Sorted By"
          options={[
            { value: "title", name: "Programming" },
            { value: "stack", name: "Jobs" },
          ]}
        />
      </div>
      {posts.length ? (
        <TableList
          remove={removePost}
          posts={sortedPost}
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
