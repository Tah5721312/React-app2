import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App'
import Page2 from './page2';
import {ThemeProvider} from "./Context/Datacontext";
  

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
  },
  {
    path: "/Page2",
    element:<Page2 />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
    
  </StrictMode>,
)
