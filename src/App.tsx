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




import { Routes, Route, Navigate } from 'react-router-dom';
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
import ProfileSettings from './Admin_dashboard/ProfileSettings';
import VehicleRefuelingValidation from './Admin_dashboard/VehicleRefuelingValidation';
import DashboardLayout from './Station_Dashboard/Slayout';
import DashboardMain from './Station_Dashboard/Sdashboard';
import RefuelingDashboard from './Station_Dashboard/RefuelingDashboard';
import ReportMain from './Station_Dashboard/Sreport';
import ProfileSetting from './Station_Dashboard/Sprofile';
import Bdashboard from './Boss_dashboard/Bdashboard';
import Blayout from './Boss_dashboard/Blayout';
import Breport from './Boss_dashboard/Breports';
import Profile from './Boss_dashboard/Bprofile';

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/forgot" element={<ForgotPassword />} />

      {/* Admin dashboard routes */}
      <Route path="/admin" element={<Layout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="stations" element={<StationManagement />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="vehicles" element={<VehicleManagement />} />
        <Route path="drivers" element={<DriverManagement />} />
        <Route path="reports" element={<Report />} />
        <Route path="settings" element={<ProfileSettings />} />
        <Route path="fuel" element={<VehicleRefuelingValidation />} />
      </Route>

      {/* Station dashboard routes */}
      <Route path="/station" element={<Blayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Bdashboard />} />
        <Route path="fuel-services" element={<RefuelingDashboard />} />
        <Route path="reports" element={<ReportMain />} />
        <Route path="profile" element={<ProfileSetting />} />
        {/* Add more station-specific routes here */}
      </Route>

      {/* Boss dashboard routes */}
      <Route path="/boss" element={<DashboardLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<DashboardMain />} />
        <Route path="reports" element={<Breport />} />
        <Route path="profile" element={<Profile />} />
        {/* Add more station-specific routes here */}
      </Route>
      {/* Root redirect */}
      <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />

      {/* Catch all route for 404 */}
      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  );
}

export default App;

