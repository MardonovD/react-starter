import React, { useState } from "react";

import TableList from "./components/TableList";

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
  return (
    <div className="app w-50 mx-auto">
      <TableList posts={posts} />
    </div>
  );
}

export default App;
