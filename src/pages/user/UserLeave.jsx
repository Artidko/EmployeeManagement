import React from "react";
import { mockLeaveRequests } from "../../data/leaves";

export default function UserLeave() {
  return (
    <div className="fade-in space-y-6">
      {/* Leave Request Form */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          <i className="fas fa-calendar-plus mr-3 text-blue-500" />
          ขอลา
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ประเภทการลา
            </label>
            <select className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>ลาป่วย</option>
              <option>ลากิจ</option>
              <option>ลาพักร้อน</option>
              <option>ลาคลอด</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              จำนวนวัน
            </label>
            <input
              type="number"
              min="1"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              วันที่เริ่ม
            </label>
            <input
              type="date"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              วันที่สิ้นสุด
            </label>
            <input
              type="date"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              เหตุผล
            </label>
            <textarea
              rows="3"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="กรุณาระบุเหตุผลในการลา"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105"
            >
              <i className="fas fa-paper-plane mr-2" />
              ส่งคำขอ
            </button>
          </div>
        </form>
      </div>

      {/* Leave History */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6">
          <i className="fas fa-history mr-3 text-green-500" />
          ประวัติการลา
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-700">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left font-medium text-gray-600">
                  ประเภท
                </th>
                <th className="py-3 px-4 text-left font-medium text-gray-600">
                  วันที่
                </th>
                <th className="py-3 px-4 text-left font-medium text-gray-600">
                  จำนวนวัน
                </th>
                <th className="py-3 px-4 text-left font-medium text-gray-600">
                  สถานะ
                </th>
                <th className="py-3 px-4 text-left font-medium text-gray-600">
                  เหตุผล
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockLeaveRequests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {request.type}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {new Date(request.startDate).toLocaleDateString("th-TH")} -{" "}
                    {new Date(request.endDate).toLocaleDateString("th-TH")}
                  </td>
                  <td className="py-3 px-4 text-center">{request.days}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        request.status === "อนุมัติแล้ว"
                          ? "bg-green-100 text-green-800"
                          : request.status === "รออนุมัติ"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{request.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
