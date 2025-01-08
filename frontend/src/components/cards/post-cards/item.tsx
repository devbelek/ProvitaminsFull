import { Post } from "@/src/api/posts";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";

function PostCard({ title, image, description, id }: Post) {
  return (
    <li className="rounded-[10px] border border-stroke overflow-hidden">
      <div className="relative aspect-[306/200]">
        <Image
          src={image}
          fill
          sizes="100%"
          alt="post"
          className="object-cover"
        />
      </div>
      <div className="p-4 sm:p-5 grid gap-2">
        <h3 className="font-semibold">{title}</h3>
        <div className="text-sm line-clamp-4 text-[#808080]">
          {parse(description)}
        </div>
        <div>
          <Link
            href={`/posts/${id}`}
            className="py-2.5 px-3.5 rounded-lg bg-input text-main text-sm font-medium inline-block hover:bg-main-light hover:text-main"
          >
            <div className="flex items-center gap-2">
              <span>Читать далее</span>
              <div className="w-3 aspect-square relative">
                <Image
                  src="/images/global/icons/arrow-right.svg"
                  fill
                  sizes="100%"
                  alt="post"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </li>
  );
}

export default PostCard;
