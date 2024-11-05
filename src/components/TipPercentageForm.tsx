import { OrderActions } from "../reducers/order-reducer";
import { Tip, TipOptions } from "../types";

const tipOptions: TipOptions[] = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPercentageFormProps = {
  dispatch: React.Dispatch<OrderActions>;
  tip: Tip;
};

export const TipPercentageForm = ({
  dispatch,
  tip,
}: TipPercentageFormProps) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>

      <form action="">
        {tipOptions.map((tipOptions) => {
          return (
            <div className="flex gap-2" key={tipOptions.id}>
              <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
              <input
                type="radio"
                id={tipOptions.id}
                name="tip"
                value={tipOptions.value}
                onChange={(e) =>
                  dispatch({
                    type: "set-tip",
                    payload: { value: +e.target.value },
                  })
                }
                checked={tipOptions.value === tip}
              />
            </div>
          );
        })}
      </form>
    </div>
  );
};
