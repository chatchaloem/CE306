import { FaHtml5, FaJs, FaReact, FaNodeJs, FaGit } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

function Profile() {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-amber-600 w-8 h-8" />, level: 90 },
    { name: 'CSS3', icon: <SiTailwindcss className="text-teal-600 w-8 h-8" />, level: 85 },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-600 w-8 h-8" />, level: 85 },
    { name: 'TypeScript', icon: <SiTypescript className="text-sky-600 w-8 h-8" />, level: 80 },
    { name: 'React', icon: <FaReact className="text-sky-500 w-8 h-8" />, level: 85 },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-700 w-8 h-8" />, level: 75 },
    { name: 'Git', icon: <FaGit className="text-orange-700 w-8 h-8" />, level: 80 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500 w-8 h-8" />, level: 80 },
  ];

  return (
    <div className="min-h-screen w-full bg-stone-50 flex items-center justify-center px-10 py-12 font-['Kanit']">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-10">
        {/* LEFT SIDE: Profile + About */}
        <div className="flex-1 bg-stone-100 shadow-xl rounded-3xl p-10 border border-stone-200 flex flex-col items-center justify-center text-center">
          <img
            src="https://cdn.discordapp.com/attachments/1353798730763075595/1436405397996175380/IMG_2495.jpg?ex=6912c806&is=69117686&hm=8ca0740571a46e0665da71630b599ece3d54c4e113c97cd1636eaec5491f7a31&"
            alt="profile"
            className="w-52 h-52 rounded-full shadow-md mb-6"
          />
          <h1 className="text-4xl font-bold text-stone-800 mb-2">
            Chatchaloem Louwalit
          </h1>
          <p className="text-stone-600 text-lg mb-8">
            นักศึกษาวิศวกรรมคอมพิวเตอร์
          </p>

          <div className="bg-amber-50 shadow-inner rounded-2xl p-6 w-full border border-amber-100 text-left">
            <h2 className="text-2xl font-semibold text-amber-700 mb-3 text-center">
              เกี่ยวกับฉัน
            </h2>
            <p className="text-stone-700 leading-relaxed">
              สัสดีครับ ผมชื่อ นาย ฉัตรเฉลิม เล้าวาลิต เป็นนักศึกษาที่มีความสนใจในด้าน
              การพัฒนาเว็บไซต์และเทคโนโลยีใหม่ ๆ ชอบเรียนรู้สิ่งใหม่ ๆ 
              และพัฒนาทักษะการเขียนโปรแกรมอยู่เสมอ
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Skills + Education */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Education */}
          <div className="bg-stone-100 shadow-md rounded-2xl p-6 border border-stone-200">
            <h2 className="text-2xl font-semibold text-amber-700 mb-3">การศึกษา</h2>
            <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100 shadow-sm">
              <h3 className="text-lg font-semibold text-stone-800">
                ปริญญาตรี วิศวกรรมศาสตร์บัณฑิต
              </h3>
              <p className="text-stone-700">สาขาวิศวกรรมคอมพิวเตอร์</p>
              <p className="text-stone-700">มหาวิทยาลัยธุรกิจบัณฑิตย์</p>
              <p className="text-sm text-stone-500 mt-1">2566 - ปัจจุบัน</p>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-stone-100 shadow-md rounded-2xl p-6 border border-stone-200 flex-1">
            <h2 className="text-2xl font-semibold text-amber-700 mb-4">ทักษะและความสามารถ</h2>
            <div className="flex flex-col gap-5">
              {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    {skill.icon}
                    <span className="text-stone-800 font-medium text-lg">{skill.name}</span>
                    <span className="text-stone-500 text-sm ml-auto">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-stone-200 rounded-full">
                    <div
                      className="h-3 rounded-full bg-amber-500 transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
