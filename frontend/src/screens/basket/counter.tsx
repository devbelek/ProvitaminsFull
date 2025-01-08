import OrderModal from "@/src/modules/order/components/modal";

interface Props {
  totalCount: number;
  totalFullPrice: number;
  totalSale: number;
}

function Counter({ totalCount, totalFullPrice, totalSale }: Props) {
  return (
    <div className="bg-white border rounded-[10px] border-stroke">
      <div className="grid gap-2 p-4 border-b border-stroke">
        <div className="flex justify-between items-center">
          <p className="text-sm xl:text-base text-[#808080]">
            Количество товаров:
          </p>
          <p className="text-sm xl:text-base">{totalCount}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm xl:text-base text-[#808080]">Сумма:</p>
          <p className="text-sm xl:text-base">{totalFullPrice}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm xl:text-base text-[#808080]">Скидка:</p>
          <p className="text-sm xl:text-base">{totalSale}</p>
        </div>
      </div>
      <div className="p-4 grid gap-4">
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg">Итого</p>
          <p className="font-bold text-lg">{totalFullPrice - totalSale}с</p>
        </div>
        <div className="grid">
          <OrderModal />
        </div>
      </div>
    </div>
  );
}

export default Counter;
