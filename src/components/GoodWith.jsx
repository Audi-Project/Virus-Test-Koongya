import { Link } from 'react-router-dom';

const GoodWith = ({ mbtiType }) => {
  const mbtiLinks = {
    ENFP: 'INFJ',
    INFJ: 'ENFP',
    ISTJ: 'ESFP',
    ESFP: 'ISFJ',
    ENFJ: 'ISFP',
    ISFP: 'ESFJ',
    ISTP: 'ESTJ',
    ESTJ: 'INFP',
    ESTP: 'ISTJ',
    ISFJ: 'ESTP',
    INFP: 'ENFJ',
    ESFJ: 'ISTP',
    ENTP: 'INTJ',
    INTJ: 'ENTP',
    INTP: 'ENTJ',
    ENTJ: 'INTP',
  };

  const linkTo = mbtiLinks[mbtiType];
  return (
    <>
      <Link
        to={`/result/${linkTo}`}
        className="absolute bottom-[20px] left-[20px] w-[160px] h-[150px] cursor-pointer"
      ></Link>
    </>
  );
};

export default GoodWith;
