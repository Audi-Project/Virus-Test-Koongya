import React from 'react';
import virus from '../assets/mainVirus.svg';
import testTitle from '../assets/title.png';
import 'animate.css';
import { Button, Container } from '../styles/style';
import tw from 'tailwind-styled-components';
import { useNavigate } from 'react-router-dom';

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
        <StartButton onClick={HandleToMainPage}>테스트 시작하기</StartButton>
        <div className="w-[270px] h-[82px] bg-white">공유 컴포넌트 자리</div>
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

export default Start;
