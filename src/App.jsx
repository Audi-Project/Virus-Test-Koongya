import './App.css';
import tw from 'tailwind-styled-components';
import viruses from './utils/virusDummy.json';
import ResultPage from './pages/resultPage';

function App() {
  console.log(viruses);

  return (
    <>
      <ResultPage />
    </>
  );
}

export default App;
