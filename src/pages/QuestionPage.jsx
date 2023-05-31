import React from 'react';
import Question from '../components/Question';
import Answer from '../components/Answer';
import { questionList } from '../components/QuestionList';
import tw from 'tailwind-styled-components';

const QuestionPage = ({ page, setPage }) => {
  return (
    <QuestionPageContainer>
      {questionList.map((val, idx) => (
        <QuestionAnswer key={idx}>
          <Question page={page} val={val} idx={idx} />
          <Answer page={page} val={val} idx={idx} setPage={setPage} />
        </QuestionAnswer>
      ))}
    </QuestionPageContainer>
  );
};

const QuestionPageContainer = tw.div`
  flex
  justify-center
  bg-[#F0E3FF]
  h-full
  p-5
`;

const QuestionAnswer = tw.div`
  flex
  flex-col
`;

export default QuestionPage;
