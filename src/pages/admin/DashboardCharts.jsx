import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// mock data สำหรับกราฟ
const attendanceData = [
  { name: "ม.ค.", present: 140, absent: 10 },
  { name: "ก.พ.", present: 138, absent: 12 },
  { name: "มี.ค.", present: 145, absent: 7 },
  { name: "เม.ย.", present: 142, absent: 8 },
  { name: "พ.ค.", present: 144, absent: 6 },
];

const leaveData = [
  { name: "ลาป่วย", value: 12 },
  { name: "ลากิจ", value: 8 },
  { name: "ลาพักร้อน", value: 15 },
];

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Attendance Line Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-bold mb-4">อัตราการเข้า-ออกงาน</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={attendanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="present" stroke="#16a34a" name="เข้างาน" />
            <Line type="monotone" dataKey="absent" stroke="#dc2626" name="ขาดงาน" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Leave Requests Bar Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-bold mb-4">คำขอลาตามประเภท</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={leaveData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#facc15" name="จำนวนคำขอ" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
