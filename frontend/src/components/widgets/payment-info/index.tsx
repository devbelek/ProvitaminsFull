import { getRequisites } from "@/src/api/delivery";

async function PaymentInfo() {
  const requisites = await getRequisites();
  return (
    <div className="rounded-[10px] border border-stroke bg-input">
      <div className="py-4 px-5 flex items-center gap-4 border-b">
        <div className="relative w-6 aspect-square">
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.75 11C14.5511 11 14.3603 11.079 14.2197 11.2197C14.079 11.3603 14 11.5511 14 11.75C14 11.9489 14.079 12.1397 14.2197 12.2803C14.3603 12.421 14.5511 12.5 14.75 12.5H17.75C17.9489 12.5 18.1397 12.421 18.2803 12.2803C18.421 12.1397 18.5 11.9489 18.5 11.75C18.5 11.5511 18.421 11.3603 18.2803 11.2197C18.1397 11.079 17.9489 11 17.75 11H14.75ZM0.5 4.25C0.5 3.25544 0.895088 2.30161 1.59835 1.59835C2.30161 0.895088 3.25544 0.5 4.25 0.5H17.75C18.7446 0.5 19.6984 0.895088 20.4016 1.59835C21.1049 2.30161 21.5 3.25544 21.5 4.25V11.75C21.5 12.7446 21.1049 13.6984 20.4016 14.4017C19.6984 15.1049 18.7446 15.5 17.75 15.5H4.25C3.25544 15.5 2.30161 15.1049 1.59835 14.4017C0.895088 13.6984 0.5 12.7446 0.5 11.75V4.25ZM20 5V4.25C20 3.65326 19.7629 3.08097 19.341 2.65901C18.919 2.23705 18.3467 2 17.75 2H4.25C3.65326 2 3.08097 2.23705 2.65901 2.65901C2.23705 3.08097 2 3.65326 2 4.25V5H20ZM2 6.5V11.75C2 12.3467 2.23705 12.919 2.65901 13.341C3.08097 13.7629 3.65326 14 4.25 14H17.75C18.3467 14 18.919 13.7629 19.341 13.341C19.7629 12.919 20 12.3467 20 11.75V6.5H2Z"
              fill="black"
            />
          </svg>
        </div>
        <h2 className="font-semibold md:text-lg">Способы оплаты</h2>
      </div>
      <div className="py-4 px-5 text-sm md:text-base grid gap-2.5 md:gap-5">
        <ul className="li list-inside list-disc text-sm sm:text-base">
          <li>Наличными при самовывозе из магазина</li>
          <li>Наличными курьеру</li>
          <li>Перевод (Мбанк, Оптима, Элсом, Элкарт, единицы, Cash2u)</li>
        </ul>
        <h3 className="font-semibold md:text-lg">Реквизиты</h3>
        <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
          {requisites.results.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-stroke rounded-lg p-5 gap-2 flex flex-col items-center"
            >
              <p>{item.bank_name}</p>
              <p className="text-lg font-semibold">{item.text}</p>
              <p>{item.owner_name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo;
