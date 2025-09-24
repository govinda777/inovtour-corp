import PostList from "@/components/postlist";
import Pagination from "@/components/blog/pagination";

// Simulação de posts locais (substitui o Sanity)
const allPosts = [
  {
    _id: "1",
    title: "Primeiro Post",
    slug: { current: "primeiro-post" },
    mainImage: { url: "/img/post1.jpg", alt: "Post 1" },
    author: { name: "Autor 1", image: { url: "/img/author1.jpg" } },
    publishedAt: "2025-01-01",
    categories: [{ title: "Viagem", slug: { current: "viagem" } }],
  },
  {
    _id: "2",
    title: "Segundo Post",
    slug: { current: "segundo-post" },
    mainImage: { url: "/img/post2.jpg", alt: "Post 2" },
    author: { name: "Autor 2", image: { url: "/img/author2.jpg" } },
    publishedAt: "2025-01-05",
    categories: [{ title: "Turismo", slug: { current: "turismo" } }],
  },
];

export default async function Post({ searchParams }) {
  const page = searchParams?.page;
  const pageIndex = parseInt(page || "1", 10) || 1;

  const POSTS_PER_PAGE = 6;
  const startIndex = (pageIndex - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const posts = allPosts.slice(startIndex, endIndex);

  const isFirstPage = pageIndex < 2;
  const isLastPage = endIndex >= allPosts.length;

  return (
    <>
      {posts.length === 0 && (
        <div className="flex h-40 items-center justify-center">
          <span className="text-lg text-gray-500">End of the result!</span>
        </div>
      )}
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {posts.map((post) => (
          <PostList key={post._id} post={post} aspect="square" />
        ))}
      </div>

      <Pagination pageIndex={pageIndex} isFirstPage={isFirstPage} isLastPage={isLastPage} />
    </>
  );
}
