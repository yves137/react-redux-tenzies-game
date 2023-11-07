import { TossItem } from "./TossItem";
import { useDispatch, useSelector } from "react-redux";
import { startNewGame, setTossed } from "./features/ft_tenzies";
import Confetti from "react-confetti";


export function Board() {
  const { isEndOfGame, tossed } = useSelector((state) => state.tenzieRdc.value);
  const dispatch = useDispatch();

  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="mb-10 grid gap-7 grid-cols-5">
        {tossed.map((v) => (
          <TossItem key={v.tosseId} {...v} />
        ))}
      </div>
      {isEndOfGame ? (
        <>
          <Confetti/>
          <button
            className="bg-[#5035FF] hover:bg-[#2a2d7e] duration-500 rounded-md text-gray-300 py-5 px-20 text-2xl font-semibold"
            onClick={() => dispatch(startNewGame())}
          >
            New Game
          </button>

          <div className="bg-green-300 px-40 py-7 text-black text-lg font-semibold mt-10 animate-bounce transition-all duration-1000">
            Congratulation, You Won!!
          </div>
        </>
      ) : (
        <button
          className="bg-[#5035FF] hover:bg-[#2a2d7e] duration-500 rounded-md py-5 text-gray-300 px-20 text-2xl font-semibold"
          onClick={() => dispatch(setTossed())}
        >
          ROll
        </button>
      )}
    </div>
  );
}
