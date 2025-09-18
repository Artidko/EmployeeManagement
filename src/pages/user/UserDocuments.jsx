import React from "react";

export default function UserDocuments() {
  return (
    <div className="fade-in">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-[#054A91] rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-file-contract text-3xl text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">เอกสารสัญญา</h2>
          <p className="text-gray-600">ดูและจัดการเอกสารสัญญาการทำงาน</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h3 className="font-semibold text-gray-700 mb-2">สัญญาจ้างงาน</h3>
                <p className="text-sm text-gray-500">ลงนาม: 1 ม.ค. 2023</p>
                <p className="text-sm text-gray-500">หมดอายุ: 31 ธ.ค. 2024</p>
              </div>
              <i className="fas fa-file-signature text-3xl text-blue-300" />
            </div>
            <button className="mt-4 w-full bg-[#054A91] text-white font-semibold px-4 py-2 rounded-lg shadow">
              <i className="fas fa-download mr-2" />
              ดาวน์โหลด
            </button>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h3 className="font-semibold text-gray-700 mb-2">ใบรับรองเงินเดือน</h3>
                <p className="text-sm text-gray-500">อัพเดท: ม.ค. 2024</p>
                <p className="text-sm text-gray-500">สถานะ: ใช้งานได้</p>
              </div>
              <i className="fas fa-certificate text-3xl text-green-300" />
            </div>
            <button className="mt-4 w-full bg-[#054A91] text-white font-semibold px-4 py-2 rounded-lg shadow">
              <i className="fas fa-download mr-2" />
              ดาวน์โหลด
            </button>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            <i className="fas fa-construction text-yellow-500 mr-2" />
            ฟีเจอร์กำลังพัฒนา
          </h3>
          <p className="text-gray-600 mb-4">
            ระบบอัพโหลดเอกสาร, การขอเอกสารใหม่, และการติดตามสถานะ
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-[#054A91] text-white font-semibold px-4 py-2 rounded-lg shadow">
              <i className="fas fa-upload mr-2" />
              อัพโหลดเอกสาร
            </button>
            <button className="bg-[#054A91] text-white font-semibold px-4 py-2 rounded-lg shadow">
              <i className="fas fa-plus mr-2" />
              ขอเอกสารใหม่
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
