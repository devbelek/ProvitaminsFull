import { getDeliveryWays } from "@/src/api/delivery";
import parse from "html-react-parser";
import Image from "next/image";

async function DeliverWay() {
  const data = await getDeliveryWays();
  return data.results.map(({ icon, title, description, id }) => (
    <div key={id} className="rounded-[10px] border border-stroke">
      <div className="py-4 px-5 flex items-center gap-4 border-b">
        <div className="relative w-6 aspect-square">
          <Image src={icon} fill sizes="full" alt="delivery" />
        </div>
        <h2 className="font-semibold md:text-lg">{title}</h2>
      </div>
      <div className="py-4 px-5 text-sm md:text-base">{parse(description)}</div>
    </div>
  ));
}

export default DeliverWay;
