// import { Route, Routes } from 'react-router-dom';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// layout
import Layout from './Layouts/Layout';

// pages
import Blog from './pages/Blog/Blog';
import FAQs from './pages/FAQs/FAQs';
import Ebook from './pages/Ebook/Ebook';
import Home from './pages/Home/Home';
import Invest from './pages/Invest/Invest';
import Save from './pages/Save/Save';
import Stories from './pages/Stories/Stories';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'blog',
        element: <Blog/>
      },
      {
        path: 'faqs',
        element: <FAQs/>
      },
      {
        path: 'invest',
        element: <Invest/>
      },{
        path: 'save',
        element: <Save/>
      }
      ,{
        path: 'stories',
        element: <Stories/>
      }
      ,{
        path: 'ebook',
        element: <Ebook/>
      }
    ]
  },
  {
    path:'login',
    element: <Signin/>
  }
  ,
  {
    path:'signup',
    element: <Signup/>
  }
]);

function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
