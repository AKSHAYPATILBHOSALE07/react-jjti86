import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Route,
  Routes,
  useNavigate,
  Router,
  BrowserRouter,
} from 'react-router-dom';
import Data from './Pages/Data';

import App from './App';
//import ResponsiveAppBar from './Components/ResponsiveAppBar';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      {/* <ResponsiveAppBar /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="data" element={<Data />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
