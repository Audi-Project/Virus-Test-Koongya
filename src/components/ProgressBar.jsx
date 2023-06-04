import React from 'react'
import tw from 'tailwind-styled-components';
import virus from '../assets/ProgressBar/virus_icon.svg'
import pill from '../assets/ProgressBar/pill_icon.svg'

const ProgressBar = ({ page, idx, questionList}) => {


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
          style={{ display: page === idx + 1 ? 'flex' : 'none', width: `calc((${page} / ${questionList.length}) * 100%)`}}>
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
  flex
  text-xl
  mb-6
`
const Bar = tw.div`
  flex
  items-center
  bg-[rgba(0,0,0,0.2)]
  rounded-[4px]
  mb-6
  h-4
  w-full
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
  w-full
  mt-[-50px]
  mr-[-10px]
`

const PillIcon = tw.img`
  h-[35px]
  w-[35px]
`

const Progress = tw.div`
  flex
  bg-[#7000FF]
  rounded-[4px]
  h-4
  w-[calc((1 / 12) * 100 %)]
`

export default ProgressBar