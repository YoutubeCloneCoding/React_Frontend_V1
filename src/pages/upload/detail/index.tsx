import React from "react";
import DetailBox from "./detailBox";

interface DetailProps {
  contentVideoUrl: string;
}

const Detail = ({ contentVideoUrl }: DetailProps) => {
  return (
    <>
      <div>
        <DetailBox contentVideoUrl={contentVideoUrl} />
      </div>
    </>
  );
};

export default Detail;
