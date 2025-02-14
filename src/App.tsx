import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Admin_dashboard/Layout';
import Dashboard from './Admin_dashboard/Dashboard';
import LoginPage from './pages/Login';

import { ReactElement } from 'react';

function ProtectedRoute({ element }: { element: ReactElement }) {
  const isAuthenticated = localStorage.getItem("authToken"); // Example authentication check

  return isAuthenticated ? element : <Navigate to="/login" replace />;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<ProtectedRoute element={<Layout />} />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
