import React from "react";
import { mockLeaveRequests } from "../../data/leaves";

export default function EmployeeRequests() {
  return (
    <div className="fade-in space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold mb-4">คำขอลาพนักงาน</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 border-b border-gray-200 text-left">ประเภท</th>
                <th className="px-4 py-2 border-b border-gray-200 text-left">วันที่</th>
                <th className="px-4 py-2 border-b border-gray-200 text-left">จำนวนวัน</th>
                <th className="px-4 py-2 border-b border-gray-200 text-left">สถานะ</th>
                <th className="px-4 py-2 border-b border-gray-200 text-left">เหตุผล</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockLeaveRequests.map((req) => (
                <tr key={req.id}>
                  <td className="px-4 py-2">{req.type}</td>
                  <td className="px-4 py-2">
                    {new Date(req.startDate).toLocaleDateString("th-TH")} –{" "}
                    {new Date(req.endDate).toLocaleDateString("th-TH")}
                  </td>
                  <td className="px-4 py-2">{req.days}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium
                        ${
                          req.status === "อนุมัติแล้ว"
                            ? "bg-green-100 text-green-800"
                            : req.status === "รออนุมัติ"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                    >
                      {req.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">{req.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
