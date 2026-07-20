export interface Post {
  id: string; // Firestore Document ID
  slug: string;
  title: string;
  category: string;
  categoryStyle?: string;
  categoryIcon?: any; // React.ReactNode is handled in UI directly
  date: string;
  author: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  status: 'published' | 'draft';
  categoryId?: string | null;
  categoryName?: string | null;
  categorySlug?: string | null;
  autoShareFacebook?: boolean;
  createdAt?: any; // Firestore Timestamp
  updatedAt?: any; // Firestore Timestamp
  toc?: TocItem[];
  isStatic?: boolean; // Cờ nhận biết bài viết mẫu
}

export interface TocItem {
  id: string;
  title: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  parentId?: string | null; // ID danh mục cha
}

export interface APIKeysSettings {
  imgbbApiKey?: string;
  facebookPageId?: string;
  facebookPageToken?: string;
}
