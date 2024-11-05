import { formatCurrency } from "../helpers";
import { OrderActions } from "../reducers/order-reducer";
import { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  dispatch: React.Dispatch<OrderActions>;
};

export const OrderContents = ({ order, dispatch }: OrderContentsProps) => {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-10">
        {order.map((e) => {
          return (
            <div
              className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
              key={e.id}
            >
              <div className="">
                <p className="text-lg">
                  {e.name} - {formatCurrency(e.price)}
                </p>

                <p className="font-black">
                  Cantidad: {e.quantity} -{" "}
                  {formatCurrency(e.price * e.quantity)}
                </p>
              </div>

              <button
                className="bg-red-600 h-8 w-8 text-white rounded-full font-black"
                onClick={() =>
                  dispatch({ type: "delete-item", payload: { id: e.id } })
                }
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
