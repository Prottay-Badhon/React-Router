import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const [friend, setFriend] = useState({});
  const params = useParams();
  const id = params.friendId;

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);

  const { name, username, email, address} = friend;
  return (
    <div>
      <h1>Detail about friend {}</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>User Name: {username}</p>
      <p>City: {address?.city}</p>
    </div>
  );
};

export default FriendDetail;
