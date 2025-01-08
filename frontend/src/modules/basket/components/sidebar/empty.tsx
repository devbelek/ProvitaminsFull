import Image from "next/image";

function EmptyBasket() {
  return (
    <div className="flex flex-col items-center gap-10 h-full justify-center">
      <h4 className="font-bold text-lg">Ваша корзина пуста</h4>
      <div className="aspect-[200/146] w-[200px] relative">
        <Image
          src="/images/global/common/empty-basket.svg"
          alt="empty"
          fill
          priority
          sizes="100%"
        />
      </div>
    </div>
  );
}

export default EmptyBasket;
