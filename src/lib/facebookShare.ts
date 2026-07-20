export interface ShareToFacebookParams {
  pageId: string;
  pageToken: string;
  message: string;
  link: string;
}

/**
 * Chia sẻ bài viết lên Facebook Fanpage
 */
export const shareToFacebook = async (params: ShareToFacebookParams) => {
  const { pageId, pageToken, message, link } = params;

  try {
    const response = await fetch(`https://graph.facebook.com/v19.0/${pageId}/feed`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        link,
        access_token: pageToken,
      }),
    });

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error.message);
    }
    
    return { success: true, id: data.id };
  } catch (error: any) {
    console.error("Lỗi chia sẻ Facebook:", error);
    return { success: false, error: error.message || 'Có lỗi xảy ra khi đăng bài lên Facebook' };
  }
};
