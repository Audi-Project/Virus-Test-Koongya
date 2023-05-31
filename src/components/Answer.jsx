import React, { useState } from 'react';
import tw from 'tailwind-styled-components';

const Answer = ({ page, setPage, val, idx }) => {
  const [mbtiList, setMbtiList] = useState([
    { name: 'E', count: 0 },
    { name: 'I', count: 0 },
    { name: 'S', count: 0 },
    { name: 'N', count: 0 },
    { name: 'T', count: 0 },
    { name: 'F', count: 0 },
    { name: 'P', count: 0 },
    { name: 'J', count: 0 },
  ]);

  const handleClickAnswer = (type, idx) => {
    for (let i = 0; i < mbtiList.length; i++) {
      if (mbtiList[i].name === type) {
        mbtiList[i].count = mbtiList[i].count + 1;
      }
    }

    setMbtiList(mbtiList);
    setPage(page + 1);
  };

  return (
    <AnswerContainer
      className="answer"
      style={{ display: page === idx + 1 ? 'flex' : 'none' }}
    >
      {val.answer.map((answerVal, answerIdx) => (
        <AnswerItem
          key={answerIdx}
          onClick={() => handleClickAnswer(answerVal.type, idx)}
        >
          {answerVal.text}
        </AnswerItem>
      ))}
    </AnswerContainer>
  );
};

const AnswerContainer = tw.div`
  flex
  flex-col
  justify-center
`;

const AnswerItem = tw.div`
  flex
  justify-center
  bg-[#DABDFC]
  border-solid border
  border-slate-900
  rounded-xl
  p-5
  text-center
  mb-5
`;

export default Answer;
