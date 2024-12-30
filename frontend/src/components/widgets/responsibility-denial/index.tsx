import parse from "html-react-parser";

type Response = {
  id: number;
  text: string;
}[];

async function ResponsibilityDenial() {
  const response = await fetch(`${process.env.BASE_URL}/contents/denial/`, {
    cache: "no-cache",
  });
  const data = (await response.json()) as Response;
  return (
    data?.length > 0 &&
    data[0] && (
      <div className="bg-main-light py-10 xl:py-20">
        <div className="container">
          <h5 className="text-lg xl:text-xl font-semibold">
            Отказ от ответственности
          </h5>
          <div className="mt-4 xl:mt-5">{parse(data[0].text)}</div>
        </div>
      </div>
    )
  );
}

export default ResponsibilityDenial;
