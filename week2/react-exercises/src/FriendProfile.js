import React from "react";

export default function FriendProfile({ friend }) {
  return (
    <>
      <ul style={{ textAlign: "left" }} key={friend.date}>
        <li>
          {friend.name.first} {friend.name.last}
        </li>
        <li>
          address : {friend.location.country} , {friend.location.city} ,{" "}
          {friend.location.street.name}
        </li>
        <li>email : {friend.email}</li>
        <li> phone : {friend.phone}</li>
      </ul>
    </>
  );
}
