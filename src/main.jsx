import React from 'react';
import ReactDOM from 'react-dom/client';

import 'react-toastify/dist/ReactToastify.css'; 
import "./assets/css/bootstrap.min.css";
import "./index.css";
import { RouterProvider} from "react-router-dom";
import './index.css';
import router from './routes/Routes';
import ThemeProvider from './context/ThemeProvider';
import AuthProvider from "./context/AuthProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
       <ThemeProvider>
           <RouterProvider router={router} />
       </ThemeProvider>
   </AuthProvider>
  </React.StrictMode>
);