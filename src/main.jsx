import { Children, Component, StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home/Home.jsx';

const router = createBrowserRouter([
  {
 path:'/',
 Component:Root,
  
  Children:[
    {
      index:true,
      Component:Home
      
    }
  ]
  }
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
