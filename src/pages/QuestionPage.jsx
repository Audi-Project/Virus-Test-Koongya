import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import ProgressBar from '../components/ProgressBar';
import Question from '../components/Question';
import { questionList } from '../components/QuestionList';
import Answer from '../components/Answer';
import Loading from '../components/Loading';

const QuestionPage = () => {
  const [page, setPage] = useState(1);
  const [mbti, setMbit] = useState(null);
  const [isLaoding, setIsLoading] = useState(false);
  const [mbtiList, setMbtiList] = useState([
    { type: 'E', count: 0 },
    { type: 'I', count: 0 },
    { type: 'S', count: 0 },
    { type: 'N', count: 0 },
    { type: 'T', count: 0 },
    { type: 'F', count: 0 },
    { type: 'P', count: 0 },
    { type: 'J', count: 0 },
  ]);

  useEffect(() => {
    if (page === 13) {
      const sortedList = mbtiList.sort((a, b) => b.count - a.count);
      const topFour = sortedList.slice(0, 4);
      const topFourTypes = topFour.map(item => item.type);
      console.log(mbtiList);
      setMbit(topFourTypes.join(''));
      setIsLoading(true);
    }
  }, [page]);

  if (!isLaoding) {
    return (
      <QuestionPageContainer>
        {questionList.map((val, idx) => (
          <QuestionAnswer key={idx}>
            <ProgressBar page={page} idx={idx} questionList={questionList} />
            <Question page={page} val={val} idx={idx} />
            <Answer
              page={page}
              val={val}
              idx={idx}
              setPage={setPage}
              mbtiList={mbtiList}
              setMbtiList={setMbtiList}
            />
          </QuestionAnswer>
        ))}
      </QuestionPageContainer>
    );
  } else if (isLaoding) {
    return <Loading mbti={mbti} />;
  }
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