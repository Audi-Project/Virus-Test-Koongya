import React from 'react';
import tw from 'tailwind-styled-components';
import { Link } from 'react-router-dom';
import { mbtiResultImg } from '../utils/const';
import { ShareResultToKakao } from './share/Kakao';
import ShareToFacebook from './share/Facebook';
import ShareToTwitter from './share/Twitter';
import ShareUrl from './share/Link';
import GoodWith from './GoodWith';
import BadWith from './BadWith';
import { TextLineP } from '../styles/style';

function ResultImage({ mbtiType, handleModalOpen }) {
  const resultImage = mbtiResultImg
    .filter(obj => obj.mbti === mbtiType)
    .map(obj => obj.img);

  const handleGoMain = () => {};
  return (
    <>
      <ResultType>
        <div className="relative">
          <ResultTypeImage
            src={resultImage}
            alt="타입별 결과지"
            className="relative"
          />
          <GoodWith mbtiType={mbtiType} />
          <BadWith mbtiType={mbtiType} />
        </div>
      </ResultType>
      <ResultTypeImageBottom>
        <Link to="/">
          <ResultTypeImageReplay onClick={() => handleGoMain}>
            <TextLineP>다시 하기</TextLineP>
          </ResultTypeImageReplay>
        </Link>
        <TotalTypeButton onClick={handleModalOpen}>
          <TextLineP>모든 유형 보기</TextLineP>
        </TotalTypeButton>
        <ShareContainer>
          <ShareText>
            <div className="w-[270px] h-[50px] p-1 bg-[#D8C5FD] flex items-center justify-between">
              <ShareResultToKakao mbtiType={mbtiType} />
              <ShareToFacebook />
              <ShareToTwitter />
              <ShareUrl />
            </div>
          </ShareText>
          <ShareButton />
        </ShareContainer>
      </ResultTypeImageBottom>
    </>
  );
}

const ResultType = tw.div`
`;

const ResultTypeImage = tw.img`
`;

const ResultTypeImageBottom = tw.div`
h-96 bg-[#D8C5FD] flex flex-col items-center
`;

const ResultTypeImageReplay = tw.button`
text-[22px] w-[180px] h-[52px] left-1/2 bg-[#8152F1] shadow-3xl rounded-[50px] text-[#ffffff] mt-10
`;

const TotalTypeButton = tw.button`
text-[22px] w-[180px] h-[52px] left-1/2 bg-[#8152F1] shadow-3xl rounded-[50px] text-[#ffffff] mt-10
`;

const ShareContainer = tw.div`
  mt-12
`;

const ShareText = tw.span`
`;

const ShareButton = tw.div`
`;

export default ResultImage;
