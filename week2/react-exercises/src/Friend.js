import React, { useState } from "react";
import FriendProfile from "./FriendProfile";
import Button from "./FriendButton";

export default function Friend() {
  const [friend, setFriend] = useState({});
  const [error, setError] = useState(false);
  const URL = "https://www.randomuser.me/api?results=1";

  function getFriend() {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setFriend(data.results[0]);
      });
  }
  const isEmpty = (obj) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  return (
    <div>
      {error && <p>not found </p>}
      <Button getFriend={getFriend} />
      {isEmpty(friend) === false && <FriendProfile friend={friend} />}
    </div>
  );
}
