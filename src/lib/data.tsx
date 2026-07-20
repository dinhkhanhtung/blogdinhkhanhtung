import React from 'react';
import { Monitor, Search, Feather, HeartPulse, Heart, Map as MapIcon } from 'lucide-react';
import { Post } from '@/types/blog';

export const SAMPLE_POSTS: Post[] = [
  {
    id: "static-1",
    slug: "ky-thuat-tap-go-10-ngon-tay-dung-cach-khong-can-nhin-ban-phim-2026",
    title: "Kỹ Thuật Tập Gõ 10 Ngón Tay Đúng Cách, Không Cần Nhìn Bàn Phím 2026",
    category: "Công nghệ & AI",
    categoryStyle: "bg-sky-50 text-sky-700 border-sky-100 dark:bg-sky-950/30 dark:text-sky-400 dark:border-sky-900/50",
    date: "01/06/2026",
    author: "Admin",
    imageUrl: "/images/ubuntu_workspace.png",
    excerpt: "Hướng dẫn tập gõ 10 ngón tay chuẩn 2026. Bí quyết làm chủ bàn phím, tăng tốc độ WPM, bảo vệ sức khỏe công thái học và lộ trình luyện tập chi tiết cho người mới.",
    status: 'published',
    isStatic: true,
    content: `
      <h3 id="tai-sao-quan-trong">1. Tại sao gõ 10 ngón tay lại quan trọng đến thế?</h3>
      <p>Gõ 10 ngón không chỉ là một kỹ năng tin học văn phòng cơ bản, mà nó là chìa khóa giúp bạn tối ưu hóa 200% hiệu suất làm việc hằng ngày trên máy tính. Khi không cần cúi xuống nhìn bàn phím, bạn có thể tập trung hoàn toàn vào nội dung tư duy hiển thị trên màn hình, giúp luồng suy nghĩ trôi chảy, mạch lạc.</p>
      <p>Bên cạnh đó, việc gõ phím đúng cách còn giúp phân phối đều lực gõ lên tất cả các ngón tay thay vì dồn lực vào 2 ngón trỏ, bảo vệ khớp ngón tay khỏi các chấn thương mỏi khớp lâu dài.</p>
      
      <h3 id="nguyen-tac-co-ban">2. Nguyên tắc cơ bản khi gõ 10 ngón bàn phím</h3>
      <p>Đặt ngón tay đúng vị trí xuất phát trên hàng phím cơ sở (Home Row): các ngón tay trái đặt lên các phím A, S, D, F; các ngón tay phải đặt lên các phím J, K, L, ;. Hai ngón cái đặt nhẹ lên phím Space. Hãy nhớ phím F và J luôn có gờ nổi để bạn định vị vị trí đặt ngón tay mà không cần nhìn mắt.</p>
      
      <h3 id="cac-buoc-ren-luyen">3. Các bước rèn luyện tập gõ 10 ngón hiệu quả</h3>
      <p>Luyện tập hằng ngày thông qua các phần mềm tập gõ phím trực tuyến nổi tiếng như TypingClub, 10FastFingers hoặc Keybr. Hãy nhớ: Tập trung hoàn toàn vào sự chính xác của ngón tay trước khi cố gắng tăng tốc độ gõ (WPM). Gõ chậm nhưng chuẩn xác sẽ tạo phản xạ cơ bắp bền vững.</p>
      
      <h3 id="tu-the-ngoi">4. Tư thế ngồi chuẩn công thái học khi gõ phím</h3>
      <p>Ngồi thẳng lưng, mắt nhìn thẳng màn hình cách khoảng 50 - 70cm. Cùi chỏ cánh tay gập góc 90 độ đặt thoải mái trên bàn làm việc để giảm tải lực đè nén lên vai gáy cổ.</p>
    `
  },
  {
    id: "static-2",
    slug: "cach-xay-dung-topical-authority-thong-tri-cong-cu-tim-kiem",
    title: "Cách xây dựng Topical Authority thống trị công cụ tìm kiếm",
    category: "SEO",
    categoryStyle: "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/50",
    date: "12/07/2026",
    author: "Admin",
    imageUrl: "/images/ubuntu_workspace.png",
    excerpt: "Topical Authority là yếu tố cốt lõi giúp website đạt thứ hạng cao mà không cần quá nhiều backlinks. Hãy cùng tìm hiểu cách lập Topical Map hiệu quả nhất.",
    status: 'published',
    isStatic: true,
    content: `
      <h3 id="dinh-nghia">1. Topical Authority là gì?</h3>
      <p>Topical Authority (Độ phủ chủ đề) là cách các công cụ tìm kiếm như Google đánh giá một website có phải là chuyên gia đáng tin cậy trong một lĩnh vực cụ thể hay không. Website có độ phủ chủ đề rộng, sâu sắc sẽ được ưu tiên xếp hạng cao hơn.</p>
      
      <h3 id="quy-trinh-trien-khai">2. Quy trình 3 bước đạt Topical Authority</h3>
      <p>Để đạt được Topical Authority, doanh nghiệp và nhà sản xuất nội dung cần tuân thủ lộ trình triển khai gồm 3 trụ cột cốt lõi sau:</p>
      <ol>
        <li><strong>Lập Topical Map:</strong> Phân tích và liệt kê toàn bộ các từ khóa nhánh xung quanh từ khóa hạt giống (seed keyword) để phủ kín kiến thức.</li>
        <li><strong>Sản xuất nội dung phủ rộng:</strong> Viết các bài viết chi tiết trả lời chính xác tất cả các truy vấn của khách hàng tương ứng với sơ đồ.</li>
        <li><strong>Cấu trúc liên kết nội bộ (Internal Link):</strong> Kết nối các bài viết phụ bổ trợ về bài viết cột trụ chính một cách chặt chẽ.</li>
      </ol>
      
      <h3 id="ung-dung-ai">3. Ứng dụng AI xây dựng Topical Map thần tốc</h3>
      <p>Trước đây, việc phân tích thực tế và tạo lập một Topical Map hoàn thiện tốn từ 3 - 5 ngày làm việc của các SEO Specialist chuyên nghiệp. Tuy nhiên, bằng việc ứng dụng các thuật toán xử lý ngôn ngữ tự nhiên hiện đại, hệ thống <strong>Topical Map AI</strong> trên cổng công cụ của chúng tôi có khả năng xử lý, gom nhóm từ khóa và xuất bản sơ đồ hoàn chỉnh chỉ trong chưa đầy 3 phút.</p>
      <p>Đây là giải pháp tuyệt vời giúp tối ưu hóa ngân sách và định hướng nội dung bài viết đi đúng trọng tâm, bỏ qua hoàn toàn các bước thủ công rườm rà.</p>
    `
  },
  {
    id: "static-3",
    slug: "gia-tri-cua-cac-bai-thuoc-nam-va-duoc-lieu-quy-quanh-ta",
    title: "Giá trị của các bài Thuốc Nam và dược liệu quý quanh ta",
    category: "Thuốc Nam",
    categoryStyle: "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/50",
    date: "10/07/2026",
    author: "Phòng Chẩn Trị Thu Bẩy",
    imageUrl: "/images/vietnamese_herbs.png",
    excerpt: "Việt Nam có nguồn cây thuốc Nam vô cùng phong phú. Việc ứng dụng đúng cách dược liệu tự nhiên đem lại hiệu quả bền vững, an toàn cho sức khỏe.",
    status: 'published',
    isStatic: true,
    content: `
      <h3 id="kho-tang">1. Cây thuốc Nam - Kho tàng dược liệu quý giá</h3>
      <p>Thuốc Nam sử dụng các loại thảo mộc sinh trưởng trực tiếp tại đất nước Việt Nam, rất phù hợp với thổ nhưỡng, khí hậu và cơ địa của người Việt. Phương châm \"Nam dược trị Nam nhân\" (Thuốc Nam trị bệnh cho người Nam) luôn là kim chỉ nam trong hoạt động chẩn trị y khoa của chúng tôi.</p>
      
      <h3 id="cac-cay-thuoc">2. Một số cây thuốc Nam gần gũi dễ tìm</h3>
      <p>Xung quanh vườn nhà của chúng ta luôn có những vị dược liệu vô cùng quý giá mà đôi khi vô tình bị lãng quên:</p>
      <ul>
        <li><strong>Lá lốt:</strong> Có tác dụng ấm khớp, trừ phong hàn, hỗ trợ giảm đau nhức chân tay khi thời tiết thay đổi.</li>
        <li><strong>Đinh lăng:</strong> Hỗ trợ bổ khí huyết, bồi bổ sinh lực, giảm mệt mỏi và cải thiện giấc ngủ rất tốt.</li>
        <li><strong>Ngải cứu:</strong> Giúp ôn kinh, cầm máu, giảm đau đầu và lưu thông khí huyết vai gáy.</li>
      </ul>
      
      <h3 id="dieu-tri-man-tinh">3. Ứng dụng Thuốc Nam trong điều trị bệnh mạn tính</h3>
      <p>Không giống như Tây y tập trung giải quyết triệu chứng nhanh chóng, Thuốc Nam hướng đến việc điều hòa lại chức năng các tạng phủ bị suy yếu, từ đó khôi phục lại sự cân bằng tự nhiên của cơ thể. Quá trình này đòi hỏi sự kiên trì nhưng đem lại hiệu quả điều trị tận gốc, bền vững và hoàn toàn lành tính.</p>
      <p>Để được bắt mạch tư vấn bài thuốc Nam phù hợp với thể trạng riêng, mời bạn đến trực tiếp <strong>Phòng Chẩn Trị YHCT Thu Bẩy</strong> tại Thái Nguyên để có chỉ định chuẩn xác nhất.</p>
    `
  },
  {
    id: "static-4",
    slug: "tra-co-duoc-lieu-phap-duong-sinh-tu-nhien-cai-thien-giac-ngu",
    title: "Trà cổ dược: Liệu pháp dưỡng sinh tự nhiên cải thiện giấc ngủ",
    category: "Trà cổ dược",
    categoryStyle: "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/50",
    date: "08/07/2026",
    author: "Admin",
    imageUrl: "/images/vietnamese_herbs.png",
    excerpt: "Trà cổ dược kết hợp các thảo dược dưỡng tâm an thần giúp giải tỏa căng thẳng thần kinh, thanh lọc cơ thể và mang lại giấc ngủ sâu tự nhiên.",
    status: 'published',
    isStatic: true,
    content: `
      <h3 id="tra-co-duoc-la-gi">1. Trà cổ dược là gì?</h3>
      <p>Là sự kết hợp giữa văn hóa thưởng trà truyền thống với các vị thuốc Đông Y bổ ích như táo đỏ, kỷ tử, hoa cúc, tâm sen và cam thảo. Trà cổ dược không chỉ mang hương vị thơm ngon, thư thái mà còn là một phương pháp dưỡng sinh đơn giản hằng ngày giúp ổn định huyết áp, bảo vệ tim mạch.</p>
      
      <h3 id="loi-ich">2. Lợi ích khi dùng trà cổ dược dưỡng sinh</h3>
      <ul>
        <li><strong>An thần, ngủ ngon:</strong> Giảm hẳn chứng trằn trọc, mất ngủ ở người lớn tuổi mà không gây lệ thuộc như thuốc tây.</li>
        <li><strong>Thanh nhiệt, mát gan:</strong> Đào thải độc tố tích tụ trong cơ thể hiệu quả.</li>
        <li><strong>Giảm lo âu:</strong> Giúp cân bằng lại nhịp tim và tinh thần sau những giờ làm việc mệt mỏi.</li>
      </ul>
      
      <h3 id="huong-dan">3. Hướng dẫn sử dụng trà cổ dược đúng cách</h3>
      <p>Để trà cổ dược phát huy công dụng tối đa, bạn nên hãm trà bằng nước sôi ở nhiệt độ khoảng 90 độ C trong vòng 10 - 15 phút. Uống ấm vào buổi sáng hoặc trước khi đi ngủ 1 tiếng sẽ giúp thần kinh thư giãn sâu, cải thiện chất lượng giấc ngủ rõ rệt.</p>
    `
  },
  {
    id: "static-5",
    slug: "tai-sao-nguoi-dung-nen-chuyen-huong-su-dung-ubuntu-linux",
    title: "Tại sao người dùng nên chuyển hướng sử dụng Ubuntu / Linux?",
    category: "Công nghệ & AI",
    categoryStyle: "bg-sky-50 text-sky-700 border-sky-100 dark:bg-sky-950/30 dark:text-sky-400 dark:border-sky-900/50",
    date: "06/07/2026",
    author: "Admin",
    imageUrl: "/images/ubuntu_workspace.png",
    excerpt: "Ubuntu đang ngày càng thân thiện, bảo mật cao và mượt mà hơn. Đây là thời điểm tuyệt vời để thiết lập hệ điều hành mã nguồn mở bền vững.",
    status: 'published',
    isStatic: true,
    content: `
      <h3 id="xu-huong">1. Xu hướng chuyển dịch sang hệ điều hành mã nguồn mở</h3>
      <p>Trong bối cảnh an toàn thông tin được đặt lên hàng đầu, Ubuntu và các phân phối Linux đang trở thành sự lựa chọn tuyệt vời cho cả người dùng cá nhân lẫn doanh nghiệp nhờ tính ổn định cao, hoàn toàn miễn phí và không có mã độc theo dõi.</p>
      
      <h3 id="loi-ich-cai-dat">2. Lợi ích khi cài đặt Ubuntu</h3>
      <ul>
        <li><strong>Hiệu năng mượt mà:</strong> Linux tận dụng tối đa tài nguyên phần cứng, giúp máy tính cũ hoạt động nhanh như mới.</li>
        <li><strong>An toàn bảo mật:</strong> Gần như miễn nhiễm với các loại virus và phần mềm quảng cáo độc hại trên môi trường internet.</li>
        <li><strong>Thân thiện và dễ sử dụng:</strong> Giao diện Ubuntu hiện đại, trực quan, hỗ trợ cài đặt các phần mềm văn phòng, trình duyệt web chỉ bằng một click chuột.</li>
      </ul>
      
      <h3 id="bat-dau-nhu-the-nao">3. Bắt đầu với Ubuntu như thế nào?</h3>
      <p>Với người mới bắt đầu, bạn không cần phải xóa Windows ngay. Bạn có thể sử dụng tính năng "Live USB" để trải nghiệm trực tiếp hệ điều hành Ubuntu từ ổ đĩa ngoài hoặc cài đặt dạng song song (Dual Boot) để chuyển đổi qua lại thuận tiện khi cần thiết.</p>
    `
  },
  {
    id: "static-6",
    slug: "dao-ly-nhan-sinh-tim-lai-su-an-yen-giua-thoi-dai-so",
    title: "Đạo lý nhân sinh: Tìm lại sự an yên giữa thời đại số",
    category: "Đạo lý",
    categoryStyle: "bg-rose-50 text-rose-700 border-rose-100 dark:bg-rose-950/30 dark:text-rose-400 dark:border-rose-900/50",
    date: "04/07/2026",
    author: "Admin",
    imageUrl: "/images/vietnamese_herbs.png",
    excerpt: "Mỗi ngày trôi qua là một cơ hội để chiêm nghiệm về cuộc sống. Hãy giữ cho tâm trí tĩnh lặng trước guồng quay hối hả bên ngoài.",
    status: 'published',
    isStatic: true,
    content: `
      <h3 id="song-cham">1. Sống chậm giữa thời đại số</h3>
      <p>Chúng ta đang sống trong kỷ nguyên thông tin bùng nổ, nơi mọi thứ di chuyển quá nhanh. Việc dành ra những khoảng lặng tĩnh tâm giúp ta nhận ra những giá trị cốt lõi nhất của cuộc sống: sức khỏe, gia đình và sự bình yên trong tâm hồn.</p>
      
      <h3 id="triet-ly-dong-y">2. Triết lý Nhân sinh từ Đông Y</h3>
      <p>Y học cổ truyền quan niệm con người là một tiểu vũ trụ, sức khỏe chỉ thực sự tốt khi có sự cân bằng giữa Thể xác và Tâm trí (Thân tâm an lạc). Việc cân bằng giữa làm việc, nghỉ ngơi, duy trì thái độ tích cực chính là liều thuốc bổ lớn nhất của đời người.</p>
      
      <h3 id="buong-bo">3. Học cách buông bỏ phiền muộn</h3>
      <p>Suy nghĩ quá nhiều (Ưu tư thương tì) sẽ gây hại trực tiếp cho hệ tiêu hóa và khí huyết của cơ thể. Học cách chấp nhận những điều không hoàn hảo, đơn giản hóa suy nghĩ chính là cách hữu hiệu nhất để nuôi dưỡng sinh mệnh.</p>
    `
  },
  {
    id: "static-7",
    slug: "thai-nguyen-que-toi-net-dep-vung-che-quan-trieu-xua-va-nay",
    title: "Thái Nguyên quê tôi: Nét đẹp vùng chè Quan Triều xưa và nay",
    category: "Cuộc sống riêng",
    categoryStyle: "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-900/50",
    date: "02/07/2026",
    author: "Admin",
    imageUrl: "/images/vietnamese_herbs.png",
    excerpt: "Góc nhỏ quê hương tại Tổ 10, Quan Triều. Những đổi thay bình yên của vùng đất Thái Nguyên tươi đẹp và văn hóa trà đặc sản.",
    status: 'published',
    isStatic: true,
    content: `
      <h3 id="vung-dat-que-huong">1. Vùng đất Quan Triều yêu dấu</h3>
      <p>Tọa lạc tại phía bắc thành phố Thái Nguyên, Quan Triều là nơi gắn liền với tuổi thơ và sự nghiệp chẩn trị y học của tôi. Nơi đây mang nhịp sống bình dị nhưng đang chuyển mình phát triển mạnh mẽ từng ngày.</p>
      
      <h3 id="van-hoa-tra">2. Văn hóa trà và sức khỏe Đông Y</h3>
      <p>Trà Thái Nguyên không chỉ là thức uống giao tế đậm đà tình nghĩa, mà dưới góc nhìn y học cổ truyền, trà còn là một vị thuốc quý giúp thanh nhiệt, giải độc, sáng mắt và hỗ trợ tiêu hóa tốt nếu dùng đúng cách. Thưởng trà mỗi sáng là nét đẹp văn hóa thư thái của con người Thái Nguyên quê tôi.</p>
    `
  },
  {
    id: "static-8",
    slug: "chinh-phuc-khach-hang-voi-mail-pilot",
    title: "Chinh phục khách hàng với Mail Pilot",
    category: "Marketing",
    categoryStyle: "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/50",
    date: "07/03/2026",
    author: "Admin",
    imageUrl: "/images/ubuntu_workspace.png",
    excerpt: "Khám phá Mail Pilot - nền tảng Email Marketing toàn diện giúp tự động hóa chiến dịch, bảo vệ danh tiếng tên miền, tối ưu chi phí và làm chủ 100% dữ liệu.",
    status: 'published',
    isStatic: true,
    content: `
      <h3>1. Mail Pilot là gì?</h3>
      <p>Mail Pilot là hệ thống Email Marketing tự lưu trữ (self-hosted) giúp các nhà quảng cáo tối ưu hóa toàn diện ngân sách gửi thư. Khác biệt lớn nhất với các dịch vụ SaaS truyền thống là bạn hoàn toàn làm chủ cơ sở dữ liệu khách hàng và không chịu giới hạn danh sách người nhận.</p>
      
      <h3>2. Tính năng vượt trội của Mail Pilot</h3>
      <ul>
        <li><strong>Tự động hóa chuỗi thư:</strong> Thiết lập kịch bản gửi email tự động chăm sóc khách hàng dựa theo hành vi click hoặc mở thư.</li>
        <li><strong>Bảo vệ danh tiếng tên miền:</strong> Tích hợp các giao thức xác thực DKIM, SPF, DMARC nâng cao để tránh thư bị rơi vào mục Spam.</li>
        <li><strong>Quản lý chi phí hiệu quả:</strong> Chỉ chi trả cho hạ tầng máy chủ gửi thư thực tế mà không lo chi phí tăng dần theo quy mô danh sách liên hệ.</li>
      </ul>
    `
  },
  {
    id: "static-9",
    slug: "do-dai-bai-viet-co-quan-trong-de-xuat-hien-trong-ai-overviews",
    title: "Độ dài bài viết có quan trọng để xuất hiện trong AI Overviews?",
    category: "SEO",
    categoryStyle: "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/50",
    date: "04/12/2025",
    author: "Admin",
    imageUrl: "/images/ubuntu_workspace.png",
    excerpt: "Ahrefs cho thấy độ dài bài viết gần như không ảnh hưởng đến việc được Google AI Overviews trích dẫn - chất lượng và cấu trúc mới là then chốt.",
    status: 'published',
    isStatic: true,
    content: `
      <h3>1. Kết quả nghiên cứu thực tế từ Ahrefs</h3>
      <p>Sau khi phân tích hàng triệu truy vấn tìm kiếm kích hoạt tính năng AI Overviews (Sơ lược bằng AI) của Google, dữ liệu cho thấy không hề có mối tương quan trực tiếp nào giữa tổng số từ của bài viết với tỷ lệ được trích dẫn nguồn làm câu trả lời.</p>
      
      <h3>2. Làm thế nào để được Google AI lựa chọn?</h3>
      <p>Thay vì viết quá dài dòng lê thê để tăng số lượng chữ, bạn hãy tập trung vào các tiêu chuẩn tối ưu hóa cho AI Search:</p>
      <ol>
        <li><strong>Trả lời trực diện:</strong> Viết câu trả lời ngắn gọn, súc tích (khoảng 45-60 từ) ngay dưới thẻ tiêu đề H2/H3.</li>
        <li><strong>Sử dụng định dạng danh sách (List):</strong> AI rất thích các định dạng thẻ list (ul, ol) để trích xuất nhanh dữ liệu.</li>
        <li><strong>Thông tin xác thực (E-E-A-T):</strong> Trích dẫn các nghiên cứu khoa học, số liệu chính xác để tăng điểm uy tín bài viết.</li>
      </ol>
    `
  },
  {
    id: "static-10",
    slug: "quality-score-la-gi-bai-hoc-tu-google-ads-giup-toi-uu-on-page",
    title: "Quality Score là gì? Bài học từ Google Ads giúp tối ưu On-page",
    category: "SEO",
    categoryStyle: "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/50",
    date: "04/12/2025",
    author: "Admin",
    imageUrl: "/images/ubuntu_workspace.png",
    excerpt: "Hiểu Quality Score từ Google Ads giúp tối ưu SEO On-page hiệu quả. Tập trung vào CTR, liên quan từ khóa & trải nghiệm trang đích để tăng thứ hạng.",
    status: 'published',
    isStatic: true,
    content: `
      <h3>1. Khái niệm Điểm chất lượng (Quality Score)</h3>
      <p>Quality Score là thang điểm từ 1 đến 10 của Google dùng để đánh giá mức độ liên quan và trải nghiệm của quảng cáo cũng như trang đích đối với người dùng. Điểm chất lượng cao giúp giảm chi phí click quảng cáo và tăng vị trí hiển thị.</p>
      
      <h3>2. Bài học ứng dụng cho SEO On-page</h3>
      <p>Chúng ta hoàn toàn có thể mang triết lý tối ưu Quality Score của Google Ads áp dụng vào SEO On-page tự nhiên:</p>
      <ul>
        <li><strong>Tăng tỷ lệ CTR:</strong> Viết thẻ Title và Meta Description lôi cuốn, kích thích người dùng click chuột.</li>
        <li><strong>Trải nghiệm trang đích:</strong> Tăng tốc độ tải trang dưới 2 giây và đảm bảo layout hiển thị hoàn hảo trên giao diện di động.</li>
        <li><strong>Mật độ từ khóa tự nhiên:</strong> Tránh nhồi nhét từ khóa bừa bãi, thay vào đó hãy sử dụng các từ đồng nghĩa (LSI Keywords) để tăng độ mạch lạc của nội dung.</li>
      </ul>
    `
  },
  {
    id: "static-11",
    slug: "answer-engine-optimization-aeo-la-gi-huong-dan-toi-uu-ai-search",
    title: "Answer Engine Optimization (AEO) là gì? Hướng dẫn tối ưu AI Search",
    category: "SEO",
    categoryStyle: "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/50",
    date: "03/12/2025",
    author: "Admin",
    imageUrl: "/images/ubuntu_workspace.png",
    excerpt: "AEO là gì? Tối ưu hóa nội dung để trở thành câu trả lời trực tiếp cho AI Search, Voice Search & Featured Snippets. Nắm bắt xu hướng mới nhất!",
    status: 'published',
    isStatic: true,
    content: `
      <h3>1. Sự trỗi dậy của AEO (Answer Engine Optimization)</h3>
      <p>AEO là quá trình tối ưu hóa nội dung để các công cụ trả lời trực tiếp (như ChatGPT, Perplexity, Google Gemini) dễ dàng tìm kiếm, trích xuất và hiển thị nội dung của bạn làm câu trả lời duy nhất cho người dùng.</p>
      
      <h3>2. So sánh SEO truyền thống và AEO</h3>
      <p>Nếu SEO truyền thống hướng đến việc đưa website lên top 10 công cụ tìm kiếm để có traffic vào trang, thì AEO hướng đến việc biến thông tin của bạn thành nguồn cấp dữ liệu cho các mô hình ngôn ngữ lớn (LLM). Mục tiêu là câu trả lời của bạn được AI đọc to lên hoặc hiển thị trực tiếp ở phần tóm tắt.</p>
    `
  }
];

