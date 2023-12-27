import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/notFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}
