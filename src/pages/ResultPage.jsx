import React, { useState } from 'react';
import ResultModal from '../components/ResultModal';

function ResultPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  return (
    <div>
      <button onClick={handleModalOpen}>전체 유형 보기</button>
      {isModalOpen && <ResultModal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}

export default ResultPage;
