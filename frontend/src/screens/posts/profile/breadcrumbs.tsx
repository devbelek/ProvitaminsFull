import { PostProfilePageProps } from "@/app/posts/[id]/page";
import { getPost } from "@/src/api/posts";
import BreadCrumbs from "@/src/components/widgets/bread-crumbs";

async function PostProfileBreadcrumbs({ params }: PostProfilePageProps) {
  const post = await getPost({ id: params.id });

  const location = [
    {
      href: "/",
      name: "Главная",
    },
    {
      href: "/posts",
      name: "Полезное",
    },
    {
      href: `/posts/${params.id}`,
      name: post.title,
    },
  ];

  return (
    <div className="container pt-5 hidden lg:block">
      <BreadCrumbs location={location} />
    </div>
  );
}

export default PostProfileBreadcrumbs;
