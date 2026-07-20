import fs from 'fs';
import path from 'path';

const linkMap = {
  "/coming-soon?tool=Viết+Bài+AI": "/viet-bai-ai",
  "/coming-soon?tool=Viết+Lại+Bài": "/viet-lai-bai",
  "/coming-soon?tool=Viết+bài+MXH": "/viet-bai-mxh",
  "/coming-soon?tool=Schema+Markup": "/schema-markup",

  "/coming-soon?tool=Gửi+Index+Bing": "/gui-index-bing",
  "/coming-soon?tool=Gửi+Index+Google": "/gui-index-google",
  "/coming-soon?tool=Kiểm+tra+Google+Index": "/kiem-tra-google-index",
  "/coming-soon?tool=Kiểm+tra+từ+khóa": "/kiem-tra-tu-khoa",
  "/coming-soon?tool=Kiểm+tra+thứ+hạng+từ+khóa": "/kiem-tra-tu-khoa", // There's a slight mismatch in name
  "/coming-soon?tool=Keyword+Cannibalization": "/keyword-cannibalization",

  "/coming-soon?tool=Metadata+%26+Geotag": "/metadata-geotag",
  "/coming-soon?tool=Nén+Ảnh+Hàng+Loạt": "/nen-anh-hang-loat",
  "/coming-soon?tool=Tạo+Ảnh+AI": "/tao-anh-ai",

  "/coming-soon?tool=Tải+Video+TikTok": "/tai-video-tiktok",
  "/coming-soon?tool=Tải+Video+TikTok+(Không+Watermark)": "/tai-video-tiktok",
  "/coming-soon?tool=Tải+Video+Facebook+%26+Reels": "/tai-video-fb-reels",

  "/coming-soon?tool=Tính+lãi+suất+vay": "/tinh-lai-suat-vay",
  "/coming-soon?tool=Tính+Lãi+Suất+Vay+Trả+Góp": "/tinh-lai-suat-vay",
  "/coming-soon?tool=Lịch+vạn+niên": "/lich-van-nien",
  "/coming-soon?tool=Lịch+Vạn+Niên+%26+Âm+Dương": "/lich-van-nien",
  "/coming-soon?tool=Chữ+không+dấu+VN": "/chu-khong-dau-vn",
  "/coming-soon?tool=Chuyển+Đổi+Tiếng+Việt+Không+Dấu": "/chu-khong-dau-vn",

  "/coming-soon?tool=SQL+Formatter": "/sql-formatter",
  "/coming-soon?tool=CSS%2FJS+Minifier": "/css-js-minifier",
  "/coming-soon?tool=Cron+Generator": "/cron-generator",
  "/coming-soon?tool=Cron+Expression+Generator": "/cron-generator",
  "/coming-soon?tool=HTML+Entities": "/html-entities",
  "/coming-soon?tool=HTML+Entities+Converter": "/html-entities",

  "/coming-soon?tool=Port+Checker": "/port-checker",
  "/coming-soon?tool=IP+Address+Search": "/ip-address-search",
  "/coming-soon?tool=IPv4+to+IPv6": "/ipv4-to-ipv6",
  "/coming-soon?tool=IPv4+to+IPv6+Converter": "/ipv4-to-ipv6",
  "/coming-soon?tool=Security+Headers": "/security-headers",
  "/coming-soon?tool=HTTP+Security+Headers+Analyzer": "/security-headers",

  "/coming-soon?tool=Continue+Writing": "/continue-writing",
  "/coming-soon?tool=Continue+Writing+AI": "/continue-writing",
  "/coming-soon?tool=YouTube+Name+Gen": "/youtube-name-gen",
  "/coming-soon?tool=YouTube+Channel+Name+Generator": "/youtube-name-gen",
  "/coming-soon?tool=FAQ+Generator": "/faq-generator",
  "/coming-soon?tool=Word+Counter+Pro": "/word-counter-pro",
  "/coming-soon?tool=Tạo+khung+avatar": "/tao-khung-avatar",
  "/coming-soon?tool=QR+Code": "/qr-code",
  "/coming-soon?tool=QR+Code+Generator": "/qr-code",
};

const updateFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  for (const [oldLink, newLink] of Object.entries(linkMap)) {
    if (content.includes(oldLink)) {
      content = content.split(oldLink).join(newLink);
      updated = true;
    }
  }

  // Also replace isReady: false to isReady: true
  if (content.includes("isReady: false")) {
    content = content.split("isReady: false").join("isReady: true");
    updated = true;
  }

  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Updated", filePath);
  }
};

const dashboardPath = path.join(process.cwd(), 'src', 'components', 'layout', 'DashboardLayout.tsx');
const toolsPagePath = path.join(process.cwd(), 'src', 'app', 'tools', 'page.tsx');

updateFile(dashboardPath);
updateFile(toolsPagePath);

