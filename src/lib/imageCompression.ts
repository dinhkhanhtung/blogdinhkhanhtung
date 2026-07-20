export interface CompressOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number; // 0.0 to 1.0
  type?: string; // 'image/jpeg' or 'image/webp'
}

/**
 * Nén hình ảnh ở client side sử dụng Canvas API
 */
export const compressImage = async (file: File, options: CompressOptions = {}): Promise<File> => {
  const { maxWidth = 1200, maxHeight = 800, quality = 0.8, type = 'image/jpeg' } = options;

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        // Tính toán tỷ lệ kích thước mới
        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Canvas context is not available'));
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Canvas to Blob failed'));
              return;
            }
            // Giữ lại tên gốc và chuyển đổi extension nếu cần
            let newName = file.name;
            if (type === 'image/jpeg' && !newName.toLowerCase().endsWith('.jpg') && !newName.toLowerCase().endsWith('.jpeg')) {
              newName = newName.replace(/\.[^/.]+$/, "") + ".jpg";
            }
            
            const newFile = new File([blob], newName, {
              type: type,
              lastModified: Date.now(),
            });
            resolve(newFile);
          },
          type,
          quality
        );
      };
      img.onerror = (error) => reject(error);
    };
    reader.onerror = (error) => reject(error);
  });
};

/**
 * Tải ảnh lên ImgBB
 */
export const uploadToImgBB = async (file: File, apiKey: string): Promise<string> => {
  const formData = new FormData();
  formData.append('image', file);

  const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  if (data.success) {
    return data.data.url;
  } else {
    throw new Error(data.error?.message || 'Lỗi upload ảnh lên ImgBB');
  }
};
