import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Pages (User)
import UserProfile from "../pages/user/UserProfile";
import UserSalary from "../pages/user/UserSalary";
import UserAttendance from "../pages/user/UserAttendance";
import UserLeave from "../pages/user/UserLeave";
import UserDocuments from "../pages/user/UserDocuments";

// Pages (Admin)
import AdminDashboard from "../pages/admin/AdminDashboard";
import EmployeeManagement from "../pages/admin/EmployeeManagement";
import EmployeeRequests from "../pages/admin/EmployeeRequests";
import TimeTracking from "../pages/admin/TimeTracking";
import PayrollManagement from "../pages/admin/PayrollManagement";
import Reports from "../pages/admin/Reports";
import SystemSettings from "../pages/admin/SystemSettings";

export default function MainLayout({ userType, activeMenu, onMenuClick, onLogout }) {
  const renderContent = () => {
    if (userType === "admin") {
      switch (activeMenu) {
        case "dashboard":
          return <AdminDashboard />;
        case "employees":
          return <EmployeeManagement />;
        case "requests":
          return <EmployeeRequests />;
        case "timetrack":
          return <TimeTracking />;
        case "payroll":
          return <PayrollManagement />;
        case "reports":
          return <Reports />;
        case "settings":
          return <SystemSettings />;
        default:
          return <AdminDashboard />;
      }
    } else {
      switch (activeMenu) {
        case "profile":
          return <UserProfile />;
        case "salary":
          return <UserSalary />;
        case "attendance":
          return <UserAttendance />;
        case "leave":
          return <UserLeave />;
        case "documents":
          return <UserDocuments />;
        default:
          return <UserProfile />;
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar userType={userType} activeMenu={activeMenu} onMenuClick={onMenuClick} onLogout={onLogout} />

      <div className="flex-1 flex flex-col">
        <Header userType={userType} activeMenu={activeMenu} />

        <main className="flex-1 p-8 overflow-y-auto">
  <div className="w-full">{renderContent()}</div>
</main>




        <Footer />
      </div>
    </div>
  );
}
