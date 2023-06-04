import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../styles/style';
import LoadingVirus from '../assets/loadingVirus.svg';
import tw from 'tailwind-styled-components';
import 'animate.css';
import styled from 'styled-components';

const Loading = () => {
  const navigation = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigation('/result');
    }, 2000);
  }, []);

  return (
    <LoadingContainer>
      <LoadingP>진단서를 작성하고 있습니다</LoadingP>
      <CloudDiv>
        <img src={LoadingVirus} alt="로딩중" />
      </CloudDiv>
      <div className="flex flex-col justify-center items-center">
        <LoadingP>나의 바이러스 유형</LoadingP>
        <LoadingP>분석 중...</LoadingP>
      </div>
    </LoadingContainer>
  );
};

const LoadingContainer = tw(Container)`
justify-center items-center gap-4
`;

const LoadingP = tw.p`
text-loadingFont text-[22px]
`;

const CloudDiv = styled.div`
  animation: motion 1s linear infinite alternate;
  margin-top: 0;

  @keyframes motion {
    0% {
      transform: translateY(15px);
    }
    50% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-15px);
    }
  }
`;

export default Loading;
