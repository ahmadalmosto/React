import React, { useState } from "react";

const Friend = () => {
  const [friend, setFriend] = useState({});
  const getFriend = () => {
    const url = "https://www.randomuser.me/api?results=1";
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setFriend({
          first: response.results[0].name.first,
          last: response.results[0].name.last,
          city: response.results[0].location.city,
          country: response.results[0].location.country,
          phoneNumber: response.results[0].phone,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={getFriend}>get a friend</button>

      <FriendProfile friend={friend} />
    </div>
  );
};
const FriendProfile = ({ friend }) => {
  return (
    <div>
      <p>
        {friend.first} {friend.last} {friend.city} {friend.country}{" "}
        {friend.phoneNumber}
      </p>
    </div>
  );
};

export default Friend;
