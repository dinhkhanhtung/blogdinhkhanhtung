import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/app/blog/page.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Add new imports
const importTarget = `import {
  BookOpen,`;
const newImports = `import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import { SAMPLE_POSTS, getIconForCategory, getStyleForCategory } from '@/lib/data';
import { Post, TocItem } from '@/types/blog';

import {
  BookOpen,`;

content = content.replace(importTarget, newImports);

// 2. Remove old interfaces
const interfacesTargetRegex = /interface TocItem \{[\s\S]*?imageUrl: string;\n  toc\?: TocItem\[\];\n\}\n/g;
content = content.replace(interfacesTargetRegex, '');

// 3. Remove SAMPLE_POSTS array
const samplePostsRegex = /const SAMPLE_POSTS: Post\[\] = \[\s*\{[\s\S]*?\}\n\];\n/g;
content = content.replace(samplePostsRegex, '');

// 4. Update BlogPostDetail signature
const detailSignatureOld = `function BlogPostDetail({ post, onOpenPost }: { post: Post; onOpenPost: (slug: string) => void }) {`;
const detailSignatureNew = `function BlogPostDetail({ post, allPosts, onOpenPost }: { post: Post; allPosts: Post[]; onOpenPost: (slug: string) => void }) {`;
content = content.replace(detailSignatureOld, detailSignatureNew);

// 5. Update latestPosts and relatedPosts inside BlogPostDetail
const relatedOld = `  // 5 bài viết mới nhất làm link nội bộ sidebar
  const latestPosts = SAMPLE_POSTS.slice(0, 5);

  // 3 bài viết cùng danh mục/liên quan làm gợi ý
  const relatedPosts = SAMPLE_POSTS.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3);

  // Fallback nếu không có bài cùng danh mục, lấy bài ngẫu nhiên khác
  const displayRelated = relatedPosts.length > 0 
    ? relatedPosts 
    : SAMPLE_POSTS.filter((p) => p.id !== post.id).slice(0, 3);`;

const relatedNew = `  // 5 bài viết mới nhất làm link nội bộ sidebar
  const latestPosts = allPosts.slice(0, 5);

  // 3 bài viết cùng danh mục/liên quan làm gợi ý
  const relatedPosts = allPosts.filter((p) => (p.category === post.category || p.categoryName === post.category) && p.id !== post.id).slice(0, 3);

  // Fallback nếu không có bài cùng danh mục, lấy bài ngẫu nhiên khác
  const displayRelated = relatedPosts.length > 0 
    ? relatedPosts 
    : allPosts.filter((p) => p.id !== post.id).slice(0, 3);`;
content = content.replace(relatedOld, relatedNew);

// 6. Update BlogContent to fetch data
const blogContentOld = `export default function BlogContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Lấy category và post slug từ URL
  const activeCategory = searchParams.get("category") || "Tất cả";
  const activePostSlug = searchParams.get("post");

  const [searchQuery, setSearchQuery] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Lấy bài viết đang đọc chi tiết dựa trên query parameter ?post=slug
  const activePost = activePostSlug
    ? SAMPLE_POSTS.find((post) => post.slug === activePostSlug)
    : null;`;

const blogContentNew = `export default function BlogContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Lấy category và post slug từ URL
  const activeCategory = searchParams.get("category") || "Tất cả";
  const activePostSlug = searchParams.get("post");

  const [searchQuery, setSearchQuery] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, 'posts'), where('status', '==', 'published'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const dynamicPosts: Post[] = [];
        querySnapshot.forEach((doc) => {
          dynamicPosts.push({ id: doc.id, ...doc.data() } as Post);
        });
        
        // Gộp và loại trùng slug
        const mergedPosts = [...dynamicPosts];
        for (const staticPost of SAMPLE_POSTS) {
          if (!mergedPosts.find(p => p.slug === staticPost.slug)) {
            mergedPosts.push(staticPost as unknown as Post);
          }
        }
        setAllPosts(mergedPosts);
      } catch (error) {
        console.error("Lỗi lấy bài viết:", error);
        setAllPosts(SAMPLE_POSTS as unknown as Post[]);
      } finally {
        setLoadingPosts(false);
      }
    };
    fetchPosts();
  }, []);

  // Lấy bài viết đang đọc chi tiết dựa trên query parameter ?post=slug
  const activePost = activePostSlug
    ? allPosts.find((post) => post.slug === activePostSlug)
    : null;`;

content = content.replace(blogContentOld, blogContentNew);

// 7. Update SAMPLE_POSTS usages in BlogContent
const sampleMapOld = `  const filteredPosts = SAMPLE_POSTS.filter((post) => {
    const matchesCategory = activeCategory === "Tất cả" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });`;
const sampleMapNew = `  const filteredPosts = allPosts.filter((post) => {
    const categoryName = post.category || post.categoryName || '';
    const matchesCategory = activeCategory === "Tất cả" || categoryName === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });`;
content = content.replace(sampleMapOld, sampleMapNew);

// 8. Update category rendering
const categoryOld = `{post.categoryIcon}
                    {post.category}`;
const categoryNew = `{post.categoryIcon || getIconForCategory(post.category || post.categoryName || '')}
                    {post.category || post.categoryName}`;
content = content.replace(categoryOld, categoryNew);

const catStyleOld = `\${post.categoryStyle}`;
const catStyleNew = `\${post.categoryStyle || getStyleForCategory(post.category || post.categoryName || '')}`;
// Replace multiple occurrences (safely via regex)
content = content.replace(/\$\{post\.categoryStyle\}/g, catStyleNew);

// 9. Update BlogPostDetail call
content = content.replace(`<BlogPostDetail post={activePost} onOpenPost={handleOpenPost} />`, `<BlogPostDetail post={activePost} allPosts={allPosts} onOpenPost={handleOpenPost} />`);

// 10. Handle dangerous inner html for content since it's dynamic
const contentHtmlOld = `<div
              className="mt-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />`;
const contentHtmlNew = `<div
              className="mt-6 content-html"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />`;
content = content.replace(contentHtmlOld, contentHtmlNew);


// Handle return early if loading
const returnOld = `  if (activePost) {
    return (
      <div className="min-h-screen bg-[#fbfaf8] dark:bg-[#060e0a]">`;
const returnNew = `  if (loadingPosts) {
    return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>;
  }

  if (activePost) {
    return (
      <div className="min-h-screen bg-[#fbfaf8] dark:bg-[#060e0a]">`;
content = content.replace(returnOld, returnNew);


fs.writeFileSync(filePath, content);
console.log('Successfully updated page.tsx');
