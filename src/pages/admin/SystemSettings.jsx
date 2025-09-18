import React from "react";

export default function SystemSettings() {
  return (
    <div className="fade-in space-y-6">
      {/* General Settings */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold mb-6">
          <i className="fas fa-cog mr-2 text-blue-500" />
          การตั้งค่าทั่วไป
        </h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" defaultValue="บริษัท ABC จำกัด" className="border rounded-lg px-4 py-2" />
          <select className="border rounded-lg px-4 py-2">
            <option>GMT+7 (Bangkok)</option>
            <option>GMT+8 (Singapore)</option>
            <option>GMT+9 (Tokyo)</option>
          </select>
          <select className="border rounded-lg px-4 py-2">
            <option>ไทย</option>
            <option>English</option>
            <option>中文</option>
          </select>
          <select className="border rounded-lg px-4 py-2">
            <option>DD/MM/YYYY</option>
            <option>MM/DD/YYYY</option>
            <option>YYYY-MM-DD</option>
          </select>
        </form>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold mb-6">
          <i className="fas fa-shield-alt mr-2 text-red-500" />
          การตั้งค่าความปลอดภัย
        </h3>
        <div className="space-y-4">
          <label className="flex items-center justify-between">
            <span>การยืนยันตัวตนแบบ 2 ขั้นตอน</span>
            <input type="checkbox" />
          </label>
          <label className="flex items-center justify-between">
            <span>บังคับเปลี่ยนรหัสผ่านทุก 90 วัน</span>
            <input type="checkbox" defaultChecked />
          </label>
          <label className="flex items-center justify-between">
            <span>บันทึกการเข้าใช้งาน</span>
            <input type="checkbox" defaultChecked />
          </label>
        </div>
      </div>

      {/* Save Settings */}
      <div className="bg-white rounded-xl shadow-lg p-8 flex justify-end space-x-4">
        <button className="bg-gray-500 text-white px-6 py-2 rounded-lg">รีเซ็ต</button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">บันทึก</button>
      </div>
    </div>
  );
}
