<!-- SkillTag
รับ props สองค่า:

skillName (จำเป็น): ชื่อของทักษะ

level (ไม่จำเป็น): ระดับความสามารถ เช่น Beginner, Intermediate, Advanced

มีการกำหนดสีพื้นหลังตามระดับ:

Beginner → เขียว

Intermediate → เหลือง

Advanced → ส้มแดง

ถ้าไม่ระบุระดับ → เทาอ่อน

แสดงผลเป็นกล่องข้อความขนาดเล็กที่มีดีไซน์เรียบง่าย เช่น ขอบมน มี padding และแสดงข้อความในรูปแบบ:
React (Intermediate) หรือแค่ Figma ถ้าไม่มีการระบุระดับ
 -->


<!-- 
  UserProfileCard.tsx คือกล่องแสดงข้อมูลผู้ใช้งานคนหนึ่ง ซึ่งในกล่องนี้จะมี:

ภาพโปรไฟล์ (Avatar)
ถ้ามีลิงก์ภาพ → แสดงภาพนั้น

ข้อมูลผู้ใช้

ชื่อ (user.name)

อีเมล (user.email)

สถานะออนไลน์ (แสดงเป็น ● สีเขียวหรือเทา พร้อมข้อความ "Online" หรือ "Offline")

ทักษะ (Skills)
แสดงทักษะทั้งหมดของผู้ใช้โดยใช้คอมโพเนนต์ SkillTag ที่สร้างไว้ก่อนหน้านี้
แต่ละทักษะจะมีชื่อและระดับความสามารถ เช่น React (Intermediate)

ปุ่ม "View Details"
เป็นปุ่มที่กดแล้วจะเรียกฟังก์ชัน onViewDetails() พร้อมส่ง user.id ไปใช้งาน (เช่น เปิดหน้าโปรไฟล์เต็ม)
 -->


<!-- 
  ไฟล์ App.tsx เป็นคอมโพเนนต์หลักของแอป React ที่มีหน้าที่แสดงผลดังนี้:

1. แสดงแบนเนอร์ต้อนรับ

ใช้คอมโพเนนต์ WelcomeBanner เพื่อแสดงข้อความต้อนรับผู้ใช้งานอยู่ด้านบนของหน้า

2. แสดงการ์ดผู้ใช้งานหลายคน

มีข้อมูลผู้ใช้ 3 คนเก็บไว้ในตัวแปร users โดยแต่ละคนมี:

ชื่อ

อีเมล

รูปโปรไฟล์

สถานะออนไลน์/ออฟไลน์

รายการทักษะ (บางทักษะมีระดับ เช่น Beginner, Intermediate, Advanced)

3. ใช้คอมโพเนนต์ UserProfileCard

วนลูปแสดงการ์ดของผู้ใช้แต่ละคนด้วย .map() และส่งข้อมูลผ่าน props:

user: ข้อมูลผู้ใช้แต่ละคน

onViewDetails: ฟังก์ชันที่รับ user.id ไปทำงานเมื่อกดปุ่ม "View Details" (ในที่นี้คือแสดงใน console)
 -->






# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
