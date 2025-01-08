"use client";

import React, { useState } from "react";
import FormWrapper from "./form-wrapper";
import Slider from "react-slider";
import Input from "../../shared/input";
import { useSearchParams } from "next/navigation";

const MIN = 0;
const MAX = 10000;

interface Props {
  onChange: ({
    minValue,
    maxValue,
  }: {
    minValue: number;
    maxValue: number;
  }) => void;
}

function PriceFilter({ onChange }: Props) {
  const searchParams = useSearchParams();
  const [minValue, setMinValue] = useState<number>(
    Number(searchParams.get("price_min")) ?? 0
  );
  const [maxValue, setMaxValue] = useState<number>(
    Number(searchParams.get("price_max")) || MAX
  );

  const handleMinValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value <= MAX && +e.target.value >= MIN) {
      setMinValue(+e.target.value);
      onChange({ minValue: +e.target.value, maxValue });
    }
  };

  const handleMaxValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value <= MAX && +e.target.value >= MIN) {
      setMaxValue(+e.target.value);
      onChange({ minValue, maxValue: +e.target.value });
    }
  };

  const handleSliderChange = (value: number[], index: number) => {
    if (index === 0) setMinValue(value[0]);
    else if (index === 1) setMaxValue(value[1]);
  };

  const handleSliderClick = (value: number) => {
    const dif1 = value - minValue;
    const dif2 = maxValue - value;
    dif1 < dif2 ? setMinValue(value) : setMaxValue(value);
    onChange({
      minValue: dif1 < dif2 ? value : minValue,
      maxValue: dif2 <= dif1 ? value : maxValue,
    });
  };

  return (
    <FormWrapper title="Цена">
      <div>
        <div className="relative pb-8 pt-3">
          <Slider
            className="relative"
            thumbClassName="w-4 -translate-y-[40%] -translate-x-[0%] aspect-square rounded-full border-[3px] border-main bg-white outline-none"
            trackClassName="example-track bg-red-400 h-1 rounded-full bg-stroke cursor-pointer"
            defaultValue={[MIN, MAX]}
            value={[minValue, maxValue]}
            min={MIN}
            max={MAX}
            ariaLabel={["Lower thumb", "Upper thumb"]}
            renderTrack={(props, state) => {
              let index = state.index;
              let classes = "bg-gray-200";
              if (index === 1) {
                classes = "bg-teal-500";
              }
              return (
                <div
                  {...props}
                  className={`${classes} ${props.className}`}
                  key={index}
                />
              );
            }}
            onChange={handleSliderChange}
            onSliderClick={handleSliderClick}
            onAfterChange={([fValue, sValue]) => {
              onChange({
                minValue: fValue <= sValue ? fValue : sValue,
                maxValue: fValue > sValue ? fValue : sValue,
              });
            }}
            renderThumb={(props, state) => (
              <div
                className="w-5 aspect-square rounded-full border-[3px] border-main bg-white"
                {...props}
                key={state.index}
              />
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Input
              value={minValue}
              onChange={handleMinValueChange}
              min={MIN}
              max={MAX}
            />
          </div>
          <div>
            <Input
              value={maxValue}
              onChange={handleMaxValueChange}
              type="number"
              min={MIN}
              max={MAX}
            />
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}

export default PriceFilter;
