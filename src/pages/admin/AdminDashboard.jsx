import React from "react";
import { mockEmployees } from "../../data/employees";
import { mockDashboardStats } from "../../data/stats";
import { DashboardCharts } from "./DashboardCharts";
import { EmployeeTable } from "./EmployeeTable";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/Card";

export default function AdminDashboard() {
  return (
    <div className="fade-in space-y-6 p-4 pt-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md">
          <p>พนักงานทั้งหมด</p>
          <p className="text-3xl font-bold">{mockDashboardStats.totalEmployees}</p>
          <p className="text-sm opacity-80">+5 คนใหม่เดือนนี้</p>
        </div>
        <div className="bg-green-600 text-white p-6 rounded-xl shadow-md">
          <p>เข้างานวันนี้</p>
          <p className="text-3xl font-bold">{mockDashboardStats.presentToday}</p>
          <p className="text-sm opacity-80">91% อัตราเข้างาน</p>
        </div>
        <div className="bg-yellow-500 text-white p-6 rounded-xl shadow-md">
          <p>คำขอลา</p>
          <p className="text-3xl font-bold">{mockDashboardStats.leaveRequests}</p>
          <p className="text-sm opacity-80">รออนุมัติ</p>
        </div>
        <div className="bg-purple-600 text-white p-6 rounded-xl shadow-md">
          <p>แผนกทั้งหมด</p>
          <p className="text-3xl font-bold">{mockDashboardStats.totalDepartments}</p>
          <p className="text-sm opacity-80">ครบทุกแผนก</p>
        </div>
      </div>

      {/* Charts */}
      <DashboardCharts />

      {/* Employee Table */}
      <Card>
        <CardHeader>
          <CardTitle>รายชื่อพนักงานล่าสุด</CardTitle>
        </CardHeader>
        <CardContent>
          <EmployeeTable employees={mockEmployees} />
        </CardContent>
      </Card>
    </div>
  );
}
