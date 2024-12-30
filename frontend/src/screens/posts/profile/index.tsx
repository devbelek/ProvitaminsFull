import { PostProfilePageProps } from "@/app/posts/[id]/page";
import { getPost } from "@/src/api/posts";
import Image from "next/image";
import parse from "html-react-parser";

async function PostProfile({ params }: PostProfilePageProps) {
  const post = await getPost({ id: params.id });

  return (
    <div className="grid gap-5 xl:gap-8">
      <h1 className="font-semibold text-xl lg:text-2xl">{post.title}</h1>
      <div className="aspect-[96/45] relative">
        <Image
          src={post.image}
          sizes="full"
          fill
          alt="post"
          className="object-cover rounded"
        />
      </div>
      <div>{parse(post.description)}</div>
    </div>
  );
}

export default PostProfile;
