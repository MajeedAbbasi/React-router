import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  const { name } = params;
  return (
    <div>
      <h1>Here is data of {name.toUpperCase()}</h1>
      <p>hello this is {name}</p>
    </div>
  );
};
export default User;
