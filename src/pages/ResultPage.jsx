import React, { useState } from 'react';
import ResultModal from '../components/ResultModal';
import { useParams } from 'react-router-dom';

function ResultPage() {
  const { mbti } = useParams();
  console.log(mbti);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  return (
    <div>
      {isModalOpen && <ResultModal setIsModalOpen={setIsModalOpen} />}
      <button onClick={handleModalOpen}>전체 유형 보기</button>
    </div>
  );
}

export default ResultPage;
