// import { Routes, Route, Navigate } from 'react-router-dom';
// import Layout from './Admin_dashboard/Layout';
// import Dashboard from './Admin_dashboard/Dashboard';
// import LoginPage from './pages/Login';
// import ResetPassword from './pages/ResetPassword';
// import ForgotPassword from './pages/Forgot';

// import { ReactElement } from 'react';

// function ProtectedRoute({ element }: { element: ReactElement }) {

//   const isAuthenticated = localStorage.getItem("authToken"); 

//   return isAuthenticated ? element : <Navigate to="/login" replace />;

// }

// function App() {
//   return (
//     <Routes>
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/reset-password" element={<ResetPassword />} />
//       <Route path="/forgot" element={<ForgotPassword />} />
//       <Route path="/" element={<ProtectedRoute element={<Layout />} />}>
//         <Route path="dashboard" element={<Dashboard />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;




import { Routes, Route } from 'react-router-dom';
import Layout from './Admin_dashboard/Layout';
import Dashboard from './Admin_dashboard/Dashboard';
import LoginPage from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/Forgot';
import StationManagement from './Admin_dashboard/StationManagement';
import UserManagement from './Admin_dashboard/UserManagement';
import VehicleManagement from './Admin_dashboard/VehicleManagement';
import DriverManagement from './Admin_dashboard/DriverManagement';
import Report from './Admin_dashboard/Reports';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/forgot" element={<ForgotPassword />} />

      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/stations" element={<StationManagement />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/vehicles" element={<VehicleManagement />} />
        <Route path="/drivers" element={<DriverManagement />} />
        <Route path="/reports" element={<Report />} />
      </Route>
    </Routes>
  );
}

export default App;

