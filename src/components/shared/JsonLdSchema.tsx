import React from "react";

export default function JsonLdSchema() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://dinhkhanhtung.com/#clinic",
        "name": "Phòng Chẩn Trị YHCT Thu Bẩy",
        "alternateName": "Đông Y Thu Bẩy Thái Nguyên",
        "url": "https://dinhkhanhtung.com/dich-vu",
        "logo": "https://dinhkhanhtung.com/favicon.png",
        "image": "https://dinhkhanhtung.com/favicon.png",
        "description": "Phòng Chẩn Trị Y Học Cổ Truyền Thu Bẩy chuyên khám chữa bệnh bằng Đông y, Thuốc Nam bí truyền, châm cứu, xoa bóp bấm huyệt tại Thái Nguyên.",
        "telephone": "0982581222",
        "email": "dinhkhanhtung@outlook.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Tổ 10, Quan Triều",
          "addressLocality": "TP. Thái Nguyên",
          "addressRegion": "Thái Nguyên",
          "postalCode": "250000",
          "addressCountry": "VN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 21.6167,
          "longitude": 105.8333
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "08:00",
            "closes": "18:00"
          }
        ],
        "medicalSpecialty": [
          "TraditionalChineseMedicine",
          "Acupuncture"
        ]
      },
      {
        "@type": "Physician",
        "@id": "https://dinhkhanhtung.com/#physician",
        "name": "Đinh Khánh Tùng",
        "jobTitle": "Thầy thuốc Y Học Cổ Truyền",
        "worksFor": {
          "@id": "https://dinhkhanhtung.com/#clinic"
        },
        "url": "https://dinhkhanhtung.com/gioi-thieu",
        "telephone": "0982581222",
        "email": "dinhkhanhtung@outlook.com",
        "sameAs": [
          "https://www.facebook.com/dinhkhanhtung",
          "https://zalo.me/0982581222"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Thái Nguyên",
          "addressCountry": "VN"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://dinhkhanhtung.com/#website",
        "url": "https://dinhkhanhtung.com",
        "name": "Đinh Khánh Tùng - Y Học Cổ Truyền & Công Cụ Số",
        "description": "Chia sẻ tri thức Y học cổ truyền, công nghệ AI và bộ công cụ số hữu ích.",
        "publisher": {
          "@id": "https://dinhkhanhtung.com/#physician"
        },
        "inLanguage": "vi-VN"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
