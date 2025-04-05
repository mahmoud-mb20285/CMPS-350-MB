"use client";
import { useState } from "react";
import FriendForm from "./FreindForm"; 

export default function FriendsList() {
  const [friends, setFriends] = useState(["Fatima", "Mouza", "Sarah"]);

  const addFriendHandler = (name) => {
    //Clone the friends then add the new one
    const newFriends = [...friends, name];
    setFriends(newFriends);
  };

  //const handleClick = () => alert('You did it!')

  return (
    <>
      {/* <a href='' onClick={handleClick}> Click me</a>*/}
      <FriendForm onAddFriend={addFriendHandler} />
      <ul>
        {friends.map((friend, i) => (
          <li key={i}>{i} +":"+ {friend} </li>
        ))}
      </ul>
    </>
  );
}
