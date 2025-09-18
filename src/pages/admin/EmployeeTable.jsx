import React from "react";
import { mockEmployees } from "../../data/employees";

export function EmployeeTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-gray-700">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left font-medium text-gray-600">
              ชื่อ
            </th>
            <th className="px-4 py-3 text-left font-medium text-gray-600">
              ตำแหน่ง
            </th>
            <th className="px-4 py-3 text-left font-medium text-gray-600">
              แผนก
            </th>
            <th className="px-4 py-3 text-left font-medium text-gray-600">
              เงินเดือน
            </th>
            <th className="px-4 py-3 text-left font-medium text-gray-600">
              การจัดการ
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {mockEmployees.map((emp) => (
            <tr key={emp.id} className="hover:bg-gray-50">
              <td className="px-4 py-2">{emp.name}</td>
              <td className="px-4 py-2">{emp.position}</td>
              <td className="px-4 py-2">{emp.department}</td>
              <td className="px-4 py-2">฿{emp.salary.toLocaleString()}</td>
              <td className="px-4 py-2">
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">
                    แก้ไข
                  </button>
                  <button className="text-red-600 hover:text-red-800 text-sm">
                    ลบ
                  </button>
                  <button className="text-green-600 hover:text-green-800 text-sm">
                    ดู
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
