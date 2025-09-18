import React from "react";

const COLORS = {
  primary: "#054A91",
  secondary: "#3E7CB1",
  accent: "#81A4CD",
  canvas: "#DBE4EE",
};

const USER_MENU = [
  { id: "profile", icon: "fas fa-user", label: "My Profile" },
  { id: "salary", icon: "fas fa-money-bill-wave", label: "เงินเดือนของฉัน" },
  { id: "attendance", icon: "fas fa-clock", label: "การเข้าออกงาน" },
  { id: "leave", icon: "fas fa-calendar-alt", label: "ขอลา" },
  { id: "documents", icon: "fas fa-file-contract", label: "เอกสารสัญญา" },
];

const ADMIN_MENU = [
  { id: "dashboard", icon: "fas fa-tachometer-alt", label: "Dashboard" },
  { id: "employees", icon: "fas fa-users", label: "จัดการพนักงาน" },
  { id: "requests", icon: "fas fa-inbox", label: "คำขอพนักงาน" },
  { id: "timetrack", icon: "fas fa-business-time", label: "เวลาเข้าออกงาน" },
  { id: "payroll", icon: "fas fa-calculator", label: "จัดการเงินเดือน" },
  { id: "settings", icon: "fas fa-cog", label: "ตั้งค่าระบบ" },
];

export default function Sidebar({ userType, activeMenu, onMenuClick, onLogout }) {
  const items = userType === "admin" ? ADMIN_MENU : USER_MENU;

  return (
    <aside
      className="w-64 min-h-screen p-6 flex flex-col justify-between text-white"
      style={{ backgroundColor: COLORS.primary }}
    >
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: COLORS.secondary }}
          >
            <i className={`fas ${userType === "admin" ? "fa-user-shield" : "fa-user"} text-white`} />
          </div>
          <h1 className="text-lg font-semibold">
            {userType === "admin" ? "Admin Panel" : "Employee Portal"}
          </h1>
        </div>

        <p className="text-sm mb-6" style={{ color: COLORS.accent }}>
          ระบบจัดการพนักงาน v3.0
        </p>

        <nav className="space-y-1">
          {items.map((m) => {
            const active = activeMenu === m.id;
            return (
              <button
                key={m.id}
                onClick={() => onMenuClick(m.id)}
                className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-3 transition"
                style={{
                  backgroundColor: active ? COLORS.secondary : "transparent",
                  color: active ? "#FFFFFF" : COLORS.canvas,
                }}
                onMouseOver={(e) => {
                  if (!active) e.currentTarget.style.backgroundColor = "#0b62b8"; // hover ของ secondary
                }}
                onMouseOut={(e) => {
                  if (!active) e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <i className={`${m.icon} w-5`} />
                <span className="truncate">{m.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <button
        onClick={onLogout}
        className="w-full mt-4 px-4 py-2 rounded-lg font-medium transition text-white"
        style={{ backgroundColor: COLORS.secondary }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = COLORS.accent)}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = COLORS.secondary)}
      >
        <i className="fas fa-power-off mr-2" />
        ออกจากระบบ
      </button>
    </aside>
  );
}
