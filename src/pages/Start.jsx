import React from 'react';
import virus from '../../public/mainVirus.svg';
import styled from 'styled-components';
import 'animate.css';
import { Container } from '../styles/style';
import tw from 'tailwind-styled-components';

const Start = () => {
  return (
    <StartContinaer>
      <div className="mt-[69px]">
        <Title className="text-[60px]">바이러스</Title>
        <Title className="text-[48px]">진단 테스트</Title>
      </div>
      <img src={virus} alt="" />
      <button className="bg-mainPurple w-[280px] h-[78px] rounded-[50px] text-[34px] text-white">
        테스트 시작하기
      </button>
      {/*테스트 공유 컴포넌트 */}
      <div className="w-[270px] h-[82px]"></div>
    </StartContinaer>
  );
};

const StartContinaer = tw(Container)`
justify-between items-center 
`;

const Title = styled.p`
  background: linear-gradient(
    180.38deg,
    #8059e6 27.84%,
    rgba(128, 89, 230, 0.7) 44.67%,
    #8059e6 63.01%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export default Start;
