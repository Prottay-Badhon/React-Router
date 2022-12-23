import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h1>Posts{posts.length}</h1>
      {posts.map((post) => (
        <Link to={`/posts/${post.id}`}
         key={post.id}
        >{post.id}</Link>
      ))}
      <Outlet></Outlet>
    </div>
  );
};

export default Posts;
