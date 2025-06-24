import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ToggleSwitch from './components/beginner/ToggleSwitch.jsx';
import Home from './components/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'beginner/toggle-switch',
        element: <ToggleSwitch />,
      },
      {
        path: '/home',
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
