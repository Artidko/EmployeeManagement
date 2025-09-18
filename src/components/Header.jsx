import React from "react";

const COLORS = {
  primary: "#054A91",
  secondary: "#3E7CB1",
  accent: "#81A4CD",
  canvas: "#DBE4EE",
};

export default function Header({ userType, activeMenu }) {
  const title = (() => {
    if (userType === "admin") {
      switch (activeMenu) {
        case "dashboard": return "Admin Dashboard";
        case "employees": return "จัดการพนักงาน";
        case "requests": return "คำขอพนักงาน";
        case "timetrack": return "เวลาเข้าออกงาน";
        case "payroll": return "จัดการเงินเดือน";
        case "reports": return "รายงานต่างๆ";
        case "settings": return "ตั้งค่าระบบ";
        default: return "Admin Dashboard";
      }
    } else {
      switch (activeMenu) {
        case "profile": return "My Profile";
        case "salary": return "เงินเดือนของฉัน";
        case "attendance": return "การเข้าออกงาน";
        case "leave": return "ขอลา";
        case "documents": return "เอกสารสัญญา";
        default: return "Employee Portal";
      }
    }
  })();

  return (
    <header
      className="px-8 py-5 border-b"
      style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7EB" }}
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold" style={{ color: COLORS.primary }}>
            {title}
          </h1>
          <p className="text-sm mt-1" style={{ color: COLORS.secondary }}>
            {userType === "admin" ? "ระบบจัดการสำหรับผู้ดูแล" : "ยินดีต้อนรับสู่ระบบพนักงาน"}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-medium" style={{ color: COLORS.primary }}>
              {userType === "admin" ? "ผู้ดูแลระบบ" : "พนักงาน"}
            </p>
            <p className="text-xs" style={{ color: COLORS.accent }}>
              {new Date().toLocaleDateString("th-TH", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: COLORS.accent }}
          >
            <i className={`fas ${userType === "admin" ? "fa-user-shield" : "fa-user"} text-white`} />
          </div>
        </div>
      </div>
    </header>
  );
}
