import React from "react";
import { mockEmployees } from "../../data/employees";

export default function PayrollManagement() {
  return (
    <div className="fade-in space-y-6">
      {/* Payroll Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-green-600 text-white p-6 rounded-xl">
          <p>เงินเดือนรวม</p>
          <p className="text-3xl font-bold">฿6.8M</p>
        </div>
        <div className="bg-blue-600 text-white p-6 rounded-xl">
          <p>จ่ายแล้ว</p>
          <p className="text-3xl font-bold">142 คน</p>
        </div>
        <div className="bg-yellow-500 text-white p-6 rounded-xl">
          <p>รอจ่าย</p>
          <p className="text-3xl font-bold">14 คน</p>
        </div>
        <div className="bg-purple-600 text-white p-6 rounded-xl">
          <p>เฉลี่ย</p>
          <p className="text-3xl font-bold">฿43.6K</p>
        </div>
      </div>

      {/* Payroll Table */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold mb-4">รายการเงินเดือน</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 border-b border-gray-200 text-left">พนักงาน</th>
                <th className="px-4 py-2 border-b border-gray-200 text-left">แผนก</th>
                <th className="px-4 py-2 border-b border-gray-200 text-left">เงินเดือน</th>
                <th className="px-4 py-2 border-b border-gray-200 text-left">โบนัส</th>
                <th className="px-4 py-2 border-b border-gray-200 text-left">หักเงิน</th>
                <th className="px-4 py-2 border-b border-gray-200 text-left">สุทธิ</th>
                <th className="px-4 py-2 border-b border-gray-200 text-left">สถานะ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockEmployees.map((emp, idx) => {
                const bonus = [5000, 3000, 8000, 4000, 2000][idx] || 0;
                const deduction = [2000, 1500, 2500, 1800, 1200][idx] || 0;
                const net = emp.salary + bonus - deduction;
                const status = idx < 3 ? "จ่ายแล้ว" : "รอจ่าย";

                return (
                  <tr key={emp.id}>
                    <td className="px-4 py-2">{emp.name}</td>
                    <td className="px-4 py-2">{emp.department}</td>
                    <td className="px-4 py-2">฿{emp.salary.toLocaleString()}</td>
                    <td className="px-4 py-2 text-green-700">+฿{bonus.toLocaleString()}</td>
                    <td className="px-4 py-2 text-red-700">-฿{deduction.toLocaleString()}</td>
                    <td className="px-4 py-2 font-bold">฿{net.toLocaleString()}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          status === "จ่ายแล้ว"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
