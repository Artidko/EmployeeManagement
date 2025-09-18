import React from "react";
import { mockEmployees } from "../../data/employees";

export default function EmployeeManagement() {
  return (
    <div className="fade-in space-y-6">
      {/* Add Employee */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">
          <i className="fas fa-user-plus mr-2 text-blue-500" />
          เพิ่มพนักงานใหม่
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="ชื่อ-นามสกุล" className="border rounded-lg px-4 py-2" />
          <input type="text" placeholder="รหัสพนักงาน" className="border rounded-lg px-4 py-2" />
          <input type="text" placeholder="ตำแหน่ง" className="border rounded-lg px-4 py-2" />
          <select className="border rounded-lg px-4 py-2">
            <option>IT</option>
            <option>HR</option>
            <option>Finance</option>
            <option>Marketing</option>
            <option>Sales</option>
          </select>
          <input type="number" placeholder="เงินเดือน" className="border rounded-lg px-4 py-2" />
          <input type="date" className="border rounded-lg px-4 py-2" />
          <button
            type="submit"
            className="bg-[#054A91] text-white font-semibold px-4 py-2 rounded-lg col-span-2"
          >
            เพิ่มพนักงาน
          </button>
        </form>
      </div>

      {/* Employee List */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold mb-4">รายชื่อพนักงาน</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 border-b border-gray-200 text-left">รหัส</th>
                <th className="px-4 py-2 border-b border-gray-200 text-left">ชื่อ</th>
                <th className="px-4 py-2 border-b border-gray-200 text-left">ตำแหน่ง</th>
                <th className="px-4 py-2 border-b border-gray-200 text-left">แผนก</th>
                <th className="px-4 py-2 border-b border-gray-200 text-left">เงินเดือน</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockEmployees.map((emp) => (
                <tr key={emp.id}>
                  <td className="px-4 py-2">EMP00{emp.id}</td>
                  <td className="px-4 py-2">{emp.name}</td>
                  <td className="px-4 py-2">{emp.position}</td>
                  <td className="px-4 py-2">{emp.department}</td>
                  <td className="px-4 py-2">฿{emp.salary.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
