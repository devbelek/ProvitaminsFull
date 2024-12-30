import Image from "next/image";

interface Props {
  title: string;
}

function EmptyContent({ title }: Props) {
  return (
    <div className="flex flex-col items-center gap-10 lg:gap-[50px] py-20">
      <h1 className="text-lg lg:text-xl font-bold">{title}</h1>
      <div className="relative aspect-[200/146] w-[200px] lg:w-[350px]">
        <Image
          src="/images/global/common/empty-basket.svg"
          alt="empty"
          fill
          sizes="full"
          priority
        />
      </div>
    </div>
  );
}

export default EmptyContent;
