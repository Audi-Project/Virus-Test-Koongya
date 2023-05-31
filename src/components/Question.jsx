import React from 'react';
import tw from 'tailwind-styled-components';

const Question = ({ page, val, idx }) => {
  return (
    <QuestionContainer
      key={idx}
      className="question"
      style={{ display: page === idx + 1 ? 'flex' : 'none' }}
    >
      {val.question.map((questionVal, questionIdx) => (
        <div key={questionIdx} className="questionItem">
          {questionVal}
        </div>
      ))}
    </QuestionContainer>
  );
};

const QuestionContainer = tw.div`
  flex
  justify-center
  bg-[#FFFFFF]
  border-solid
  border
  border-slate-900
  rounded-xl
  p-5
  text-center
  mb-5
`;

export default Question;
