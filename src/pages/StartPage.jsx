import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const StartPage = () => {
  return (
    <StartContainer>
      <Link to="/main">시작 페이지입니다.</Link>
    </StartContainer>
  );
};

const StartContainer = tw.div`
  border-solid
  border-2
  border-sky-500
  text-red-500
`;

export default StartPage;
