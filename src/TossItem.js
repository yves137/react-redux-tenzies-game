import { useDispatch } from "react-redux";
import { itemCanChange } from "./features/ft_tenzies";
export function TossItem({ tosseId, canChange, tosseValue }) {
  const dispatch = useDispatch();

  return !canChange ? (
    <button
      className="px-10 rounded-xl py-6 text-3xl bg-green-600 hover:rotate-6 duration-300 font-bold shadow-md shadow-slate-600"
      onClick={() => dispatch(itemCanChange({ tosseId, tosseValue }))}
    >
      {tosseValue}
    </button>
  ) : (
    <button
      className="px-10 rounded-xl py-6 text-3xl hover:rotate-6 duration-300 font-bold shadow-md shadow-slate-600"
      onClick={() => dispatch(itemCanChange({ tosseId, tosseValue }))}
    >
      {tosseValue}
    </button>
  );
}
