import fs from 'fs';
let content = fs.readFileSync('src/app/page.tsx', 'utf-8');

// Replace shadow classes
content = content.replaceAll(
  'shadow-[0_12px_34px_-10px_rgba(18,108,61,0.06)]',
  'shadow-[0_10px_10px_0px_rgba(216,216,216,0.25)]'
);
content = content.replaceAll(
  'hover:shadow-[0_20px_40px_-15px_rgba(18,108,61,0.12)]',
  'hover:shadow-[0_15px_15px_0px_rgba(216,216,216,0.25)]'
);

fs.writeFileSync('src/app/page.tsx', content);
