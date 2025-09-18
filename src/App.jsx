import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("user");
  const [activeMenu, setActiveMenu] = useState("profile");

  const handleLogin = (type) => {
    setIsLoggedIn(true);
    setUserType(type);
    setActiveMenu(type === "admin" ? "dashboard" : "profile");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType("user");
    setActiveMenu("profile");
  };

  return (
    <div className="min-h-screen">
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <MainLayout
          userType={userType}
          activeMenu={activeMenu}
          onMenuClick={setActiveMenu}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}
