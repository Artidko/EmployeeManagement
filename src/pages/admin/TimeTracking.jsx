import React from "react";
import { mockEmployees } from "../../data/employees";

export default function TimeTracking() {
  return (
    <div className="fade-in space-y-6">
      {/* Time Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-green-600 text-white p-6 rounded-xl">
          <p>เข้างานตรงเวลา</p>
          <p className="text-3xl font-bold">142</p>
        </div>
        <div className="bg-yellow-500 text-white p-6 rounded-xl">
          <p>เข้างานสาย</p>
          <p className="text-3xl font-bold">8</p>
        </div>
        <div className="bg-red-500 text-white p-6 rounded-xl">
          <p>ขาดงาน</p>
          <p className="text-3xl font-bold">6</p>
        </div>
        <div className="bg-blue-600 text-white p-6 rounded-xl">
          <p>ชั่วโมงเฉลี่ย</p>
          <p className="text-3xl font-bold">8.2 ชม./วัน</p>
        </div>
      </div>

      {/* Today's Attendance */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold mb-4">การเข้างานวันนี้</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 border-b border-gray-200 text-left">พนักงาน</th>
                <th className="px-4 py-2 border-b border-gray-200 text-left">แผนก</th>
                <th className="px-4 py-2 border-b border-gray-200 text-left">เข้างาน</th>
                <th className="px-4 py-2 border-b border-gray-200 text-left">ออกงาน</th>
                <th className="px-4 py-2 border-b border-gray-200 text-left">ชั่วโมง</th>
                <th className="px-4 py-2 border-b border-gray-200 text-left">สถานะ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockEmployees.map((emp, idx) => {
                const checkIn = ["08:30", "08:45", "08:25", "09:00", "08:35"][idx] || "08:30";
                const checkOut = ["17:30", "17:35", "17:25", "18:00", "17:40"][idx] || "17:30";
                const status = checkIn > "08:30" ? "สาย" : "ปกติ";

                return (
                  <tr key={emp.id}>
                    <td className="px-4 py-2">{emp.name}</td>
                    <td className="px-4 py-2">{emp.department}</td>
                    <td className="px-4 py-2">{checkIn}</td>
                    <td className="px-4 py-2">{checkOut}</td>
                    <td className="px-4 py-2">8.0</td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          status === "ปกติ"
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
