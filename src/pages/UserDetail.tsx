import useUser from "hooks/useUser";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import customAxios from "lib/customAxios";
import IPost from "interfaces/IPost";
import getAgo from "helpers/getAgo";
import Post from "components/Post";
import dayjs from "dayjs";

const UserDetail = () => {
  const { email } = useParams();
  const { user } = useUser();
  const { data: postList } = useQuery({
    queryKey: ["postList"],
    queryFn: async () => {
      const { data } = await customAxios("/list");
      return data.map((post: IPost) => {
        return { ...post, createdAt: getAgo(dayjs(post.createdAt)) };
      });
    },
  });

  return (
    <div>
      <div className="flex pl-[10%] pt-[50px] pb-[20px]">
        <img
          className="rounded-full size-[160px] mr-[24px]"
          src={user.profile}
          alt="아이콘"
        />
        <div>
          <div className="text-[36px] font-bold">{user.nickname}</div>
          <div className="text-[14px] text-sub-title">{user.email}</div>
          <div className="pt-[5px] text-[15px] text-sub-title">동영상 8개</div>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_auto))] gap-[20px] mx-[10%] mt-[50px]">
        {postList?.map((post: IPost) => (
          <Post post={post} />
        ))}
      </div>
    </div>
  );
};

export default UserDetail;
