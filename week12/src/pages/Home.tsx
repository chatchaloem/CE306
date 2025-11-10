function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex justify-center items-center px-6 py-16">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-3xl p-10 border border-gray-200">
        {/* ส่วนหัว */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-black drop-shadow-sm mb-4">
            WELCOME TO MY WEBSITE
          </h1>
          <p className="text-lg text-gray-700">
            เว็บไซต์แนะนำตัวและประวัติส่วนตัว
          </p>
        </div>

        {/* การ์ดข้อมูล */}
        <div className="flex flex-col gap-8">
          {/* การ์ด 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold text-black mb-3">
              เกี่ยวกับเว็บไซต์นี้
            </h2>
            <p className="text-gray-800 leading-relaxed">
              เว็บไซต์นี้สร้างขึ้นเพื่อแสดงข้อมูลส่วนตัว ประวัติการศึกษา และผลงานทางด้านต่าง ๆ
              โดยใช้เทคโนโลยี{" "}
              <span className="font-semibold text-blue-600">React</span>,{" "}
              <span className="font-semibold text-blue-600">React Router</span>, และ{" "}
              <span className="font-semibold text-blue-600">Radix UI</span>
            </p>
          </div>

          {/* การ์ด 2 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold text-black mb-3">
              เทคโนโลยีที่ใช้
            </h2>
            <ul className="text-gray-800 space-y-2 leading-relaxed">
              <li>• React 19 + TypeScript</li>
              <li>• React Router สำหรับการจัดการหน้า</li>
              <li>• Radix UI สำหรับ UI Components</li>
              <li>• Vite สำหรับ Build Tool</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
