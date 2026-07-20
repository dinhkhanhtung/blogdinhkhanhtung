import fs from 'fs';

// Update page.tsx
let pageContent = fs.readFileSync('src/app/page.tsx', 'utf-8');
pageContent = pageContent.replaceAll('author: "Đinh Khánh Tùng"', 'author: "Admin"');
fs.writeFileSync('src/app/page.tsx', pageContent);

// Update data.tsx
let dataContent = fs.readFileSync('src/lib/data.tsx', 'utf-8');
dataContent = dataContent.replaceAll('author: "Đinh Khánh Tùng"', 'author: "Admin"');
fs.writeFileSync('src/lib/data.tsx', dataContent);

// Update blog/page.tsx (Sidebar Author widget)
let blogPageContent = fs.readFileSync('src/app/blog/page.tsx', 'utf-8');
blogPageContent = blogPageContent.replaceAll('Đinh Khánh Tùng</h4>', 'Admin</h4>');
blogPageContent = blogPageContent.replaceAll('alt="Đinh Khánh Tùng"', 'alt="Admin"');
// Có một chỗ 'Đinh Khánh Tùng | Blog' trên header trang blog, có thể đổi chữ Blog thành Admin? Khách yêu cầu "Tác giả bài viết ghi admin nhé". Chắc chỉ cần đổi mục tác giả. 
// Chỗ này:
// <h4 className="text-base font-heading font-black text-slate-800 dark:text-slate-100">
//   Đinh Khánh Tùng
// </h4>
blogPageContent = blogPageContent.replace(
  '<h4 className="text-base font-heading font-black text-slate-800 dark:text-slate-100">\n                  Đinh Khánh Tùng\n                </h4>',
  '<h4 className="text-base font-heading font-black text-slate-800 dark:text-slate-100">\n                  Admin\n                </h4>'
);

fs.writeFileSync('src/app/blog/page.tsx', blogPageContent);

console.log('Update author completed');
