import React from "react";

export default function FriendProfile({ friend }) {
  const {
    name: { title, first, last },
    location: {
      country,
      city,
      state,
      street: { name, number },
    },
    email,
    phone,
    picture: { medium },
    registered: { age },
  } = friend;
  return (
    <>
      <h3>{`name : ${title} ${first} ${last}`}</h3>
      <p>{`age: ${age}`}</p>
      <p>{`adress : ${country} ,${city}, ${state}, ${`${name}${number}`}`}</p>
      <p>{`email: ${email}`}</p>
      <p>{`phone: ${phone}`}</p>
      <img src={medium} alt={medium} />
    </>
  );
}
