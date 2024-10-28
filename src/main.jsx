import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  { path: "/", element: <div>I am from React Router</div> },
  {
    path: "/about",
    element: <div>Hello From About section</div>,
  },
  {
    path: "/contact",
    element: <div>Cell Me</div>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);