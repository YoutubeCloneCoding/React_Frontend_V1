import IPost from "interfaces/IPost";
import React from "react";

interface PostProps {
  post: IPost;
}

const Post = ({ post }: PostProps) => {
  return (
    <div className="flex flex-1 basis-[350px] flex-col justify-center gap-[12px] mb-[40px]">
      <a href="https://www.youtube.com/watch?v=LWA06BY_gsY">
        <img
          className="aspect-video w-full rounded-2xl"
          src="	https://i.ytimg.com/vi/LWA06BY_gsY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDhpC6SYIzwemu0JieV2-QexGopUw"
          alt="썸네일"
        />
      </a>

      <a className="flex gap-[12px]" href="https://www.youtube.com/@RALO24">
        <img
          className="size-[36px] rounded-full"
          src="https://yt3.ggpht.com/ytc/AIf8zZQNWfU6iMvJ_jvC-Th4YlLZP2NTzgUe8Eubv_ZtWA=s68-c-k-c0x00ffffff-no-rj"
          alt="프로필"
        />
        <div>
          <div className="text-[16px] font-medium">술안주는 역시 커피땅콩</div>
          <div className="text-[14px] text-sub-title">랄로</div>
          <div className="text-[14px] text-sub-title mt-[-2px]">
            조회수 123만회 · 3주 전
          </div>
        </div>
      </a>
    </div>
  );
};

export default Post;
