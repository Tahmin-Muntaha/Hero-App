import { Children, Component, StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home/Home.jsx';
import AllApps from './Components/AllApss/AllApps.jsx';
import AppDetails from './Components/App_Details/AppDetails.jsx';

const router = createBrowserRouter([
  {
 path:'/',
 Component:Root,
  
  children:[
    {
      index:true,
      loader:async()=>(await fetch('/banner.json')).json(),
      Component:Home
      
    },
    {
      path:'/allapps',
      loader:async()=>(await fetch('/installed.json')).json(),
      Component:AllApps
    },
    {
      path:'/appdetails/:id',
      loader:async()=>(await fetch('/installed.json')).json(),
      Component:AppDetails
    }

  ]
  }
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
