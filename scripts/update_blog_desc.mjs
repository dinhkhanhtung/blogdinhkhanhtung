import fs from 'fs';

// Update page.tsx
let pageContent = fs.readFileSync('src/app/page.tsx', 'utf-8');
pageContent = pageContent.replaceAll(
  'cẩm nang thiết lập Ubuntu/Linux, các triết lý nhân sinh cuộc sống và hệ cổng công cụ tiện ích số hỗ trợ công việc hằng ngày',
  'khám phá Công nghệ, trí tuệ nhân tạo (AI), cùng những câu chuyện chia sẻ cuộc sống'
);
pageContent = pageContent.replaceAll('Ubuntu & Tiện Ích Công Nghệ', 'Công Nghệ & AI');
pageContent = pageContent.replaceAll('category=Ubuntu cho người mới', 'category=Công nghệ & AI');
pageContent = pageContent.replaceAll(
  'p.category === "Ubuntu cho người mới"',
  'p.category === "Công nghệ & AI"'
);
fs.writeFileSync('src/app/page.tsx', pageContent);

// Update blog/page.tsx
let blogPageContent = fs.readFileSync('src/app/blog/page.tsx', 'utf-8');
blogPageContent = blogPageContent.replaceAll(
  'Nơi chia sẻ kiến thức Y học cổ truyền, công nghệ hệ điều hành Linux và các tri thức cuộc sống bổ ích',
  'Nơi chia sẻ tri thức về Y Học Cổ Truyền, Công nghệ, AI và những câu chuyện thú vị trong cuộc sống'
);
fs.writeFileSync('src/app/blog/page.tsx', blogPageContent);

// Update DashboardLayout.tsx
let layoutContent = fs.readFileSync('src/components/layout/DashboardLayout.tsx', 'utf-8');
layoutContent = layoutContent.replaceAll(
  'Kênh chia sẻ kiến thức Y Học Cổ Truyền thực tế, hệ điều hành mã nguồn mở Ubuntu & Linux và cổng tiện ích hỗ trợ công việc hằng ngày.',
  'Kênh chia sẻ kiến thức Y Học Cổ Truyền, Công Nghệ, AI và những câu chuyện cuộc sống.'
);
layoutContent = layoutContent.replaceAll('Ubuntu & Linux', 'Công Nghệ & AI');
layoutContent = layoutContent.replaceAll('Ubuntu cho người mới', 'Kiến thức AI');
layoutContent = layoutContent.replaceAll('Ubuntu+cho+người+mới', 'Kiến+thức+AI');
layoutContent = layoutContent.replaceAll('Lệnh Linux cơ bản', 'Thủ thuật công nghệ');
layoutContent = layoutContent.replaceAll('Lệnh+Linux+cơ+bản', 'Thủ+thuật+công+nghệ');
layoutContent = layoutContent.replaceAll('Cấu hình Linux Server', 'Công cụ số');
layoutContent = layoutContent.replaceAll('Cấu+hình+Linux+Server', 'Công+cụ+số');
fs.writeFileSync('src/components/layout/DashboardLayout.tsx', layoutContent);

// Update sample data so UI renders fine
let dataContent = fs.readFileSync('src/lib/data.tsx', 'utf-8');
dataContent = dataContent.replaceAll('Ubuntu cho người mới', 'Công nghệ & AI');
fs.writeFileSync('src/lib/data.tsx', dataContent);

console.log('Update completed');
