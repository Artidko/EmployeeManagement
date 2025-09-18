import React from "react";
import { mockUserData } from "../../data/employees";

export default function UserProfile() {
  return (
    <div className="fade-in">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center space-x-6 mb-8">
          <div className="relative">
            <img
              src={mockUserData.avatar}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-indigo-200"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
              <i className="fas fa-check text-white text-xs" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{mockUserData.name}</h2>
            <p className="text-indigo-600 font-medium text-lg">{mockUserData.position}</p>
            <p className="text-gray-500">{mockUserData.department}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-semibold text-gray-700 mb-2">รหัสพนักงาน</h3>
            <p className="text-2xl font-bold text-indigo-600">{mockUserData.employeeId}</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-700 mb-2">เงินเดือน</h3>
            <p className="text-2xl font-bold text-green-600">
              ฿{mockUserData.salary.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <i className="fas fa-calendar-check text-2xl text-blue-500 mb-2" />
            <p className="text-sm text-gray-600">วันที่เริ่มงาน</p>
            <p className="font-semibold">1 ม.ค. 2023</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <i className="fas fa-clock text-2xl text-green-500 mb-2" />
            <p className="text-sm text-gray-600">ชั่วโมงทำงาน</p>
            <p className="font-semibold">8 ชม./วัน</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <i className="fas fa-award text-2xl text-yellow-500 mb-2" />
            <p className="text-sm text-gray-600">ระดับ</p>
            <p className="font-semibold">Senior</p>
          </div>
        </div>
      </div>
    </div>
  );
}
