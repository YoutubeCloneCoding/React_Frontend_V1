import React from "react";
import Post from "components/Post";
import { useQuery } from "@tanstack/react-query";
import customAxios from "lib/customAxios";
import IPost from "interfaces/IPost";

const Home = () => {
  const { data: postList } = useQuery({
    queryKey: ["postList"],
    queryFn: async () => {
      const { data } = await customAxios("/list");
      return data;
    },
  });

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_auto))] gap-[20px] mx-[50px] mt-[50px]">
      {postList?.map((post: IPost) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Home;
