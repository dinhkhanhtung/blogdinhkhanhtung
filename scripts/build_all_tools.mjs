import fs from 'fs';
import path from 'path';

const tools = [
  // --- Content SEO ---
  {
    path: 'viet-bai-ai', title: 'Viết Bài AI', icon: 'PenTool', desc: 'Sử dụng trí tuệ nhân tạo để viết bài chuẩn SEO tự động.', requiresApi: true, apiName: 'OpenAI API Key',
    ui: `
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Chủ đề / Từ khóa</label>
            <input type="text" placeholder="Ví dụ: Lợi ích của việc tập yoga mỗi ngày" className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-slate-700" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Giọng văn (Tone)</label>
              <select className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700">
                <option>Chuyên gia</option><option>Thân thiện</option><option>Hài hước</option><option>Trang trọng</option>
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Ngôn ngữ</label>
              <select className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700">
                <option>Tiếng Việt</option><option>English</option>
              </select>
            </div>
          </div>
          <button className="w-full sm:w-auto self-start px-6 py-3 bg-[#15803d] hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors">Tạo Bài Viết AI</button>
          
          <div className="mt-4 flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Kết quả (Bản nháp)</label>
            <textarea readOnly placeholder="Nội dung bài viết sẽ xuất hiện ở đây..." className="w-full min-h-[300px] p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 resize-y"></textarea>
          </div>
        </div>
    `
  },
  {
    path: 'viet-lai-bai', title: 'Viết Lại Bài', icon: 'RefreshCw', desc: 'Viết lại nội dung bài viết giữ nguyên ý nghĩa nhưng cấu trúc hoàn toàn mới.', requiresApi: true, apiName: 'OpenAI API Key',
    ui: `
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Nội dung gốc</label>
            <textarea placeholder="Dán nội dung cần viết lại (spin content)..." className="w-full min-h-[150px] p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700"></textarea>
          </div>
          <button className="px-6 py-3 bg-[#15803d] hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors self-start">Tiến hành Viết Lại</button>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Kết quả</label>
            <textarea readOnly placeholder="Nội dung mới sẽ xuất hiện ở đây..." className="w-full min-h-[150px] p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 resize-y"></textarea>
          </div>
        </div>
    `
  },
  {
    path: 'viet-bai-mxh', title: 'Viết bài MXH', icon: 'Share2', desc: 'Tạo nội dung hấp dẫn cho các nền tảng mạng xã hội.', requiresApi: true, apiName: 'OpenAI API Key',
    ui: `
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Chủ đề bài đăng</label>
            <input type="text" placeholder="Khuyến mãi 50% dịp lễ..." className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Nền tảng mạng xã hội</label>
            <select className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700">
              <option>Facebook Post</option><option>Instagram Caption</option><option>LinkedIn Article</option><option>X (Twitter) Thread</option>
            </select>
          </div>
          <button className="px-6 py-3 bg-[#15803d] hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors self-start">Tạo Bài Viết MXH</button>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Kết quả</label>
            <textarea readOnly placeholder="Bài viết MXH của bạn sẽ hiển thị ở đây..." className="w-full min-h-[200px] p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 resize-y"></textarea>
          </div>
        </div>
    `
  },
  {
    path: 'schema-markup', title: 'Schema Markup', icon: 'Code2', desc: 'Tạo mã JSON-LD Schema Markup chuẩn SEO cho website của bạn.', requiresApi: false,
    ui: `
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Loại Schema</label>
              <select className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700">
                <option>Article (Bài viết)</option><option>FAQPage (Câu hỏi thường gặp)</option><option>Product (Sản phẩm)</option><option>LocalBusiness (Doanh nghiệp địa phương)</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Tiêu đề (Headline)</label>
              <input type="text" className="w-full p-3 border border-slate-200 rounded-xl text-slate-700" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">URL bài viết</label>
              <input type="url" className="w-full p-3 border border-slate-200 rounded-xl text-slate-700" />
            </div>
            <button className="w-full py-3 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors">Tạo Code JSON-LD</button>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Mã JSON-LD Kết quả</label>
            <textarea readOnly className="w-full h-full min-h-[300px] p-4 bg-slate-800 text-emerald-400 font-mono text-sm rounded-xl border border-slate-700 focus:outline-none resize-y"></textarea>
          </div>
        </div>
    `
  },

  // --- Index Engine ---
  {
    path: 'gui-index-bing', title: 'Gửi Index Bing', icon: 'Send', desc: 'Tự động gửi URL lên Bing Webmaster Tools để index nhanh chóng.', requiresApi: true, apiName: 'Bing API Key',
    ui: `
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Danh sách URL (Mỗi dòng 1 URL)</label>
            <textarea placeholder="https://example.com/bai-viet-1\\nhttps://example.com/bai-viet-2" className="w-full min-h-[200px] p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700"></textarea>
          </div>
          <button className="px-6 py-3 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors self-start">Gửi URL Lên Bing</button>
          <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 className="font-semibold text-slate-700 mb-2">Trạng thái (Log)</h4>
            <div className="text-sm text-slate-500 font-mono">Đang chờ lệnh...</div>
          </div>
        </div>
    `
  },
  {
    path: 'gui-index-google', title: 'Gửi Index Google', icon: 'Search', desc: 'Gửi URL lên Google Search Console thông qua Google Indexing API.', requiresApi: true, apiName: 'Google Service Account JSON',
    ui: `
        <div className="flex flex-col gap-4">
          <div className="p-4 bg-amber-50 text-amber-800 border border-amber-200 rounded-xl text-sm">
            Để sử dụng chức năng này, bạn cần dán nội dung file JSON của Google Cloud Service Account vào phần cấu hình API bên trên. Đảm bảo email service account đã được thêm làm chủ sở hữu trong Google Search Console.
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Danh sách URL (Mỗi dòng 1 URL)</label>
            <textarea placeholder="https://example.com/page-1" className="w-full min-h-[200px] p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700"></textarea>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors">Gửi Lệnh UPDATE</button>
            <button className="px-6 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors">Gửi Lệnh DELETE</button>
          </div>
          <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 className="font-semibold text-slate-700 mb-2">Kết nối API</h4>
            <div className="text-sm text-slate-500 font-mono">Chưa khởi tạo...</div>
          </div>
        </div>
    `
  },
  {
    path: 'kiem-tra-google-index', title: 'Kiểm tra Google Index', icon: 'CheckCircle2', desc: 'Kiểm tra hàng loạt URL xem đã được Google index chưa.', requiresApi: false,
    ui: `
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Nhập danh sách URL cần kiểm tra</label>
            <textarea placeholder="https://example.com/" className="w-full min-h-[150px] p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700"></textarea>
          </div>
          <button className="px-6 py-3 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors self-start">Bắt Đầu Kiểm Tra</button>
          
          <div className="overflow-x-auto mt-4 border border-slate-200 rounded-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="p-3 border-b text-sm font-semibold text-slate-700">URL</th>
                  <th className="p-3 border-b text-sm font-semibold text-slate-700 w-32">Trạng thái</th>
                  <th className="p-3 border-b text-sm font-semibold text-slate-700 w-32">Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={3} className="p-8 text-center text-slate-500 text-sm">Chưa có dữ liệu. Vui lòng bắt đầu kiểm tra.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    `
  },
  {
    path: 'kiem-tra-tu-khoa', title: 'Kiểm tra từ khóa', icon: 'TrendingUp', desc: 'Theo dõi thứ hạng từ khóa của website trên Google Search.', requiresApi: false,
    ui: `
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Từ khóa (Keyword)</label>
              <input type="text" placeholder="Ví dụ: công cụ seo ai" className="w-full p-3 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Tên miền (Domain)</label>
              <input type="text" placeholder="Ví dụ: congcuseoai.com" className="w-full p-3 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Khu vực (Quốc gia)</label>
              <select className="w-full p-3 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20">
                <option>Việt Nam (google.com.vn)</option>
                <option>Hoa Kỳ (google.com)</option>
              </select>
            </div>
          </div>
          <button className="px-6 py-3 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors self-start">Kiểm Tra Thứ Hạng</button>
          
          <div className="mt-8 p-10 bg-slate-50 border border-slate-200 rounded-xl flex flex-col items-center justify-center gap-4">
            <div className="text-6xl font-black text-slate-300">--</div>
            <p className="text-slate-500 font-semibold">Kết quả thứ hạng sẽ hiển thị tại đây</p>
          </div>
        </div>
    `
  },
  {
    path: 'keyword-cannibalization', title: 'Keyword Cannibalization', icon: 'Activity', desc: 'Kiểm tra và phát hiện hiện tượng ăn thịt từ khóa trên website.', requiresApi: false,
    ui: `
        <div className="flex flex-col gap-4">
          <div className="p-4 bg-blue-50 text-blue-800 border border-blue-200 rounded-xl text-sm">
            Nhập sitemap hoặc danh sách URL của bạn. Công cụ sẽ quét và tìm kiếm các trang web có nội dung hoặc mục tiêu từ khóa quá giống nhau, dẫn đến hiện tượng ăn thịt từ khóa (Keyword Cannibalization).
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Sitemap URL hoặc Danh sách URL</label>
            <textarea placeholder="https://example.com/sitemap_index.xml" className="w-full min-h-[150px] p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700"></textarea>
          </div>
          <button className="px-6 py-3 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors self-start">Bắt Đầu Phân Tích</button>
        </div>
    `
  },

  // --- SEO Ảnh ---
  {
    path: 'metadata-geotag', title: 'Metadata & Geotag', icon: 'Tag', desc: 'Chỉnh sửa EXIF data và gắn thẻ địa lý (Geotag) cho hình ảnh.', requiresApi: false,
    ui: `
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-4 border-r border-slate-200 pr-0 lg:pr-6">
            <div className="w-full h-64 border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center bg-slate-50 text-slate-500 cursor-pointer hover:bg-slate-100 transition-colors">
              <UploadCloud className="w-10 h-10 mb-2 text-slate-400" />
              <p className="font-semibold text-slate-600">Nhấn để tải ảnh lên</p>
              <p className="text-xs">Hoặc kéo thả file ảnh vào đây</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Vĩ độ (Latitude)</label>
                <input type="text" placeholder="Ví dụ: 21.028511" className="w-full p-3 border border-slate-200 rounded-xl text-slate-700" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Kinh độ (Longitude)</label>
                <input type="text" placeholder="Ví dụ: 105.804817" className="w-full p-3 border border-slate-200 rounded-xl text-slate-700" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Tác giả (Author)</label>
              <input type="text" className="w-full p-3 border border-slate-200 rounded-xl text-slate-700" />
            </div>
            <button className="w-full py-3 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors">Cập nhật EXIF & Tải về</button>
          </div>
          
          <div className="flex-1 flex flex-col bg-slate-50 rounded-xl p-4 border border-slate-200">
            <h4 className="font-semibold text-slate-700 mb-4">Dữ liệu EXIF Hiện tại</h4>
            <div className="text-sm text-slate-500 text-center py-10">Vui lòng tải ảnh lên để đọc dữ liệu.</div>
          </div>
        </div>
    `
  },
  {
    path: 'nen-anh-hang-loat', title: 'Nén Ảnh Hàng Loạt', icon: 'Minimize2', desc: 'Nén giảm dung lượng hình ảnh hàng loạt không làm giảm chất lượng.', requiresApi: false,
    ui: `
        <div className="flex flex-col gap-6 text-center py-10">
          <div className="mx-auto w-full max-w-2xl h-64 border-2 border-dashed border-emerald-300 rounded-2xl flex flex-col items-center justify-center bg-emerald-50 text-emerald-600 cursor-pointer hover:bg-emerald-100 transition-colors">
             <UploadCloud className="w-12 h-12 mb-3" />
             <p className="font-bold text-lg">Kéo thả các file ảnh vào đây</p>
             <p className="text-sm mt-1 text-emerald-500">Hỗ trợ JPG, PNG, WEBP (Tối đa 20 file cùng lúc)</p>
          </div>
          <div className="flex justify-center gap-6 mt-4">
             <label className="flex items-center gap-2 cursor-pointer text-slate-700 font-semibold text-sm">
               <input type="checkbox" className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500" />
               Tự động chuyển đổi sang WebP
             </label>
             <label className="flex items-center gap-2 cursor-pointer text-slate-700 font-semibold text-sm">
               Chất lượng:
               <input type="range" min="1" max="100" defaultValue="80" className="w-32 accent-emerald-600" />
               <span>80%</span>
             </label>
          </div>
          <button className="mx-auto px-8 py-3 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors">Bắt Đầu Nén</button>
        </div>
    `
  },
  {
    path: 'tao-anh-ai', title: 'Tạo Ảnh AI', icon: 'ImageIcon', desc: 'Tạo hình ảnh độc đáo bằng AI từ văn bản mô tả.', requiresApi: true, apiName: 'OpenAI API Key (DALL-E)',
    ui: `
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Mô tả bức ảnh (Prompt)</label>
              <textarea placeholder="Ví dụ: Một con mèo mặc đồ phi hành gia đang đi trên sao hỏa, phong cách cyberpunk..." className="w-full min-h-[150px] p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700 resize-y"></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Kích thước</label>
                <select className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none text-slate-700">
                  <option>1024x1024 (Vuông)</option><option>1792x1024 (Ngang)</option><option>1024x1792 (Dọc)</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Phong cách</label>
                <select className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none text-slate-700">
                  <option>Vivid (Sống động)</option><option>Natural (Tự nhiên)</option>
                </select>
              </div>
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-emerald-600 to-[#15803d] text-white font-bold rounded-xl hover:from-emerald-500 hover:to-emerald-700 transition-colors shadow-md">Tạo Ảnh Ngay</button>
          </div>
          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center min-h-[400px]">
             <div className="text-slate-400 text-sm flex flex-col items-center">
                <ImageIcon className="w-16 h-16 mb-4 opacity-20" />
                Kết quả hình ảnh sẽ hiển thị tại đây
             </div>
          </div>
        </div>
    `
  },

  // --- Mạng xã hội & Ads ---
  {
    path: 'tai-video-tiktok', title: 'Tải Video TikTok', icon: 'Download', desc: 'Tải video TikTok không logo, không watermark chất lượng cao.', requiresApi: false,
    ui: `
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto py-12 gap-6">
          <div className="w-full relative">
            <input type="text" placeholder="Dán đường dẫn (link) video TikTok vào đây..." className="w-full p-4 pr-32 border-2 border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-slate-700 text-lg shadow-sm" />
            <button className="absolute right-2 top-2 bottom-2 px-6 bg-[#15803d] text-white font-bold rounded-full hover:bg-emerald-700 transition-colors">Tải Về</button>
          </div>
          <p className="text-sm text-slate-500 font-medium">Hỗ trợ tải video định dạng MP4 HD, không dính logo watermark và tải file âm thanh MP3.</p>
        </div>
    `
  },
  {
    path: 'tai-video-fb-reels', title: 'Tải Video FB/Reels', icon: 'Video', desc: 'Tải video từ Facebook và Facebook Reels về máy.', requiresApi: false,
    ui: `
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto py-12 gap-6">
          <div className="w-full relative">
            <input type="text" placeholder="Dán link video Facebook hoặc Reels vào đây..." className="w-full p-4 pr-32 border-2 border-blue-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-slate-700 text-lg shadow-sm" />
            <button className="absolute right-2 top-2 bottom-2 px-6 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors">Tải Về</button>
          </div>
          <p className="text-sm text-slate-500 font-medium">Hỗ trợ tải video Facebook chất lượng SD, HD, FullHD nhanh chóng miễn phí.</p>
        </div>
    `
  },

  // --- Tài chính & Đời sống ---
  {
    path: 'tinh-lai-suat-vay', title: 'Tính lãi suất vay', icon: 'Percent', desc: 'Công cụ tính lãi suất vay ngân hàng trả góp hàng tháng.', requiresApi: false,
    ui: `
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex flex-col gap-5 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 border-b pb-2">Thông số khoản vay</h3>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Số tiền vay (VNĐ)</label>
              <div className="relative">
                <input type="number" placeholder="Ví dụ: 100000000" className="w-full p-3 pr-16 border border-slate-200 rounded-xl text-slate-700 font-bold" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">VNĐ</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Thời gian vay (Tháng)</label>
              <div className="relative">
                <input type="number" placeholder="Ví dụ: 12" className="w-full p-3 pr-20 border border-slate-200 rounded-xl text-slate-700 font-bold" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">Tháng</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Lãi suất (%/năm)</label>
              <div className="relative">
                <input type="number" step="0.1" placeholder="Ví dụ: 8.5" className="w-full p-3 pr-16 border border-slate-200 rounded-xl text-slate-700 font-bold" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">%</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Phương pháp tính</label>
              <select className="w-full p-3 border border-slate-200 rounded-xl text-slate-700">
                <option>Dư nợ giảm dần</option>
                <option>Dư nợ gốc (Cố định)</option>
              </select>
            </div>
            <button className="w-full py-4 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors shadow-md mt-2">Tính Toán Trả Nợ</button>
          </div>
          
          <div className="flex-[1.5] flex flex-col">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                <p className="text-xs font-semibold text-emerald-600 mb-1 uppercase">Tổng lãi phải trả</p>
                <p className="text-2xl font-black text-emerald-700">0 ₫</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p className="text-xs font-semibold text-slate-500 mb-1 uppercase">Tổng số tiền gốc + lãi</p>
                <p className="text-2xl font-black text-slate-800">0 ₫</p>
              </div>
            </div>
            <h3 className="font-bold text-slate-800 mb-3">Lịch trả nợ chi tiết</h3>
            <div className="border border-slate-200 rounded-xl overflow-hidden flex-1 flex items-center justify-center bg-slate-50 min-h-[300px]">
               <span className="text-slate-400 text-sm font-medium">Nhập thông tin và bấm tính toán để xem bảng</span>
            </div>
          </div>
        </div>
    `
  },
  {
    path: 'lich-van-nien', title: 'Lịch vạn niên', icon: 'CalendarDays', desc: 'Xem lịch âm dương, ngày tốt xấu, giờ hoàng đạo.', requiresApi: false,
    ui: `
        <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-100 min-h-[500px]">
           <CalendarDays className="w-20 h-20 text-red-300 mb-4" />
           <h2 className="text-2xl font-bold text-red-800 mb-2">Module Lịch Vạn Niên Đang Tích Hợp</h2>
           <p className="text-red-600/80 text-center max-w-md">Chức năng tính toán lịch âm dương phức tạp đang được xây dựng. Vui lòng quay lại sau.</p>
        </div>
    `
  },

  // --- Code Tools ---
  {
    path: 'sql-formatter', title: 'SQL Formatter', icon: 'Database', desc: 'Làm đẹp và định dạng mã SQL dễ đọc hơn.', requiresApi: false,
    ui: `
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <select className="p-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 bg-white">
              <option>Chuẩn SQL</option><option>MySQL</option><option>PostgreSQL</option><option>Transact-SQL</option>
            </select>
            <button className="px-4 py-2 bg-slate-800 text-white rounded-lg text-sm font-bold hover:bg-slate-700 transition-colors">Format Code</button>
            <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors">Xóa</button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[500px]">
            <textarea placeholder="Nhập câu lệnh SQL chưa định dạng..." className="w-full h-full p-4 font-mono text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-800 resize-none"></textarea>
            <textarea readOnly placeholder="Kết quả SQL đã format..." className="w-full h-full p-4 font-mono text-sm bg-slate-800 text-emerald-400 border border-slate-700 rounded-xl focus:outline-none resize-none"></textarea>
          </div>
        </div>
    `
  },
  {
    path: 'css-js-minifier', title: 'CSS/JS Minifier', icon: 'Zap', desc: 'Nén và tối ưu hóa mã CSS, JavaScript giảm dung lượng.', requiresApi: false,
    ui: `
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <select className="p-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 bg-white">
              <option>JavaScript</option><option>CSS</option>
            </select>
            <button className="px-4 py-2 bg-[#15803d] text-white rounded-lg text-sm font-bold hover:bg-emerald-700 transition-colors">Nén Code (Minify)</button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[400px]">
            <textarea placeholder="Dán mã nguồn cần nén vào đây..." className="w-full h-full p-4 font-mono text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-800 resize-none"></textarea>
            <textarea readOnly placeholder="Kết quả mã nguồn đã được nén..." className="w-full h-full p-4 font-mono text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none resize-none"></textarea>
          </div>
        </div>
    `
  },
  {
    path: 'cron-generator', title: 'Cron Generator', icon: 'Calendar', desc: 'Tạo và giải thích biểu thức Cron dễ dàng.', requiresApi: false,
    ui: `
        <div className="flex flex-col gap-8">
           <div className="bg-slate-800 text-white p-8 rounded-2xl flex flex-col items-center text-center">
             <div className="text-4xl md:text-6xl font-black font-mono text-emerald-400 mb-4 tracking-widest">* * * * *</div>
             <p className="text-lg text-slate-300 font-semibold">Chạy vào mọi phút, mọi giờ, mọi ngày.</p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
             <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Phút (Minute)</label>
                <input type="text" defaultValue="*" className="w-full p-3 border border-slate-200 rounded-lg font-mono text-center font-bold text-lg focus:outline-none focus:border-emerald-500" />
             </div>
             <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Giờ (Hour)</label>
                <input type="text" defaultValue="*" className="w-full p-3 border border-slate-200 rounded-lg font-mono text-center font-bold text-lg focus:outline-none focus:border-emerald-500" />
             </div>
             <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Ngày (Day of Month)</label>
                <input type="text" defaultValue="*" className="w-full p-3 border border-slate-200 rounded-lg font-mono text-center font-bold text-lg focus:outline-none focus:border-emerald-500" />
             </div>
             <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Tháng (Month)</label>
                <input type="text" defaultValue="*" className="w-full p-3 border border-slate-200 rounded-lg font-mono text-center font-bold text-lg focus:outline-none focus:border-emerald-500" />
             </div>
             <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Thứ (Day of Week)</label>
                <input type="text" defaultValue="*" className="w-full p-3 border border-slate-200 rounded-lg font-mono text-center font-bold text-lg focus:outline-none focus:border-emerald-500" />
             </div>
           </div>
        </div>
    `
  },
  {
    path: 'html-entities', title: 'HTML Entities', icon: 'Globe', desc: 'Chuyển đổi các ký tự đặc biệt thành HTML entities và ngược lại.', requiresApi: false,
    ui: `
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 mb-2">
            <button className="px-6 py-2.5 bg-[#15803d] text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors">Mã Hóa (Encode)</button>
            <button className="px-6 py-2.5 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors">Giải Mã (Decode)</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[300px]">
            <textarea placeholder="Nhập văn bản vào đây..." className="w-full h-full p-4 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 resize-none"></textarea>
            <textarea readOnly placeholder="Kết quả HTML entities..." className="w-full h-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none resize-none"></textarea>
          </div>
        </div>
    `
  },

  // --- Mạng & Bảo mật ---
  {
    path: 'port-checker', title: 'Port Checker', icon: 'Terminal', desc: 'Kiểm tra trạng thái các port trên máy chủ.', requiresApi: false,
    ui: `
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1 flex flex-col gap-2 w-full">
            <label className="text-sm font-semibold text-slate-700">Tên miền hoặc Địa chỉ IP</label>
            <input type="text" placeholder="Ví dụ: google.com hoặc 8.8.8.8" className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-700" />
          </div>
          <div className="w-full md:w-48 flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Cổng (Port)</label>
            <input type="text" placeholder="Ví dụ: 80, 443, 22" className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-700" />
          </div>
          <button className="w-full md:w-auto px-8 py-3 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors">Kiểm Tra</button>
        </div>
        <div className="mt-8 bg-slate-800 rounded-xl p-6 h-64 text-emerald-400 font-mono text-sm flex items-center justify-center">
           > _ Sẵn sàng kiểm tra kết nối mạng...
        </div>
    `
  },
  {
    path: 'ip-address-search', title: 'IP Address Search', icon: 'Compass', desc: 'Tra cứu thông tin chi tiết về địa chỉ IP.', requiresApi: false,
    ui: `
        <div className="flex flex-col gap-6">
          <div className="flex gap-2">
            <input type="text" placeholder="Nhập địa chỉ IPv4 hoặc IPv6..." className="flex-1 p-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-700 font-semibold text-lg shadow-sm" />
            <button className="px-8 py-4 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors shadow-sm">Tra Cứu</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
             <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
               <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Quốc gia</p>
               <p className="text-lg font-semibold text-slate-800">--</p>
             </div>
             <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
               <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Thành phố</p>
               <p className="text-lg font-semibold text-slate-800">--</p>
             </div>
             <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
               <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Nhà mạng (ISP)</p>
               <p className="text-lg font-semibold text-slate-800">--</p>
             </div>
          </div>
        </div>
    `
  },
  {
    path: 'ipv4-to-ipv6', title: 'IPv4 to IPv6', icon: 'ArrowLeftRight', desc: 'Chuyển đổi địa chỉ IPv4 sang định dạng IPv6.', requiresApi: false,
    ui: `
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto py-8 gap-8">
          <div className="w-full flex flex-col gap-2 text-left">
            <label className="text-sm font-semibold text-slate-700 ml-1">Địa chỉ IPv4</label>
            <input type="text" placeholder="Ví dụ: 192.168.1.1" className="w-full p-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-700 font-mono text-lg text-center" />
          </div>
          
          <button className="p-4 bg-emerald-100 text-emerald-600 rounded-full hover:bg-emerald-200 transition-colors shadow-sm">
            <ArrowLeftRight className="w-6 h-6 rotate-90" />
          </button>
          
          <div className="w-full flex flex-col gap-2 text-left">
             <label className="text-sm font-semibold text-slate-700 ml-1">Địa chỉ IPv6 (Mapped)</label>
             <input readOnly type="text" placeholder="0:0:0:0:0:ffff:c0a8:0101" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none text-slate-700 font-mono text-lg text-center" />
          </div>
        </div>
    `
  },
  {
    path: 'security-headers', title: 'Security Headers', icon: 'Lock', desc: 'Kiểm tra các HTTP Security Headers của website.', requiresApi: false,
    ui: `
        <div className="flex flex-col gap-6">
          <div className="flex gap-2">
            <input type="url" placeholder="https://congcuseoai.com" className="flex-1 p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700 shadow-sm font-medium" />
            <button className="px-8 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors">Quét Headers</button>
          </div>
          
          <div className="border border-slate-200 rounded-xl overflow-hidden text-sm">
            <div className="bg-slate-50 p-3 font-bold text-slate-700 border-b flex justify-between">
              <span>Security Header</span>
              <span>Trạng thái</span>
            </div>
            <div className="p-10 text-center text-slate-400 font-medium">
               Chưa có dữ liệu quét.
            </div>
          </div>
        </div>
    `
  },

  // --- AI Assist & Tiện ích ---
  {
    path: 'continue-writing', title: 'Continue Writing AI', icon: 'PenTool', desc: 'AI tự động viết tiếp đoạn văn bản đang viết dở của bạn.', requiresApi: true, apiName: 'OpenAI API Key',
    ui: `
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Đoạn văn đang viết dở (Ngữ cảnh)</label>
            <textarea placeholder="Ngày xửa ngày xưa, ở một ngôi làng nọ..." className="w-full min-h-[150px] p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700 resize-y"></textarea>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2 w-full sm:w-auto">
              <select className="p-3 border border-slate-200 rounded-xl focus:outline-none bg-white text-sm">
                <option>Viết thêm 1 đoạn ngắn</option>
                <option>Viết thêm 3 đoạn chi tiết</option>
                <option>Kết luận bài viết</option>
              </select>
            </div>
            <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-600 to-[#15803d] text-white font-bold rounded-xl hover:from-emerald-500 hover:to-emerald-700 transition-colors shadow-md">Tự Động Viết Tiếp</button>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-sm font-semibold text-slate-700">Kết quả</label>
            <textarea readOnly className="w-full min-h-[250px] p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 resize-y"></textarea>
          </div>
        </div>
    `
  },
  {
    path: 'youtube-name-gen', title: 'YouTube Name Gen', icon: 'Video', desc: 'Tạo ý tưởng tên kênh YouTube độc đáo và thu hút.', requiresApi: true, apiName: 'OpenAI API Key',
    ui: `
        <div className="flex flex-col gap-6 text-center max-w-3xl mx-auto w-full py-8">
          <h2 className="text-3xl font-black text-slate-800">Tạo Tên Kênh YouTube Viral</h2>
          <div className="flex flex-col gap-4 text-left">
            <input type="text" placeholder="Chủ đề kênh của bạn? (vd: Nấu ăn, Du lịch bụi, Review công nghệ)" className="w-full p-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-red-500 text-slate-700 text-lg shadow-sm" />
            <input type="text" placeholder="Có bao gồm từ khóa nào không? (tùy chọn)" className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 text-slate-700" />
            
            <button className="w-full py-4 mt-2 bg-red-600 text-white font-black rounded-xl hover:bg-red-700 transition-colors shadow-lg text-lg">TẠO 10 Ý TƯỞNG TÊN KÊNH</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-slate-400 font-medium border-dashed">
                 <span>Ý tưởng tên kênh #{i}</span>
                 <Copy className="w-4 h-4 cursor-pointer hover:text-slate-600" />
              </div>
            ))}
          </div>
        </div>
    `
  },
  {
    path: 'faq-generator', title: 'FAQ Generator', icon: 'HelpCircle', desc: 'Tạo bộ câu hỏi thường gặp (FAQ) tự động cho bài viết.', requiresApi: true, apiName: 'OpenAI API Key',
    ui: `
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Nội dung bài viết / Mô tả sản phẩm</label>
            <textarea placeholder="Dán nội dung bài viết của bạn vào đây, AI sẽ đọc và tự sinh ra các câu hỏi người dùng hay thắc mắc..." className="w-full min-h-[150px] p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700 resize-y"></textarea>
          </div>
          <button className="px-6 py-3 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors self-start">Tự động sinh FAQ</button>
          <div className="mt-4 border border-slate-200 rounded-xl p-6 bg-slate-50 min-h-[200px] flex items-center justify-center text-slate-400 font-medium">
             Danh sách câu hỏi và câu trả lời sẽ xuất hiện tại đây
          </div>
        </div>
    `
  },
  {
    path: 'tao-khung-avatar', title: 'Tạo khung avatar', icon: 'User', desc: 'Tạo khung ảnh đại diện (avatar) đẹp cho các mạng xã hội.', requiresApi: false,
    ui: `
        <div className="flex flex-col items-center py-8 gap-8">
           <div className="w-64 h-64 rounded-full border-4 border-dashed border-emerald-200 flex items-center justify-center bg-slate-50 text-slate-400 overflow-hidden relative group cursor-pointer hover:bg-slate-100 transition-colors">
              <div className="flex flex-col items-center gap-2">
                 <UploadCloud className="w-8 h-8" />
                 <span className="text-sm font-semibold">Tải ảnh đại diện</span>
              </div>
           </div>
           
           <div className="w-full max-w-xl flex flex-col gap-3">
              <label className="text-sm font-semibold text-slate-700 text-center">Chọn mẫu khung (Frame)</label>
              <div className="flex gap-4 overflow-x-auto pb-4 justify-center">
                 {[1, 2, 3, 4].map(i => (
                   <div key={i} className="w-20 h-20 rounded-full border-2 border-slate-200 bg-emerald-50 flex-shrink-0 flex items-center justify-center font-bold text-emerald-600 text-xs cursor-pointer hover:border-emerald-500">Mẫu #{i}</div>
                 ))}
              </div>
           </div>
           
           <button className="px-10 py-3 bg-[#15803d] text-white font-bold rounded-full hover:bg-emerald-700 transition-colors shadow-lg">Tải Xuống Avatar</button>
        </div>
    `
  },
  {
    path: 'qr-code', title: 'QR Code Generator', icon: 'QrCode', desc: 'Tạo mã QR code tùy chỉnh cho URL, văn bản, số điện thoại...', requiresApi: false,
    ui: `
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="flex-1 w-full flex flex-col gap-4">
             <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Dữ liệu mã hóa (URL, Số điện thoại, Văn bản...)</label>
                <textarea placeholder="https://congcuseoai.com" className="w-full min-h-[100px] p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-700"></textarea>
             </div>
             <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Màu sắc QR</label>
                <div className="flex gap-3">
                   <input type="color" defaultValue="#000000" className="w-12 h-12 rounded cursor-pointer border-0 p-0" />
                   <div className="flex-1 flex items-center px-3 border border-slate-200 rounded-xl text-sm font-mono bg-slate-50 text-slate-600">#000000</div>
                </div>
             </div>
             <button className="w-full py-3 bg-[#15803d] text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors mt-2">Cập nhật QR Code</button>
          </div>
          
          <div className="w-64 h-64 border border-slate-200 rounded-2xl bg-slate-50 flex flex-col items-center justify-center shrink-0 p-6 gap-4">
             <QrCode className="w-full h-full text-slate-300" />
             <button className="px-4 py-2 w-full bg-slate-800 text-white font-semibold rounded-lg text-sm hover:bg-slate-700 transition-colors">Tải xuống (PNG)</button>
          </div>
        </div>
    `
  }
];

const appDir = path.join(process.cwd(), 'src', 'app');

tools.forEach(tool => {
  const toolDir = path.join(appDir, tool.path);
  if (!fs.existsSync(toolDir)) {
    fs.mkdirSync(toolDir, { recursive: true });
  }

  const pagePath = path.join(toolDir, 'page.tsx');
  
  const componentName = tool.path.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Page';
  
  const content = `"use client";

import React, { useState } from "react";
import GenericToolLayout from "@/components/tools/GenericToolLayout";
import { ${tool.icon}, UploadCloud, Copy } from "lucide-react";

export default function ${componentName}() {
  return (
    <GenericToolLayout
      title="${tool.title}"
      description="${tool.desc}"
      icon={<${tool.icon} className="w-5 h-5" />}
      requiresApi={${!!tool.requiresApi}}
      ${tool.apiName ? `apiName="${tool.apiName}"` : ''}
    >
      <div className="p-6 md:p-8">
        ${tool.ui}
      </div>
    </GenericToolLayout>
  );
}
`;

  fs.writeFileSync(pagePath, content);
  console.log("Built " + tool.path);
});
