import React, { useRef, useState, ChangeEvent } from "react";
import upload from "assets/upload.png";
import customAxios from "lib/customAxios";
import Detail from "./detail";
import { useMutation } from "react-query";
import useUser from "hooks/useUser";

interface VideoDetails {
  id: string;
  videoName: string;
  originVideoLink: string;
  videoLink: string;
}

const Upload = () => {
  const { isLogin } = useUser();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
  const [contentImageUrl, setContentImageUrl] = useState<string | null>(null);
  const [contentImage, setContentImage] = useState<File | null>(null);

  const uploadMutation = useMutation(
    async (file: File) => {
      const formData = new FormData();
      formData.append("file", file);

      const response = await customAxios.post("/api/upload", formData);
      return response.data;
    },
    {
      onSuccess: (data) => {
        setVideoDetails(data);
      },
    },
  );

  const onContentImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      setContentImage(selectedFile);
      readImage(selectedFile);
      uploadMutation.mutate(selectedFile);
    }
  };

  const handleImageChange = (image: File) => {
    setContentImage(image);
    readImage(image);
    uploadMutation.mutate(image);
  };

  const readImage = (image: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setContentImageUrl(String(e.target?.result));
    };
    reader.readAsDataURL(image);
  };

  return (
    <>
      {" "}
      <div
        id="scroll"
        className="flex justify-center items-center flex-col overflow-y-auto max-h-[100vh] overflow-x-hidden p-10"
        onDrop={(e) => {
          e.preventDefault();
          const droppedFile = e.dataTransfer.files[0];
          handleImageChange(droppedFile);
          uploadMutation.mutate(droppedFile);
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
                onChange={onContentImageChange}
              />
            </button>
          </div>
        )}
        {contentImageUrl && <Detail videoDetails={videoDetails} />}
      </div>
    </>
  );
};

export default Upload;
