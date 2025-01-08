import { getInfo } from "@/src/api/info";
import Image from "next/image";
import parse from "html-react-parser";

interface Props {
  bg?: string;
}

async function AboutCompanySection({ bg = "white" }: Props) {
  const info = await getInfo();
  return (
    info.results.length > 0 &&
    info.results[0] && (
      <section
        className="overflow-hidden relative"
        style={{ backgroundColor: bg }}
      >
        <div className="grid xl:grid-cols-2 container py-[60px] xl:py-40">
          <div className="relative">
            <div className="absolute -top-8 -left-0 xl:-top-36 xl:-left-28 2xl:-left-36 w-6 -scale-x-[1] aspect-square">
              <Image
                src="/images/global/leaves/1s.png"
                alt="bg"
                sizes="full"
                className="object-contain"
                fill
                priority
              />
            </div>
            <div className="absolute top-10 -left-24 w-10 aspect-square hidden lg:block">
              <Image
                src="/images/global/leaves/1s.png"
                alt="bg"
                sizes="full"
                className="object-contain"
                fill
                priority
              />
            </div>
            <div className="absolute -top-[72px] left-24 xl:-top-28 xl:left-[30%] w-10 scale-110 aspect-square">
              <Image
                src="/images/global/leaves/1s.png"
                alt="bg"
                sizes="full"
                className="object-contain"
                fill
                priority
              />
            </div>
            <div className="absolute -top-12 right-24 scale-x-[-1] xl:-top-36 xl:right-32 w-6 xl:w-10 xl:scale-90 aspect-square">
              <Image
                src="/images/global/leaves/1s.png"
                alt="bg"
                sizes="full"
                className="object-contain"
                fill
                priority
              />
            </div>
            <div className="absolute -top-12 -right-4 xl:top-0 xl:right-4 w-10 scale-x-[-1] aspect-square">
              <Image
                src="/images/global/leaves/1s.png"
                alt="bg"
                sizes="full"
                className="object-contain"
                fill
                priority
              />
            </div>
            <div className="xl:text-lg max-w-[400px] mx-auto xl:text-start xl:mx-0">
              {parse(info.results[0].description)}
            </div>
            <div className="absolute -bottom-14 left-0 xl:-bottom-32 xl:-left-28 w-6 -scale-x-[1] aspect-square">
              <Image
                src="/images/global/leaves/1s.png"
                alt="bg"
                sizes="full"
                className="object-contain"
                fill
                priority
              />
            </div>
            <div className="absolute -bottom-9 xl:-bottom-20 left-16 w-7 xl:w-10 scale-110 aspect-square">
              <Image
                src="/images/global/leaves/1s.png"
                alt="bg"
                sizes="full"
                className="object-contain"
                fill
                priority
              />
            </div>
            <div className="absolute -bottom-9 right-0 xl:-bottom-28 xl:right-56 w-10 scale-90 aspect-square">
              <Image
                src="/images/global/leaves/1s.png"
                alt="bg"
                sizes="full"
                className="object-contain"
                fill
                priority
              />
            </div>
            <div className="absolute -bottom-16 right-28 xl:-bottom-10 xl:right-16 w-10 scale-x-[-1] aspect-square">
              <Image
                src="/images/global/leaves/1s.png"
                alt="bg"
                sizes="full"
                className="object-contain"
                fill
                priority
              />
            </div>
          </div>
        </div>
        <div className="hidden xl:grid grid-cols-2 absolute top-0 left-0 bottom-0 right-0 w-full">
          <div></div>
          <div className="bg-main flex justify-center items-center">
            <div className="relative aspect-[586/379] w-[400px] 2xl:w-[586px]">
              <Image src={info.results[0].image} alt="logo" fill sizes="full" />
            </div>
          </div>
        </div>
      </section>
    )
  );
}

export default AboutCompanySection;
