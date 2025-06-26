import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ToggleSwitch from './components/beginner/ToggleSwitch.jsx';
import Home from './components/Home.jsx';
import Beginner from './components/beginner/Beginner.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />, // or whatever you want as landing
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'beginner',
        element: <Beginner />,
      },
      {
        path: 'beginner/toggle-switch',
        element: <ToggleSwitch />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
