//tailwind 공통 스타일 모음
import tw from 'tailwind-styled-components';
import styled from 'styled-components';

export const Container = tw.div`
  w-[390px] h-screen bg-bgPurple flex flex-col
`;

export const Button = tw.button`
bg-mainPurple rounded-[50px]
`;

export const TextLineP = styled.p`
  text-shadow: -2px -2px 0 #6938ea, 2px -2px 0 #6938ea, -2px 2px 0 #6938ea,
    2px 2px 0 #6938ea;
`;

export const ShareBtns = tw.div`
w-[270px] h-[50px] p-1 bg-transparent flex items-center justify-evenly self-center
`;
