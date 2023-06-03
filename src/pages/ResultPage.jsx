import React, { useState } from 'react';
import ResultModal from '../components/ResultModal';

function ResultPage() {
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
