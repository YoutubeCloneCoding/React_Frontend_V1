import React, { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import customAxios from "lib/customAxios";
import { useNavigate, useParams } from "react-router-dom";
import getAgo from "helpers/getAgo";
import dayjs from "dayjs";
import VideoPost from "components/VideoPost";
import IVideo from "interfaces/IVideo";
import good from "assets/good.svg";
import bad from "assets/bad.svg";
import copy from "assets/copy.svg";
import IPost from "interfaces/IPost";

const Play = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { uuid, email } = useParams();
  const { data: video } = useQuery<IVideo>({
    queryKey: ["video"],
    queryFn: async () => {
      const { data } = await customAxios.get(`/video/${uuid}?email=${email}`);
      return { ...data, createdAt: getAgo(dayjs(data.createdAt)) };
    },
  });
  const { data: postList } = useQuery<IPost[]>({
    queryKey: ["postList"],
    queryFn: async () => {
      const { data } = await customAxios("/list");
      return data.map((post: IPost) => {
        return { ...post, createdAt: getAgo(dayjs(post.createdAt)) };
      });
    },
  });

  const navigate = useNavigate();

  return (
    <div className="grid lg:grid-cols-[minmax(calc(360px*16/9),_auto),_400px] size-full p-[20px]">
      <div className="flex flex-1 flex-col min-w-[calc(360px*16/9)] gap-[10px] pr-[24px] pb-[24px]">
        <div className="flex overflow-hidden rounded-[20px]">
          <video
            ref={videoRef}
            src={video?.videoLink}
            controls
            autoPlay
            muted
            className="aspect-video w-[100%] object-cover"
          />
        </div>
        <div className="text-[20px] font-bold">{video?.title}</div>
        <div className="flex">
          <div className="flex flex-1 min-w-[calc(50%-6px)] items-center gap-[10px]">
            <img
              className="rounded-full size-[40px] cursor-pointer"
              src={video?.profile}
              alt="아이콘"
              onClick={() => navigate(`/${email}`)}
            />
            <div className="flex flex-col mr-[24px]">
              <div
                className="font-medium cursor-pointer"
                onClick={() => navigate(`/${email}`)}
              >
                {video?.nickname}
              </div>
              <div className="text-[12px] text-[#606060]">구독자 23.6만명</div>
            </div>
            <button className="text-white bg-black hover:bg-[#272727] rounded-[18px] h-[36px] text-[14px] px-[16px]">
              구독
            </button>
          </div>
          <div className="flex justify-end flex-1 basis-[auto] items-center gap-10 min-w-[calc(50%-6px)]">
            <div className="flex font-medium text-[14px]">
              <button className="flex justify-center items-center rounded-s-[50px] relative bg-[rgba(0,0,0,0.05)] h-[36px] px-[16px] hover:bg-[rgba(0,0,0,0.1)] after:content-[''] after:bg-[rgba(0,0,0,0.1)] after:absolute after:w-[1px] after:h-[24px] after:top-[6px] after:right-0">
                <div className="mr-[6px] ml-[-6px] size-[24px]">
                  <img className="scale-[2.5]" src={good} alt="좋아요" />
                </div>
                144
              </button>
              <button className="flex justify-center items-center rounded-r-[50px] bg-[rgba(0,0,0,0.05)] h-[36px] px-[16px] hover:bg-[rgba(0,0,0,0.1)]">
                <div className="mr-[6px] ml-[-6px] size-[24px]">
                  <img src={bad} alt="싫어요" />
                </div>
                10
              </button>
            </div>
            <button className="flex items-center text-[14px] font-medium rounded-[50px] bg-[rgba(0,0,0,0.05)] h-[36px] px-[16px] hover:bg-[rgba(0,0,0,0.1)]">
              <img className="mr-[6px] ml-[-6px]" src={copy} alt="공유" />
              공유
            </button>
          </div>
        </div>
        <div className="text-[14px] mt-[12px] p-[12px] rounded-[12px] bg-[rgba(0,0,0,0.05)]">
          <div>조회수 5.3천회 {video?.createdAt}</div>
          <div>{video?.contents}</div>
        </div>
      </div>
      <div className="flex flex-col w-[402px] min-w-[300px] gap-[10px]">
        {postList?.map((post: IPost) => (
          <VideoPost post={post} />
        ))}
      </div>
    </div>
  );
};

export default Play;
