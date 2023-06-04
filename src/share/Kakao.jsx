export const ShareMainToKakao = () => {
  const handlePageShare = () => {
    window.Kakao.Link.sendCustom({
      templateId: 94444,
    });
  };

  return (
    <button onClick={handlePageShare}>
      <img
        src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
        alt="카카오링크 보내기 버튼"
        className="w-[44px] h-[42px]"
      />
    </button>
  );
};

export const ShareResultToKakao = () => {
  const handlePageShare = () => {
    window.Kakao.Link.sendCustom({
      templateId: 94530,
    });
  };

  return (
    <button onClick={handlePageShare}>
      <img
        src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
        alt="카카오링크 보내기 버튼"
        className="w-[44px] h-[42px]"
      />
    </button>
  );
};
