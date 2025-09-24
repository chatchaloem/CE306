ฺButton.tsx
ตัวปุ่มรองรับการส่งเนื้อหาภายใน (children) ฟังก์ชันเมื่อถูกกด (onClick) และยังเลือกได้ว่าจะปิดการใช้งานหรือไม่ (disabled) รวมถึงมีตัวเลือกให้เปลี่ยนสไตล์ตามชนิด (primary, secondary, danger)

Navbar.tsx
ใช้ useState เพื่อเก็บสถานะ isOpen เอาไว้เช็กว่าเมนูมือถือเปิดอยู่หรือไม่ ถ้าเปิดอยู่จะแสดงลิงก์ในรูปแบบ list เรียงลงมา (column) แต่ถ้าปิดอยู่จะแสดงเฉพาะปุ่ม toggle
(desktop) จะโชว์ลิงก์เมนูทั้งหมดเรียงในแถวเดียว เช่น Home, About, Services, Contact แต่ถ้าอยู่บนจอเล็กจะแสดงปุ่มไอคอนสามขีดจาก Menu

ProductCard.tsx
รับข้อมูลสินค้ามาจาก props คือ imageUrl, title, description, price และฟังก์ชัน onAddToCart
ปุ่ม Add to Cart ซึ่งใช้ component ปุ่มที่เราสร้างเอง และเมื่อกดจะเรียก onAddToCart ที่ถูกส่งเข้ามา


App.tsx
ใช้ useState เก็บข้อมูลสินค้า
มีฟังก์ชัน handleAddToCart เอาไว้รับ id ของสินค้าที่ถูกกด แล้วแจ้งเตือนด้วย alert







<!-- # React + TypeScript + Vite

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
``` -->
