import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { keyword, audience } = await req.json();

    if (!keyword) {
      return NextResponse.json(
        { error: "Từ khóa hạt giống là bắt buộc" },
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

    const prompt = `Bạn là một chuyên gia SEO hàng đầu. Hãy lập sơ đồ cấu trúc chủ đề (Topical Map) toàn diện cho từ khóa chính sau đây: "${keyword}". Đối tượng độc giả mục tiêu định hướng viết bài là: "${audience}".
Sơ đồ cần bao gồm khoảng 4-6 cụm chủ đề chính (mục lớn) và mỗi cụm chủ đề chứa khoảng 3-5 tiêu đề bài viết con cụ thể hướng tới việc phủ rộng từ khóa và tối ưu hóa SEO Topical Authority (độ phủ chủ đề).
Trả về kết quả dưới dạng JSON là một mảng (Array) gồm các đối tượng (Object), mỗi đối tượng có định dạng:
{
  "title": "Tên cụm chủ đề lớn",
  "subtopics": [
    "Tiêu đề bài viết con 1",
    "Tiêu đề bài viết con 2",
    "..."
  ]
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
                  title: { type: "STRING" },
                  subtopics: {
                    type: "ARRAY",
                    items: { type: "STRING" },
                  },
                },
                required: ["title", "subtopics"],
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
