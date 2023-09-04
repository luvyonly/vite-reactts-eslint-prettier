import React from 'react';
// import Header from "./components/Header/Navbar";
import { Route, Routes } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import About from './pages/Container/About';
import Home from './pages/Container/Home';
import Pricing from './pages/Container/Pricing';
import Navbar from './pages/Header';
import * as S from './Styled';
// import slides from "./mock.json";

// interface test {
//   image: string;
//   title: string;
//   subTitle: string;
//   interval: number;
// }

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <S.Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </S.Container>
    </div>
  );
}

export default App;
