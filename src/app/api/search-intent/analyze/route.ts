import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { keywords } = await req.json();

    if (!keywords || !Array.isArray(keywords) || keywords.length === 0) {
      return NextResponse.json(
        { error: "Danh sách từ khóa hợp lệ là bắt buộc" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Chưa cấu hình GEMINI_API_KEY trong hệ thống" },
        { status: 500 }
      );
    }

    const keywordsList = keywords.join("\n");
    const prompt = `Bạn là một chuyên gia phân tích ngữ nghĩa và hành vi người dùng tìm kiếm trên Google (SEO Search Intent Analyzer). Hãy phân tích ý định tìm kiếm đứng sau danh sách các từ khóa sau đây (mỗi từ khóa một dòng):
${keywordsList}

Phân loại rõ ràng cho mỗi từ khóa thuộc một trong bốn loại intent sau:
- Informational: Người dùng tìm kiếm kiến thức, thông tin giải đáp thắc mắc.
- Navigational: Người dùng tìm kiếm một trang web, địa chỉ hoặc thương hiệu cụ thể để truy cập.
- Commercial: Người dùng đang nghiên cứu, so sánh các sản phẩm/dịch vụ trước khi đưa ra quyết định mua.
- Transactional: Người dùng sẵn sàng mua hàng, đăng ký dịch vụ hoặc tải ứng dụng ngay lập tức.

Trả về kết quả dưới dạng JSON là một mảng gồm các đối tượng, mỗi đối tượng có định dạng:
{
  "keyword": "từ khóa gốc",
  "intent": "Informational" | "Navigational" | "Commercial" | "Transactional",
  "score": "Độ tin cậy phân tích (ví dụ: '95%')",
  "description": "Mô tả ngắn giải thích lý do tại sao phân loại như vậy bằng tiếng Việt"
}`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
          generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
              type: "ARRAY",
              items: {
                type: "OBJECT",
                properties: {
                  keyword: { type: "STRING" },
                  intent: {
                    type: "STRING",
                    enum: ["Informational", "Navigational", "Commercial", "Transactional"],
                  },
                  score: { type: "STRING" },
                  description: { type: "STRING" },
                },
                required: ["keyword", "intent", "score", "description"],
              },
            },
          },
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API Error:", errText);
      return NextResponse.json(
        { error: "Lỗi kết nối đến dịch vụ AI. Vui lòng thử lại sau." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const textResult = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!textResult) {
      return NextResponse.json(
        { error: "Không nhận được phản hồi từ AI" },
        { status: 500 }
      );
    }

    const parsedJson = JSON.parse(textResult);
    return NextResponse.json({ result: parsedJson });
  } catch (error: any) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: error.message || "Lỗi xử lý nội bộ hệ thống" },
      { status: 500 }
    );
  }
}
