import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  //   const {title,body}=post;
  return (
    <div>
      <h1>Details for {postId}</h1>
      <h2>Title: {post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
