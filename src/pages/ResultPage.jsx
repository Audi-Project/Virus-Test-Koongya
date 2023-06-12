import React, { useState } from 'react';
import ResultModal from '../components/ResultModal';
import ResultImage from '../components/ResultImage';
import { useParams } from 'react-router-dom';

function ResultPage() {
  const { mbti } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen && <ResultModal setIsModalOpen={setIsModalOpen} />}
      <ResultImage mbtiType={mbti} handleModalOpen={handleModalOpen} />
    </>
  );
}

export default ResultPage;
