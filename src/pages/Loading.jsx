import React from 'react';
import { Container } from '../styles/style';
import tw from 'tailwind-styled-components';
import loadingVirus from '../../public/loadingVirus.svg';
const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingP>드디어 퇴근!</LoadingP>
      <LoadingP>오늘도 살아남았다....</LoadingP>
      <img src={loadingVirus} alt="" />
      <div className="flex justify-center items-center">
        <LoadingP>나의 생존 유형 분석 중</LoadingP>
        <LoadingP>...</LoadingP>
      </div>
    </LoadingContainer>
  );
};

const LoadingContainer = tw(Container)`
bg-[#FEF5EC] justify-center
`;

const LoadingP = tw.p`
  text-loadingFont text-[22px]
`;

export default Loading;
