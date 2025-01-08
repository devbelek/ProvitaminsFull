"use client";

import Button from "@/src/components/shared/button";
import Input from "@/src/components/shared/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { createOrder } from "@/src/api/order";
import { useBasketStore } from "@/src/stores/basket";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";

interface Props {
  onSubmit: () => void;
}

function CreateOrderForm({ onSubmit }: Props) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { basket } = useBasketStore();
  const data = Array.from(basket, ([_, value]) => ({
    product: value.id,
    quantity: value.count,
  }));

  const submit = async (values: { name: string; phone_number: string }) => {
    setLoading(true);
    try {
      const response = await createOrder({
        body: {
          full_name: values.name,
          phone: values.phone_number,
          items: data,
        },
      });
      if (response.ok) {
        onSubmit();
      } else {
        toast.error("Попробуйте позже", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          closeButton: () => null,
          transition: Bounce,
        });
      }
    } catch (e) {
      toast.error("Попробуйте позже", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        closeButton: () => null,
        transition: Bounce,
      });
    }
    setLoading(false);
  };

  return (
    <form className="grid gap-3" onSubmit={handleSubmit(submit)}>
      <div>
        <Input
          label="Имя*"
          placeholder="Введите имя"
          error={errors.name?.message}
          {...register("name")}
        />
      </div>
      <div>
        <Input
          label="Номер телефона*"
          placeholder="Введите номер телефона"
          error={errors.phone_number?.message}
          {...register("phone_number")}
        />
      </div>
      <span className="text-[#808080] font-regular italic text-xs text-left">*Введите актуальный номер телефона</span>
      <div className="grid sm:flex sm:justify-end mt-2">
        <Button type="submit" color="secondary" loading={loading}>
          Отправить
        </Button>
      </div>
    </form>
  );
}

export default CreateOrderForm;
