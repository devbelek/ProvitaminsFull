import { MultipleResponse } from "../types/api";

export interface Post {
  id: number;
  title: string;
  image: string;
  description: string;
}

export async function getPosts() {
  const response = await fetch(
    `${process.env.BASE_URL}/contents/blog_posts/?limit=1000`,
    { cache: "no-cache" }
  );

  return (await response.json()) as MultipleResponse<Post>;
}

export async function getPost({ id }: { id: number }) {
  const response = await fetch(
    `${process.env.BASE_URL}/contents/blog_posts/${id}`,
    { cache: "no-cache" }
  );

  return (await response.json()) as Post;
}
