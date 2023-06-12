import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../styles/style';
import LoadingVirus from '../assets/loadingVirus.svg';
import tw from 'tailwind-styled-components';
import 'animate.css';
import styled, { keyframes } from 'styled-components';

const Loading = ({ mbti }) => {
  const navigation = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigation(`/result/${mbti}`);
    }, 2000);
  }, []);

  return (
    <LoadingContainer>
      <LoadingP>진단서를 작성하고 있습니다</LoadingP>
      <CloudDiv className="animate-motion">
        <img src={LoadingVirus} alt="로딩중" />
      </CloudDiv>
      <div className="flex flex-col justify-center items-center">
        <LoadingP>나의 바이러스 유형</LoadingP>
        <div className="flex">
          <LoadingP>분석 중</LoadingP>
          <LoadingP className="animate-typing overflow-hidden">...</LoadingP>
        </div>
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
  margin-top: 0;
`;

export default Loading;
