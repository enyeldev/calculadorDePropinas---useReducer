import { useMemo } from "react";
import { formatCurrency } from "../helpers";
import { OrderActions, OrderSate } from "../reducers/order-reducer";

type OrderTotalsProps = {
  state: OrderSate;
  dispatch: React.Dispatch<OrderActions>;
};

export const OrderTotals = ({ dispatch, state }: OrderTotalsProps) => {
  const { order, tip } = state;

  const subTotalAmount = useMemo(() => {
    return order.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [order]);

  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order]);

  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propinas:</h2>
        <p>
          Suntotal a pagar: {""}
          <span className="font-bold ">{formatCurrency(subTotalAmount)}</span>
        </p>
        <p>
          Propina: {""}
          <span className="font-bold ">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar: {""}
          <span className="font-bold ">{formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button
        className="w-full bg-black p-3 uppercase text-white fon-bold mt-10 disabled:opacity-10"
        disabled={totalAmount == 0}
        onClick={() => dispatch({ type: "pleace-order" })}
      >
        Guardar orden
      </button>
    </>
  );
};
