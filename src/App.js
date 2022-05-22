import React, { useState } from "react";

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

  const [title, setTitle] = useState("");
  const [stack, setStack] = useState("");
  const addPost = (e) => {
    e.preventDefault();
    console.log(title);
  };
  return (
    <div className="app w-50 mx-auto">
      <form>
        <h4 className="text-center">Create your first post</h4>
        <MyInput
          type="text"
          className="form-control"
          placeholder="Programming language"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <MyInput
          type="text"
          className="form-control my-3"
          placeholder="Enter your favourite stack"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <MyButton onClick={addPost}>Add Post</MyButton>
      </form>
      <TableList posts={posts} title="Programming Language" />
    </div>
  );
}

export default App;
