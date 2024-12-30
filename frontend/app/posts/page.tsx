import { getPosts } from "@/src/api/posts";
import PostCards from "@/src/components/cards/post-cards";
import BreadCrumbs from "@/src/components/widgets/bread-crumbs";
import ContentLayout from "@/src/layout/content";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

const location = [
  {
    href: "/",
    name: "Главная",
  },
  {
    href: "/posts",
    name: "Полезное",
  },
];

async function BlogsPage() {
  return (
    <div>
      <div className="container pt-5 hidden lg:block">
        <BreadCrumbs location={location} />
      </div>
      <ContentLayout>
        <div>
          <Suspense fallback={<Skeleton className="w-full h-screen" />}>
            <PostCards />
          </Suspense>
        </div>
      </ContentLayout>
    </div>
  );
}

export default BlogsPage;
