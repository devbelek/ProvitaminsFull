import PostCard from "./item";
import { getPosts } from "@/src/api/posts";

async function PostCards() {
  const data = await getPosts();
  return (
    <ul className="grid sm:grid-cols-2 xl:grid-cols-3 gap-2.5 sm:gap-5 mb-10">
      {data.results.map((item) => (
        <PostCard key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default PostCards;
