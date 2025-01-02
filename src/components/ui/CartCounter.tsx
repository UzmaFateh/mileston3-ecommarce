"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { cn } from "@/lib/utils";

type CartCounterProps = {
  isZeroDelete?: boolean;
  onAdd?: (value: number) => void;
  onRemove?: (value: number) => void;
  className?: string;
  initialValue?: number;
};

const CartCounter = ({
  isZeroDelete,
  onAdd,
  onRemove,
  className,
  initialValue = 1,
}: CartCounterProps) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const addToCart = () => {
    if (onAdd) {
      onAdd(counter + 1);
    }
    setCounter(counter + 1);
  };

  const remove = () => {
    if ((counter === 1 && !isZeroDelete) || counter <= 0) return;

    if (onRemove) {
      onRemove(counter - 1);
    }
    if (counter - 1 <= 0) return;
    setCounter(counter - 1);
  };

  return (
    <div
      className={cn(
        "bg-[#23A6F0] text-white w-full min-w-[50px] max-w-[100px] sm:max-w-[120px] py-3 md:py-3.5 px-4 sm:px-5 rounded-xl flex items-center justify-between mx-8",
        className
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        type="button"
        className="h-5 w-5 sm:h-6 sm:w-6 text-xl hover:bg-transparent"
        onClick={() => remove()}
      >
        <FaMinus />
      </Button>
      <span className="font-medium text-sm sm:text-base">
        {!isZeroDelete ? counter : initialValue}
      </span>
      <Button
        variant="ghost"
        size="icon"
        type="button"
        className="h-5 w-5 sm:h-6 sm:w-6 text-xl hover:bg-transparent"
        onClick={() => addToCart()}
      >
        <FaPlus />
      </Button>
    </div>
  );
};

export default CartCounter;
