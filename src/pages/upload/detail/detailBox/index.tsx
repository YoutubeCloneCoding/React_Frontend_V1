import { useState, useRef } from "react";
import nail from "assets/thumbnail.png";

interface DetailBoxProps {
  contentVideoUrl: string;
}

const DetailBox = ({ contentVideoUrl }: DetailBoxProps) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputExplain, setInputExplain] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <div className="flex flex-col">
        <div className="text-2xl font-semibold flex items-center pb-2.5">
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
          <div className="w-2/5">
            <video controls className="w-full">
              <source src={contentVideoUrl} />
            </video>
            dfasdkfjadkljf;
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
          <div className="flex flex-col items-center border-dashed border border-border-gray-600 w-28 h-full p-4  text-sm mt-2 hover:border-gray-500">
            <img className="w-5 mb-1.5 cursor-pointer" src={nail} alt="" />
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
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end ">
        <button className="w-16 h-8 text-base bg-blue-600 text-white rounded-sm mt-12">
          다음
        </button>
      </div>
    </>
  );
};

export default DetailBox;
