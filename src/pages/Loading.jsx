import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../styles/style';
import loadingVirus from '../assets/loadingVirus.svg';
import tw from 'tailwind-styled-components';

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
      <img src={loadingVirus} alt="로딩중" />
      <div className="flex justify-center items-center">
        <LoadingP>나의 바이러스 유형 분석 중</LoadingP>
        <LoadingP>...</LoadingP>
      </div>
    </LoadingContainer>
  );
};

const LoadingContainer = tw(Container)`
justify-center
`;

const LoadingP = tw.p`
text-loadingFont text-[22px]
`;

export default Loading;
