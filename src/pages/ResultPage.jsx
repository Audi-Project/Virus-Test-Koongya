import React, { useState } from 'react';
import ResultModal from '../components/ResultModal';
import ResultImage from '../components/ResultImage';

function ResultPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  let mbtiType = 'INFJ';

  return (
    <>
      {isModalOpen && <ResultModal setIsModalOpen={setIsModalOpen} />}
      <ResultImage mbtiType={mbtiType} handleModalOpen={handleModalOpen} />
    </>
  );
}

export default ResultPage;
