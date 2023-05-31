import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import StartPage from './pages/StartPage';
import QuestionPage from './pages/QuestionPage';

function App() {
  const [page, setPage] = useState(0);

  return (
    <StyledApp>
      <Iphone14Size>
        <Routes>
          <Route
            path="/"
            element={<StartPage page={page} setPage={setPage} />}
          />
          <Route
            path="/main"
            element={<QuestionPage page={page} setPage={setPage} />}
          />
        </Routes>
      </Iphone14Size>
    </StyledApp>
  );
}

const StyledApp = tw.div`
  flex
  justify-center
`;

const Iphone14Size = tw.div`
  w-[390px]
  h-[844px]
`;

export default App;
