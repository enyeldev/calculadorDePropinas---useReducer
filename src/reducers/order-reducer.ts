import { MenuItem, OrderItem, Tip } from "../types";

export type OrderActions =
  | { type: "add-item-to-order"; payload: { item: MenuItem } }
  | { type: "delete-item"; payload: { id: MenuItem["id"] } }
  | { type: "set-tip"; payload: { value: number } }
  | { type: "pleace-order" };

export type OrderSate = {
  order: OrderItem[];
  tip: Tip;
};

export const initialState: OrderSate = {
  order: [],
  tip: 0,
};

export const orderReducer = (
  state: OrderSate = initialState,
  action: OrderActions
) => {
  if (action.type === "add-item-to-order") {
    const itemExist = state.order.find(
      (orderItem) => orderItem.id === action.payload.item.id
    );

    let updateOrder: OrderItem[] = [];

    if (itemExist) {
      updateOrder = state.order.map((orderItem) =>
        orderItem.id === action.payload.item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );

      return {
        ...state,
        order: updateOrder,
      };
    }
    const newItem: OrderItem = { ...action.payload.item, quantity: 1 };
    updateOrder = [...state.order, newItem];

    return {
      ...state,
      order: updateOrder,
    };
  }

  if (action.type === "delete-item") {
    const updateOrder = state.order.filter((item) => {
      return item.id !== action.payload.id;
    });

    return {
      ...state,
      order: updateOrder,
    };
  }

  if (action.type === "set-tip") {
    return {
      ...state,
      tip: action.payload.value,
    };
  }

  if (action.type === "pleace-order") {
    return {
      ...initialState,
    };
  }

  return {
    ...state,
  };
};
