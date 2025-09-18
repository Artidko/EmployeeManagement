import React, { useEffect, useState } from "react";
import { mockAttendanceData } from "../../data/attendance";

export default function UserAttendance() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("th-TH")
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString("th-TH"));
    }, 1000); // อัพเดททุก 1 วินาที

    return () => clearInterval(timer); // cleanup เมื่อ component ถูก unmount
  }, []);

  return (
    <div className="fade-in">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">การเข้าออกงาน</h2>
            <p className="text-gray-600">ประวัติการเข้าออกงานของคุณ</p>
          </div>
          <div className="text-right">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg">
              <i className="fas fa-clock mr-2" />
              <span className="font-semibold">เวลาปัจจุบัน: {currentTime}</span>
            </div>
          </div>
        </div>

        {/* ปุ่มเข้างาน / ออกงาน */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition">
            <i className="fas fa-sign-in-alt text-3xl mb-2" />
            <p className="text-lg font-semibold">เข้างาน</p>
            <p className="text-sm opacity-90">กดเพื่อบันทึกเวลาเข้างาน</p>
          </button>
          <button className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-lg hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition">
            <i className="fas fa-sign-out-alt text-3xl mb-2" />
            <p className="text-lg font-semibold">ออกงาน</p>
            <p className="text-sm opacity-90">กดเพื่อบันทึกเวลาออกงาน</p>
          </button>
        </div>

        {/* ตารางแสดงประวัติการเข้างาน */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-700">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  วันที่
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  เข้างาน
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  ออกงาน
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  สถานะ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockAttendanceData.map((record, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="py-3 px-4">
                    {new Date(record.date).toLocaleDateString("th-TH")}
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                      {record.checkIn}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {record.checkOut}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        record.status === "ปกติ"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
