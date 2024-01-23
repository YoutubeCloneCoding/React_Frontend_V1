import React, { useState, useRef } from "react";
import useImageHandling from "hooks/useImageHandling";
import nail from "assets/thumbnail.png";
import customAxios from "lib/customAxios";

interface VideoDetails {
  id: string;
  videoName: string;
  originVideoLink: string;
  videoLink: string;
}

interface DetailBoxProps {
  videoDetails: VideoDetails | null;
}

const Detail = ({ videoDetails }: DetailBoxProps) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputExplain, setInputExplain] = useState("");
  const [privacyOption, setPrivacyOption] = useState("public"); // 초기 값 설정
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const {
    contentImage,
    contentImageUrl,
    onContentImageChange,
    handleImageChange,
  } = useImageHandling();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const saveFile = async () => {
    try {
      if (videoDetails) {
        const formData = new FormData();
        formData.append("id", videoDetails.id.toString());
        formData.append("title", inputTitle);
        formData.append("contents", inputExplain);
        formData.append("publicScope", privacyOption);

        if (contentImage) {
          formData.append("thumbnail", contentImage);
        }
        const response = await customAxios.post("/api/save", formData);
        console.log("파일 업로드 성공", response.data);
      }
    } catch (error) {
      console.error("실패", error);
    }
  };

  return (
    <>
      <div className="flex flex-col p-10">
        <div className="text-2xl font-semibold flex items-center pb-2.5 mt-10">
          세부정보
        </div>
        <div className="flex flex-row items-start">
          <div className="flex flex-col w-3/5 pr-8">
            <div className="border border-border-gray-600 mb-5 rounded-sm">
              <label className="text-xs text-gray">제목</label>
              <input
                className="w-full h-16 px-2 focus:outline-none"
                type="text"
                onChange={(e) => setInputTitle(e.target.value)}
                placeholder="동영상을 설명하는 제목 추가"
              />
            </div>
            <div className="border border-border-gray-600 h-full rounded-sm">
              <label className="text-xs text-gray">설명</label>
              <input
                className="w-full h-24 px-2 focus:outline-none"
                type="text"
                onChange={(e) => setInputExplain(e.target.value)}
                placeholder="시청자에게 동영상에 대해 설명 해 주세요"
              />
            </div>
          </div>
          <div className="w-2/5  ml-20">
            <video controls className="w-full">
              <source src={videoDetails?.videoLink} type="video/mp4" />
            </video>
            <p className="text-sm">{videoDetails?.videoName}</p>
            <p className="text-sm">{videoDetails?.originVideoLink}</p>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-base">썸네일</p>
          <div className="text-sm mt-2">
            <p>동영상의 내용을 알려주는 사진을 선택하거나 업로드하세요.</p>
            <p>
              시청자의 시선을 사로잡을만한 이미지를 사용해 보세요.
              <a
                href="https://support.google.com/youtube/answer/72431?hl=ko"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-login-blue">자세히 보기</span>
              </a>
            </p>
          </div>
          <div className="flex flex-row">
            <div
              className="flex flex-col items-center border-dashed border border-border-gray-600 w-28 h-auto p-4 text-sm mt-2 hover:border-gray-500"
              onDragOver={onDragOver}
              onDrop={(e) => {
                e.preventDefault();
                const droppedFile = e.dataTransfer.files[0];
                handleImageChange(droppedFile);
              }}
            >
              <label htmlFor="input-file" role="button">
                <p className="text-xs">썸네일 추가</p>
              </label>
              <input
                type="file"
                accept=".png, .svg"
                id="input-file"
                style={{ display: "none" }}
                aria-hidden
                ref={fileInputRef}
                onChange={onContentImageChange}
              />
              <div className="flex items-center">
                <img className="w-5 mb-1.5 cursor-pointer" src={nail} alt="" />
              </div>
            </div>
            {contentImageUrl && (
              <img
                className="w-28 h-auto cursor-pointer p-4 mt-2"
                src={contentImageUrl}
                alt=""
              />
            )}
          </div>
        </div>
        <div className="mt-2">
          <p className="text-base">공개 범위</p>
          <div className="text-sm mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                value="public"
                checked={privacyOption === "PUBLIC"}
                onChange={() => setPrivacyOption("PUBLIC")}
              />
              <span className="ml-2">공개</span>
            </label>

            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="form-radio"
                value="private"
                checked={privacyOption === "PARTIAL_PUBLIC"}
                onChange={() => setPrivacyOption("PARTIAL_PUBLIC")}
              />
              <span className="ml-2">일부 공개</span>
            </label>

            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="form-radio"
                value="partial_public"
                checked={privacyOption === "PRIVATE"}
                onChange={() => setPrivacyOption("PRIVATE")}
              />
              <span className="ml-2">비공개</span>
            </label>
          </div>
        </div>
      </div>
      <div className="mt-2 ml-auto">
        <button
          onClick={saveFile}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          다음
        </button>
      </div>
    </>
  );
};

export default Detail;
