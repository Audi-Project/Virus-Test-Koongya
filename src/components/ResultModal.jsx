import React, { useEffect, useRef } from 'react';
import viruses from '../utils/virusDummy.json';
import tw from 'tailwind-styled-components';

function ResultModal({ setIsModalOpen }) {
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const modalRef = useRef(null);

  useEffect(() => {
    const handleModalOutClick = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener('mousedown', handleModalOutClick);
    document.addEventListener('touchstart', handleModalOutClick);

    return () => {
      document.removeEventListener('mousedown', handleModalOutClick);
      document.removeEventListener('touchstart', handleModalOutClick);
    };
  });
  return (
    <Container ref={modalRef}>
      {/* <ContainerTitle> */}
      <Title>바이러스 전체유형</Title>
      {/* </ContainerTitle> */}
      <VirusListModal>
        {viruses.virusList.map(virus => (
          <Virus key={virus.id}>
            <VirusImg src={virus.image} alt="바이러스 사진" />
            <VirusName>{virus.name}</VirusName>
          </Virus>
        ))}
      </VirusListModal>
      <CloseButton onClick={handleModalClose}>닫기</CloseButton>
    </Container>
  );
}

const Container = tw.div`
  fixed
  inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-[10px] z-50 w-[366px] h-[531px] flex flex-col items-center border-[3px] border-solid border-[#8059E6]
`;

const Title = tw.div`
  inline-block w-[184px] h-[28px] text-2xl mt-4 text-[#8059E6]
`;
const CloseButton = tw.button`
  absolute bottom-3 w-[122px] h-[46px] left-1/2 transform -translate-x-1/2 bg-[#8152F1] shadow-[2px 2px 0px rgba(128,89,230,0.2)] rounded-[50px]
`;
const VirusListModal = tw.div`
  grid grid-rows-4 grid-cols-4 w-[329px] h-[381px] items-center gap-5
`;
const Virus = tw.div`
  flex-col flex justify-between h-[80.25px] mt-9
`;
const VirusImg = tw.img`
`;
const VirusName = tw.div`
  text-xs
`;
export default ResultModal;
