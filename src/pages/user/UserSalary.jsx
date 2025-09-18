import React from "react";
import { mockUserData } from "../../data/employees";

export default function UserSalary() {
  return (
    <div className="fade-in">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-money-bill-wave text-3xl text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">เงินเดือนของฉัน</h2>
          <p className="text-gray-600">ดูข้อมูลเงินเดือนและสลิปเงินเดือน</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">เงินเดือนปัจจุบัน</h3>
            <p className="text-3xl font-bold text-green-600">
              ฿{mockUserData.salary.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 mt-1">ต่อเดือน</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">เงินเดือนรวมปีนี้</h3>
            <p className="text-3xl font-bold text-blue-600">
              ฿{(mockUserData.salary * 12).toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 mt-1">ปี 2024</p>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            <i className="fas fa-construction text-yellow-500 mr-2" />
            ฟีเจอร์กำลังพัฒนา
          </h3>
          <p className="text-gray-600 mb-4">
            ระบบสลิปเงินเดือน, ประวัติการจ่าย, และรายละเอียดการหักเงิน
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
              <i className="fas fa-file-pdf mr-2" />ดาวน์โหลดสลิป
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              <i className="fas fa-history mr-2" />ประวัติการจ่าย
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
