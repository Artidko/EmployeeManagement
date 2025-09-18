// ข้อมูลพนักงานตัวอย่าง
export const mockUserData = {
  name: "สมชาย ใจดี",
  position: "นักพัฒนาซอฟต์แวร์",
  department: "IT",
  employeeId: "EMP001",
  salary: 45000,
  avatar: "https://via.placeholder.com/100x100/4F46E5/FFFFFF?text=SC",
};

// ข้อมูลพนักงานทั้งหมด (ใช้ใน Admin/Reports/Payroll)
export const mockEmployees = [
  { id: 1, name: "สมชาย ใจดี", position: "นักพัฒนาซอฟต์แวร์", department: "IT", salary: 45000, status: "active" },
  { id: 2, name: "สมหญิง รักงาน", position: "นักบัญชี", department: "Finance", salary: 35000, status: "active" },
  { id: 3, name: "สมศักดิ์ ขยัน", position: "HR Manager", department: "HR", salary: 55000, status: "active" },
  { id: 4, name: "สมใจ มั่นคง", position: "Marketing Manager", department: "Marketing", salary: 48000, status: "active" },
  { id: 5, name: "สมปอง เก่ง", position: "Sales Executive", department: "Sales", salary: 32000, status: "active" }
];
