import './App.css';
import tw from 'tailwind-styled-components';

function App() {
  return (
    <>
      <h1 className="text-red-500">how to use Tailwind</h1>
      <p>djfkdjfkdf</p>
      <H>how to use Tailwind styled-compoenents</H>
      <p>아래 링크에서 vscode setting 하셔야합니다</p>
      <a href="https://www.npmjs.com/package/tailwind-styled-components">
        클릭하세요
      </a>
    </>
  );
}

const H = tw.h1`
  text-red-500
`;

export default App;
