import { TwitterShareButton, TwitterIcon } from 'react-share';

const ShareToTwitter = () => {
  const url = window.location.href;
  const title = '[MBTI TEST] VIRUS 테스트';

  return (
    <TwitterShareButton title={title} url={url}>
      <TwitterIcon className="rounded-xl w-[44px] h-[42px]" />
    </TwitterShareButton>
  );
};

export default ShareToTwitter;
