import React from 'react';
import './App.css';
import {
  BrowserRouter, Route,
  Routes,
} from 'react-router-dom';
import Layout from './component/templates/Layout';
import CreatePage from './component/organisms/CreatePage/CreatePage';
import EditPage from './component/organisms/EditPage/EditPage';
import LoginPage from './component/organisms/LoginPage/LoginPage';
import AuthLayout from './component/templates/AuthLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="user" element={<Layout />}>
            <Route path="edit" element={<EditPage />} />
          </Route>
          <Route path="create" element={<CreatePage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
