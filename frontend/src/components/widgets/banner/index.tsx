import BannerCarousel from "./carousel";
import { getBanner } from "@/src/api/banner";

async function Banner() {
  const banners = await getBanner();
  return <BannerCarousel data={banners} />;
}

export default Banner;
