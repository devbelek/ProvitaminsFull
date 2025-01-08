import dynamic from "next/dynamic";

export const ResponsiveMasonry = dynamic(() =>
  import("react-responsive-masonry").then((mod) => mod.ResponsiveMasonry)
);
export const Masonry = dynamic(() => import("react-responsive-masonry"));
