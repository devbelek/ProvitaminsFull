import { useSearchParams } from "next/navigation";
import Input from "../../shared/input";
import FormWrapper from "./form-wrapper";

export interface ProductForm {
  id: number;
  name: string;
}

function ProductFormFilters({
  forms,
  onChange,
}: {
  forms: ProductForm[];
  onChange: (_: { id: number; value: boolean }) => void;
}) {
  const searchParams = useSearchParams();
  const selectedBrands = searchParams.getAll("form");
  return (
    <FormWrapper title="Форма продукта">
      <div className="grid gap-3">
        {forms.map(({ id, name }) => (
          <div key={id} className="flex gap-2.5 items-center">
            <Input.Checkbox
              defaultChecked={selectedBrands.includes(`${id}`)}
              onChange={(e) =>
                onChange({
                  id,
                  value: e.target.checked,
                })
              }
            />
            <div className="">{name}</div>
          </div>
        ))}
      </div>
    </FormWrapper>
  );
}

export default ProductFormFilters;
