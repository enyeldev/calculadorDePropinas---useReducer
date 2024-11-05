import { useState } from "react";
import type { OrderItem, Tip } from "../types";
export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState<Tip>(0);

  const pleaceOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    order,
    tip,
    setTip,

    pleaceOrder,
  };
};
