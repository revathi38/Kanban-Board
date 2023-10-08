- npm create vite@latest
- cd path to app-dir
- npm install
- npm run dev

- cleanup initial code setup
- install tailwind
  ```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```
- Configure your template paths

  ```bash
  /** @type {import('tailwindcss').Config} */
  export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {},
  },
  plugins: [],
  }
  ```

- Add the Tailwind directives to your CSS

  ```bash
  /*index.css*/
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  ```

### Git configuration:

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/revathi38/Kanban-Board.git
git push -u origin main
```
