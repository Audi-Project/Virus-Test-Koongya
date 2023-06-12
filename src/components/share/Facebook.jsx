import { FacebookShareButton, FacebookIcon } from 'react-share';

const ShareToFacebook = () => {
  const url = window.location.href;
  const title = '[MBTI TEST] VIRUS 테스트';
  const hashtag = 'MBTI TEST';

  return (
    <FacebookShareButton quote={title} url={url} hashtag={hashtag}>
      <FacebookIcon className="rounded-xl w-[44px] h-[42px]" />
    </FacebookShareButton>
  );
};

export default ShareToFacebook;
