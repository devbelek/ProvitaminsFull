"use client";

import Button from "@/src/components/shared/button";
import Input from "@/src/components/shared/input";
import Textarea from "@/src/components/shared/input/textarea";
import Rating from "@/src/components/shared/rating";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { createProductReview } from "@/src/api/products";
import { useParams, useSearchParams } from "next/navigation";

interface Props {
  onSubmit: () => void;
}

function CreateReviewForm({ onSubmit }: Props) {
  const params = useParams();
  const [rating, setRating] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = async (values: {
    name: string;
    review: string;
    rating: number;
  }) => {
    setLoading(true);
    await createProductReview({
      body: {
        full_name: values.name,
        review: values.review,
        rating: values.rating,
        product: Number(params.id),
      },
    });
    onSubmit();
    setLoading(false);
  };

  const handleSetRating = (value: number) => {
    setRating(value);
    setValue("rating", value, { shouldValidate: true });
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
        <Textarea
          label="Отзыв*"
          placeholder="Введите отзыв"
          error={errors.review?.message}
          minRows={4}
          {...register("review")}
        />
      </div>
      <div>
        <p className="block font-medium mb-1.5 text-start">Оценка*</p>
        <Rating size="lg" value={rating} onChange={handleSetRating} />
        {errors.rating?.message && (
          <p className="text-red-500 mt-1 text-start">
            {errors.rating?.message}
          </p>
        )}
      </div>
      <div className="grid sm:flex sm:justify-end mt-2">
        <Button type="submit" loading={loading}>
          Отправить отзыв
        </Button>
      </div>
    </form>
  );
}

export default CreateReviewForm;
