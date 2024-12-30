export default function Divider({ title }: { title: string }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t-[3px] border-main" />
      </div>
      <div className="relative flex justify-center">
        <span className="px-3 bg-white font-bold text-xl md:text-2xl xl:text-3xl text-center">
          {title}
        </span>
      </div>
    </div>
  );
}
