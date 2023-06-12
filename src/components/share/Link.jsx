import React from 'react';
import urlImg from '/assets/shareLink.svg';
export default function ShareUrl() {
  const handleUrlShare = () => {
    const url = window.location.href;
    window.navigator.clipboard
      .writeText(url)
      .then(() => alert('링크가 복사되었습니다.'));
  };
  return (
    <button
      type="button"
      onClick={handleUrlShare}
      className="w-[44px] h-[42px] bg-gray-200 rounded-xl"
    >
      <img src={urlImg} alt="urlShare" />
    </button>
  );
}
