import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import tw from 'tailwind-styled-components';
import StartPage from './pages/StartPage';
import QuestionPage from './pages/QuestionPage';

function App() {

  return (
    <StyledApp>
      <Iphone14Size>
        <Routes>
          <Route
            path="/"
            element={<StartPage />}
          />
          <Route
            path="/main"
            element={<QuestionPage />}
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
