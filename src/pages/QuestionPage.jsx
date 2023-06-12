import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { Container } from '../styles/style';
import ProgressBar from '../components/ProgressBar';
import Question from '../components/Question';
import { questionList } from '../components/QuestionList';
import Answer from '../components/Answer';
import Loading from '../components/Loading';

const QuestionPage = () => {
  const [page, setPage] = useState(1);
  const [mbti, setMbit] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mbtiList, setMbtiList] = useState([
    { index: 1, type: 'E', count: 0 },
    { index: 1, type: 'I', count: 0 },
    { index: 2, type: 'S', count: 0 },
    { index: 2, type: 'N', count: 0 },
    { index: 3, type: 'T', count: 0 },
    { index: 3, type: 'F', count: 0 },
    { index: 4, type: 'P', count: 0 },
    { index: 4, type: 'J', count: 0 },
  ]);

  useEffect(() => {
    if (page !== 13) {
      return;
    }
    const mbtiResultList = [1, 2, 3, 4].map(i => {
      const filteredType = mbtiList.filter(item => item.index === i);
      return filteredType.reduce((prev, curr) =>
        curr.count > prev.count ? curr : prev,
      );
    });

    const mbtiResult = mbtiResultList.map(item => item.type).join('');
    setMbit(mbtiResult);
    setIsLoading(true);
  }, [page]);

  return (
    <>
      {!isLoading && (
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
      )}
      {isLoading && <Loading mbti={mbti} />}
    </>
  );
};

const QuestionPageContainer = tw(Container)`
  flex
  p-5
`;

const QuestionAnswer = tw.div`
  flex
  flex-col
`;

export default QuestionPage;
