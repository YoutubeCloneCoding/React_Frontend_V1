import IPost from "interfaces/IPost";
import { useState } from "react";
import { Link } from "react-router-dom";

interface PostProps {
  post: IPost;
}

const VideoPost = ({ post }: PostProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="flex gap-[12px] mb-[5px]">
      <Link className="w-[168px] h-[94px]" to={`/${post.email}/${post.link}`}>
        {isHover ? (
          <video
            src={post.video}
            autoPlay
            muted
            controls
            className="aspect-video w-full "
            onMouseOut={() => setIsHover(false)}
          />
        ) : (
          <img
            className="aspect-video w-full rounded-2xl "
            src={post.thumbnail}
            alt="썸네일"
            onMouseOver={() => setIsHover(true)}
          />
        )}
      </Link>

      <Link className="flex gap-[12px]" to={"/" + post.email}>
        <div className="min-w-0 text-ellipsis overflow-hidden pr-[24px]">
          <h3 className="text-[15px] font-medium mb-[4px]">{post.title}</h3>
          <div className="text-[12px] text-sub-title">{post.nickname}</div>
          <div className="text-[12px] text-sub-title mt-[-2px]">
            조회수 123만회 · {post.createdAt}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoPost;
