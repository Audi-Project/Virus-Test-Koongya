import React from 'react';
import virus from '../assets/mainVirus.svg';
import 'animate.css';
import testTitle from '../assets/title.png';
import { Button, Container } from '../styles/style';
import tw from 'tailwind-styled-components';
import { useNavigate } from 'react-router-dom';
import { ShareMainToKakao } from '../components/share/Kakao';
import ShareToFacebook from '../components/share/Facebook';
import ShareToTwitter from '../components/share/Twitter';
import ShareUrl from '../components/share/Link';
import styled from 'styled-components';

const Start = () => {
  const navigate = useNavigate();
  const HandleToMainPage = () => {
    navigate('/main');
  };
  return (
    <StartContainer>
      <Main>
        <img src={testTitle} alt="바이러스진단테스트" />
        <img src={virus} alt="virus" />
        <StartButton onClick={HandleToMainPage} onTouchEnd={HandleToMainPage}>
          <TextLineP>테스트 시작하기</TextLineP>
        </StartButton>
        <div className="w-[270px] h-[50px] p-1 bg-white flex items-center justify-between">
          <ShareMainToKakao />
          <ShareToFacebook />
          <ShareToTwitter />
          <ShareUrl />
        </div>
      </Main>
    </StartContainer>
  );
};

const Main = tw.div`
h-min-content flex flex-col justify-center gap-16 
`;

const StartContainer = tw(Container)`
items-center justify-center
`;

const StartButton = tw(Button)`
w-[280px] h-[78px]  text-[34px] text-white
`;

const TextLineP = styled.p`
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000. -1px 1px 0 #000,
    1px 1px 0 #000;
`;

export default Start;
