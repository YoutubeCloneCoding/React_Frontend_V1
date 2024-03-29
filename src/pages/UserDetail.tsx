import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import customAxios from "lib/customAxios";
import IPost from "interfaces/IPost";
import getAgo from "helpers/getAgo";
import Post from "components/Post";
import dayjs from "dayjs";
import IUser from "interfaces/IUser";

const UserDetail = () => {
  const { email } = useParams();

  const { data: userPostList } = useQuery<IPost[]>({
    queryKey: [`post${email}`],
    queryFn: async () => {
      const { data } = await customAxios(`/userList?email=${email}`);
      return data.map((post: IPost) => {
        return { ...post, createdAt: getAgo(dayjs(post.createdAt)) };
      });
    },
  });

  const { data: user } = useQuery<IUser>({
    queryKey: [`user${email}`],
    queryFn: async () => {
      const { data } = await customAxios(`/profile/${email}`);
      return data;
    },
  });

  return (
    <div>
      <div className="flex pl-[10%] pt-[50px] pb-[20px]">
        <img
          className="rounded-full size-[160px] mr-[24px]"
          src={user?.profile}
          alt="아이콘"
        />
        <div>
          <div className="text-[36px] font-bold">{user?.nickname}</div>
          <div className="text-[14px] text-sub-title">{user?.email}</div>
          <div className="pt-[5px] text-[15px] text-sub-title">
            동영상 {userPostList?.length}개
          </div>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_auto))] gap-[20px] mx-[10%] mt-[50px]">
        {userPostList?.map((post: IPost) => (
          <Post post={post} isUserPost={true} />
        ))}
      </div>
    </div>
  );
};

export default UserDetail;
