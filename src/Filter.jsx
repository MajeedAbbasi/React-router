import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    age: 30,
    text: "this is original text",
  });
  const age = searchParams.get("age");
  const text = searchParams.get("text");
  return (
    <div>
      <h1>Age of the person is {age}</h1>

      <h1> {text}</h1>
      <button
        onClick={() => {
          setSearchParams({ age: 50, text: "This is changed adress" });
        }}
      >
        Change Age
      </button>
    </div>
  );
};

export default Filter;
