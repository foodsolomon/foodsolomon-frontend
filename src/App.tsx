import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/common/Header';
import Home from './pages/Home';
import RestaurantListPage from './pages/RestaurantListPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import Footer from './components/common/Footer';
import MoodSelectPage from './pages/MoodSelectPage';
import WorldcupStartPage from './pages/WorldcupStartPage';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { setToken } from './redux/slices/usersSlice';

function App() {
  const token = useSelector((state: any) => state.user.token);
  const [cookies] = useCookies(['jwt']);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token === null) {
      const { jwt } = cookies;
      if (jwt) {
        dispatch(setToken(jwt));
      }
    }
  }, [dispatch, token, cookies]);

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
