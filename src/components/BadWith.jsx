import { Link } from 'react-router-dom';

const BadWith = ({ mbtiType }) => {
  const mbtiLinks = {
    ENFP: 'ISTP',
    INFJ: 'ESTJ',
    ISTJ: 'ENFJ',
    ESFP: 'INTP',
    ENFJ: 'ISTJ',
    ISFP: 'ENTP',
    ISTP: 'ENFP',
    ESTJ: 'INFJ',
    ESTP: 'INFP',
    ISFJ: 'ENTJ',
    INFP: 'ESTP',
    ESFJ: 'INTJ',
    ENTP: 'ISFP',
    INTJ: 'ESFJ',
    INTP: 'ESFP',
    ENTJ: 'ISFJ',
  };

  const linkTo = mbtiLinks[mbtiType];
  return (
    <>
      {' '}
      <Link
        to={`/result/${linkTo}`}
        className="absolute bottom-[20px] left-[210px] w-[160px] h-[150px] cursor-pointer"
      ></Link>
    </>
  );
};

export default BadWith;
