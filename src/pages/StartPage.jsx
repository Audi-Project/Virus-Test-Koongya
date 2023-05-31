import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const StartPage = ({ page, setPage }) => {
  return (
    <StyledF
      onClick={() => {
        setPage(1);
        console.log(page);
      }}
    >
      <Link to="/main">시작 페이지입니다.</Link>
    </StyledF>
  );
};

const StyledF = tw.div`
  border-solid
  border-2
  border-sky-500
  text-red-500
`;

export default StartPage;
