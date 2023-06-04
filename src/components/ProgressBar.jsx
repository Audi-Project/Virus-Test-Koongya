import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import virus from '../assets/ProgressBar/virus_icon.svg'
import pill from '../assets/ProgressBar/pill_icon.svg'

const ProgressBar = ({ page, idx, questionList}) => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    setProgressWidth((page / questionList.length) * 100);
  }, [page, questionList]);

  return (
    <ProgressBarContainer>
      <CurrentPage
        style={{ display: page === idx + 1 ? 'flex' : 'none' }}
      >
        {`${page} / ${questionList.length}`}
      </CurrentPage>
      <Bar
        style={{ display: page === idx + 1 ? 'flex' : 'none' }}
      >
        <Progress
          style={{ display: page === idx + 1 ? 'flex' : 'none', width: `${progressWidth}%`}}>
        </Progress>
        <VirusIcon
          src={virus}
          style={{ display: page === idx + 1 ? 'flex' : 'none' }}
        />
      </Bar>
      <PillContainer>
          <PillIcon
            src={pill}
            style={{ display: page === idx + 1 ? 'flex' : 'none' }}
          />
      </PillContainer>
    </ProgressBarContainer>

  )
}

const ProgressBarContainer = tw.div`
  flex
  flex-col
`

const CurrentPage = tw.div`
  text-xl
  mb-6
`

const Bar = tw.div`
  items-center
  bg-[#DABDFC]
  rounded-[4px]
  mb-6
  h-4
`

const VirusIcon = tw.img`
  h-[57px]
  w-[57px]
  mx-[-40px]
  z-10
`

const PillContainer = tw.div`
  flex
  justify-end
  mt-[-50px]
  mr-[-10px]
`

const PillIcon = tw.img`
  h-[35px]
  w-[35px]
`

const Progress = tw.div`
  bg-[#7000FF]
  rounded-[4px]
  h-4
  ease-in-out duration-300
`

export default ProgressBar