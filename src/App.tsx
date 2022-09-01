import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/common/Header';
import Home from './pages/Home';
import RestaurantListPage from './pages/RestaurantListPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import Footer from './components/common/Footer';
import MoodSelectPage from './pages/MoodSelectPage';
import WorldcupStartPage from './pages/WorldcupStartPage';
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/restaurantList' element={<RestaurantListPage />} />
        <Route path='/restaurantDetail' element={<RestaurantDetailPage />} />
        <Route path='/moodSelect' element={<MoodSelectPage />} />
        <Route path='/worldcup' element={<WorldcupStartPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
