import { OrderActions } from "../reducers/order-reducer";
import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  dispatch: React.Dispatch<OrderActions>;
};

export const MenuItems = ({ item, dispatch }: MenuItemProps) => {
  return (
    <button
      className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200"
      onClick={() => dispatch({ type: "add-item-to-order", payload: { item } })}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
};
