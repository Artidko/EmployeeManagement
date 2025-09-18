import React from "react";

const COLORS = {
  primary: "#054A91",
  secondary: "#3E7CB1",
  accent: "#81A4CD",
  canvas: "#DBE4EE",
};

export default function Footer() {
  return (
    <footer
      className="px-8 py-4 border-t"
      style={{ backgroundColor: COLORS.canvas, borderColor: "#E5E7EB" }}
    >
      <div className="flex items-center justify-between text-sm">
        <p style={{ color: COLORS.primary }}>© 2024 ระบบจัดการพนักงาน. สงวนลิขสิทธิ์.</p>
        <p style={{ color: COLORS.secondary }}>เวอร์ชัน 3.0.0 • React + Tailwind</p>
      </div>
    </footer>
  );
}
