import React, { useEffect, useRef } from 'react';
import tw from 'tailwind-styled-components';
import viruses from '../utils/virusDummy.json';

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
      <Title>바이러스 전체유형</Title>
      <VirusListModal>
        {viruses.virusList.map(virus => (
          <Virus key={virus.id}>
            <VirusImg src={virus.image} alt="바이러스 사진" />
            <VirusName>{virus.name}</VirusName>
          </Virus>
        ))}
      </VirusListModal>
      <CloseButton onClick={handleModalClose}>
        <ButtonText>닫기</ButtonText>
      </CloseButton>
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
  absolute bottom-3 w-[122px] h-[46px] left-1/2 transform -translate-x-1/2 bg-[#8152F1] shadow-3xl rounded-[50px] leading-[33px] text-[#ffffff]
`;

const ButtonText = tw.span`
text-[24px]
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
  text-xs text-[#]
`;

export default ResultModal;
