import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App'
import Quiz from "./pages/QuizScreen";
import './index.css'
import Results from './pages/Results';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "quiz",
    element: <Quiz/>,
  },
  {
    path: "resultados",
    element: <Results/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
