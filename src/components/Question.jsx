import React from 'react';
import tw from 'tailwind-styled-components';

const Question = ({ page, val, idx }) => {
  return (
    <QuestionContainer
      key={idx}
      style={{ display: page === idx + 1 ? 'flex' : 'none' }}
    >
      {val.question.map((questionVal, questionIdx) => (
        <QuestionItem key={questionIdx}>
          {questionVal}
        </QuestionItem>
      ))}
    </QuestionContainer>
  );
};

const QuestionContainer = tw.div`
  flex
  justify-center
  flex-col
  bg-[#FFFFFF]
  h-60
  border-solid border-2
  border-slate-900
  rounded-xl
  p-5
  my-6
  text-center
  text-2xl
`;

const QuestionItem = tw.div`
`

export default Question;
