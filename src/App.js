import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layouts/Layout';
import Blog from './pages/Blog/Blog';
import FAQs from './pages/FAQs/FAQs';
import Home from './pages/Home/Home';
import Invest from './pages/Invest/Invest';
import Save from './pages/Save/Save';
import Stories from './pages/Stories/Stories';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='faqs' element={<FAQs/>}/>
          <Route path='invest' element={<Invest/>}/>
          <Route path='save' element={<Save/>}/>
          <Route path='stories' element={<Stories/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
