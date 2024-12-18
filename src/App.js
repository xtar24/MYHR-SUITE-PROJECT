import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
