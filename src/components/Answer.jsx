import React from 'react';
import tw from 'tailwind-styled-components';

const Answer = ({ page, setPage, val, idx, mbtiList, setMbtiList }) => {
  const handleClickAnswer = (type, idx) => {
    const newMbtiList =
      mbtiList.map(mbti => {
        if(type === mbti.type) {
          return {...mbti, count: mbti.count + 1}
        }
        return mbti
      })
    
    setMbtiList(newMbtiList)
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
  cursor-pointer
  bg-[#DABDFC]
  border-solid border-2
  border-slate-900
  rounded-xl
  p-5
  text-center
  mb-6
  text-xl
  shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
  active:bg-mainPurple
`;

export default Answer;
