import IPost from "interfaces/IPost";
import { useState } from "react";
import { Link } from "react-router-dom";

interface PostProps {
  post: IPost;
  isUserPost: boolean;
}

const Post = ({ post, isUserPost }: PostProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="flex flex-col justify-start gap-[12px] mb-[40px]">
      <Link to={`/video/${post.email}/${post.link}`}>
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
        {!isUserPost && (
          <img
            className="size-[36px] rounded-full"
            src={post.profile}
            alt="프로필"
          />
        )}
        <div>
          <div className="text-[16px] font-medium">{post.title}</div>
          {!isUserPost && (
            <div className="text-[14px] text-sub-title">{post.nickname}</div>
          )}
          <div className="text-[14px] text-sub-title mt-[-2px]">
            조회수 123만회 · {post.createdAt}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
