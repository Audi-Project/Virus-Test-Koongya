import React from 'react';
import tw from 'tailwind-styled-components';
import { Link } from 'react-router-dom';
import ESFP from '../assets/result/virus-imgs2/ESFP-result.png';
import ENFJ from '../assets/result/virus-imgs2/ENFJ-result.png';
import ENFP from '../assets/result/virus-imgs2/ENFP-result.png';
import ENTJ from '../assets/result/virus-imgs2/ENTJ-result.png';
import ENTP from '../assets/result/virus-imgs2/ENTP-result.png';
import ESFJ from '../assets/result/virus-imgs2/ESFJ-result.png';
import ESTJ from '../assets/result/virus-imgs2/ESTJ-result.png';
import ESTP from '../assets/result/virus-imgs2/ESTP-result.png';
import INFJ from '../assets/result/virus-imgs2/INFJ-result.png';
import INFP from '../assets/result/virus-imgs2/INFP-result.png';
import INTJ from '../assets/result/virus-imgs2/INTJ-result.png';
import INTP from '../assets/result/virus-imgs2/INTP-result.png';
import ISFJ from '../assets/result/virus-imgs2/ISFJ-result.png';
import ISTJ from '../assets/result/virus-imgs2/ISTJ-result.png';
import ISTP from '../assets/result/virus-imgs2/ISTP-result.png';
import ISFP from '../assets/result/virus-imgs2/ISFP-result.png';

function ResultImage({ mbtiType, handleModalOpen }) {
  let resultImage;
  if (mbtiType === 'INFJ') {
    resultImage = INFJ;
  }

  const handleGoMain = () => {};
  return (
    <>
      <ResultType>
        <ResultTypeImage src={resultImage} alt="타입별 결과지" />
      </ResultType>
      <ResultTypeImageBottom>
        <Link to="/">
          <ResultTypeImageReplay onClick={() => handleGoMain}>
            다시 하기
          </ResultTypeImageReplay>
        </Link>
        <TotalTypeButton onClick={handleModalOpen}>
          모든 유형 보기
        </TotalTypeButton>
        <ShareContainer>
          <ShareText>테스트 공유하기</ShareText>
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
w-[250px] h-[100px] bg-white mt-10
`;

const ShareText = tw.span`
`;

const ShareButton = tw.div`
`;

export default ResultImage;
