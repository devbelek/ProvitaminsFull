import ContentLayout from "@/src/layout/content";
import PostProfileBreadcrumbs from "@/src/screens/posts/profile/breadcrumbs";
import PostProfile from "@/src/screens/posts/profile";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

export interface PostProfilePageProps {
  params: {
    id: number;
  };
}

async function PostProfilePage({ params }: PostProfilePageProps) {
  return (
    <div>
      <Suspense>
        <PostProfileBreadcrumbs params={params} />
      </Suspense>
      <ContentLayout>
        <Suspense fallback={<Skeleton className="w-full h-screen" />}>
          <PostProfile params={params} />
        </Suspense>
      </ContentLayout>
    </div>
  );
}

export default PostProfilePage;
