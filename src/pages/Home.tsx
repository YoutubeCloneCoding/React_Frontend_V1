import React from "react";
import Post from "components/Post";

const Home = () => {
  return (
    <div className="flex gap-[20px] flex-wrap mx-[50px] mt-[50px]">
      {Array.from(Array(100)).map(() => (
        <Post />
      ))}
    </div>
  );
};

export default Home;