export const getIconForCategory = (categoryName: string) => {
  switch (categoryName) {
    case 'SEO':
    case 'Marketing':
      return <Search className="w-3.5 h-3.5" />;
    case 'Công nghệ & AI':
      return <Monitor className="w-3.5 h-3.5" />;
    case 'Thuốc Nam':
      return <Feather className="w-3.5 h-3.5" />;
    case 'Trà cổ dược':
      return <HeartPulse className="w-3.5 h-3.5" />;
    case 'Đạo lý':
      return <Heart className="w-3.5 h-3.5" />;
    case 'Cuộc sống riêng':
      return <MapIcon className="w-3.5 h-3.5" />;
    default:
      return <Feather className="w-3.5 h-3.5" />;
  }
};

export const getStyleForCategory = (categoryName: string) => {
  switch (categoryName) {
    case 'SEO':
    case 'Marketing':
    case 'Thuốc Nam':
    case 'Trà cổ dược':
      return "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/50";
    case 'Công nghệ & AI':
      return "bg-sky-50 text-sky-700 border-sky-100 dark:bg-sky-950/30 dark:text-sky-400 dark:border-sky-900/50";
    case 'Đạo lý':
      return "bg-rose-50 text-rose-700 border-rose-100 dark:bg-rose-950/30 dark:text-rose-400 dark:border-rose-900/50";
    case 'Cuộc sống riêng':
      return "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-900/50";
    default:
      return "bg-gray-50 text-gray-700 border-gray-100 dark:bg-gray-950/30 dark:text-gray-400 dark:border-gray-900/50";
  }
};
