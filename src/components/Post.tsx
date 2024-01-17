import IPost from "interfaces/IPost";
import React from "react";

interface PostProps {
  post: IPost;
}

const Post = ({ post }: PostProps) => {
  return (
    <div className="flex flex-col justify-start gap-[12px] mb-[40px]">
      <a href="https://www.youtube.com/watch?v=LWA06BY_gsY">
        <img
          className="aspect-video w-full rounded-2xl"
          src={post.thumbnail}
          alt="썸네일"
        />
      </a>

      <a className="flex gap-[12px]" href="https://www.youtube.com/@RALO24">
        <img
          className="size-[36px] rounded-full"
          src={post.profile}
          alt="프로필"
        />
        <div>
          <div className="text-[16px] font-medium">{post.title}</div>
          <div className="text-[14px] text-sub-title">{post.nickname}</div>
          <div className="text-[14px] text-sub-title mt-[-2px]">
            조회수 123만회 · {post.createdAt}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Post;
