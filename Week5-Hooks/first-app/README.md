<!-- 
โค้ดนี้เป็นfunction ที่ใช้สำหรับกรอกชื่อกับอีเมล แล้วกด Submit เพื่อบันทึกข้อมูลลงใน state และแสดงผลด้านล่าง ถ้าข้อมูลถูกกรอกแล้วจะโชว์ชื่อกับอีเมล แต่ถ้ายังไม่กรอกจะขึ้นว่า "ยังไม่ได้กรอก" ฟังก์ชัน submit จะเก็บข้อมูลที่กรอกไว้ใน state submittedData และแสดง alert ข้อมูลนั้น ส่วนฟังก์ชัน Clear จะล้างข้อมูลทั้งหมดให้เป็นค่าว่าง useEffect ที่ใส่มาแบบไม่มี dependency จะทำงานทุกครั้งที่ component re-render แล้วจะ console.log ค่า name กับ email ปัจจุบัน ส่วน UI ก็มี input สองช่อง ปุ่ม submit กับปุ่ม clear แล้วก็มีส่วนแสดงผลข้อมูลที่อยู่ข้างล่าง ตัว component นี้รันได้บนเบราว์เซอร์เพราะใช้ DOM APIs อย่าง alert กับ input
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
