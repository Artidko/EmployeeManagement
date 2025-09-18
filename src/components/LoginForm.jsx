import React, { useState } from "react";

const COLORS = {
  primary: "#054A91",
  secondary: "#3E7CB1",
  accent: "#81A4CD",
  canvas: "#DBE4EE",
};

export default function LoginForm({ onLogin }) {
  const [type, setType] = useState("user");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    // demo: เข้าระบบได้เลย
    onLogin?.(type);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundColor: COLORS.canvas }}
    >
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <div className="mx-auto mb-6 w-16 h-16 rounded-full flex items-center justify-center"
             style={{ backgroundColor: COLORS.primary }}>
          <i className="fas fa-user text-white text-xl" />
        </div>

        <h1 className="text-2xl font-semibold text-gray-900 text-center">เข้าสู่ระบบ</h1>
        <p className="text-sm text-gray-500 text-center mt-1">ระบบจัดการพนักงาน</p>

        <form className="mt-6 space-y-4" onSubmit={submit}>
          <div>
            <label className="block text-sm text-gray-700 mb-1">ประเภทผู้ใช้</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2"
              style={{ boxShadow: `0 0 0 2px transparent`,  }}
            >
              <option value="user">พนักงาน (User)</option>
              <option value="admin">ผู้ดูแล (Admin)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">ชื่อผู้ใช้</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="กรอกชื่อผู้ใช้"
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2"
              style={{ outlineColor: COLORS.accent }}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">รหัสผ่าน</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="กรอกรหัสผ่าน"
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2"
              style={{ outlineColor: COLORS.accent }}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-white transition active:scale-[.99]"
            style={{ backgroundColor: COLORS.primary }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = COLORS.secondary)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = COLORS.primary)}
          >
            <i className="fas fa-sign-in-alt" /> เข้าสู่ระบบ
          </button>

          <p className="text-xs text-gray-500 text-center pt-1">
            Demo: ใช้ชื่อผู้ใช้และรหัสผ่านใดก็ได้
          </p>
        </form>
      </div>
    </div>
  );
}
