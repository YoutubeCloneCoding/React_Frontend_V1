import React, { useRef, useState } from "react";
import upload from "assets/upload.png";
import customAxios from "lib/customAxios";
import useImageHandling from "hooks/useImageHandling";
import Detail from "./detail";

interface VideoDetails {
  id: string;
  videoName: string;
  originVideoLink: string;
  videoLink: string;
}

const Upload = () => {
  const { contentImageUrl, handleImageChange } = useImageHandling();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
  
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const uploadFile = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await customAxios.post("/api/upload", formData);

      console.log("파일 업로드 성공", response.data);
      setVideoDetails(response.data);
    } catch (error) {
      console.error("실패", error);
    }
  };

  return (
    <div
      className="flex justify-center items-center flex-col p-10"
      onDragOver={onDragOver}
      onDrop={(e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        handleImageChange(droppedFile);
        uploadFile(droppedFile);
      }}
    >
      {!contentImageUrl && (
        <div className="flex justify-center items-center flex-col p-10">
          <img src={upload} alt="업로드" className="w-48" />
          <p className="mt-2 text-base">
            동영상 파일을 드래그 앤 드롭하거나 파일을 선택하세요
          </p>
          <button className="w-24 h-9 text-base bg-blue-600 text-white border-none rounded-sm mt-5">
            <label htmlFor="input-file" role="button">
              파일 선택
            </label>
            <input
              type="file"
              accept=".mp4, .mkv, .mov"
              id="input-file"
              style={{ display: "none" }}
              aria-hidden
              ref={fileInputRef}
              onChange={(e) => {
                const selectedFile = e.target.files && e.target.files[0];

                if (selectedFile) {
                  handleImageChange(selectedFile);
                  uploadFile(selectedFile);
                }
              }}
            />
          </button>
        </div>
      )}
      {contentImageUrl && <Detail videoDetails={videoDetails} />}
    </div>
  );
};

export default Upload;
