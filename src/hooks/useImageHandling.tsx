import { ChangeEvent, useState } from "react";

interface ImageHandling {
  contentImage: File | null;
  contentImageUrl: string | null;
  onContentImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleImageChange: (image: File) => void;
  removeContentImage: () => void;
}

const useImageHandling = (): ImageHandling => {
  const [contentImageUrl, setContentImageUrl] = useState<string | null>(null);
  const [contentImage, setContentImage] = useState<File | null>(null);

  const onContentImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleImageChange(e.target.files[0]);
    }
  };

  const handleImageChange = (image: File) => {
    setContentImage(image);
    readImage(image);
  };

  const readImage = (image: File) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      setContentImageUrl(String(e.target?.result));
    };
    reader.readAsDataURL(image);
  };

  const removeContentImage = () => {
    setContentImage(null);
    setContentImageUrl(null);
  };

  return {
    contentImageUrl,
    onContentImageChange,
    handleImageChange,
    removeContentImage,
    contentImage,
  };
};

export default useImageHandling;
