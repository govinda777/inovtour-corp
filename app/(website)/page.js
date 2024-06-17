import Home from "./home";
import { getAllPosts } from "@/lib/sanity/client";

export default async function IndexPage() {
  return <Home />;
}

// export const revalidate = 60;
