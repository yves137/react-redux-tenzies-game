import { createSlice } from "@reduxjs/toolkit";

const initialRolledResult = {
  isEndOfGame: false,
  tossed: Array(15)
    .fill(null)
    .map((_, idx) => ({
      tosseValue: Math.floor(Math.random() * 10) ,
      canChange: true,
      tosseId: Date.now() + idx,
    })),
};

const tenzieSlice = createSlice({
  name: "tenzie",
  initialState: { value: initialRolledResult },
  reducers: {
    setTossed: (state) => {
      state.value.tossed = state.value.tossed.map((item) =>
        item.canChange
          ? { ...item, tosseValue: Math.floor(Math.random() * 10) }
          : item
      );
    },
    itemCanChange: (state, action) => {
      state.value.tossed = state.value.tossed.map((item) =>
        action.payload.tosseId === item.tosseId
          ? { ...item, canChange: !item.canChange }
          : item
      );

      if (
        state.value.tossed.every(
          (item) =>
            item.canChange === false && item.tosseValue === action.payload.tosseValue
        )
      )
        state.value.isEndOfGame = true;
      else state.value.isEndOfGame = false;
    },
    startNewGame: (state) => {
      state.value = {
        ...initialRolledResult,
        tossed: initialRolledResult.tossed.map((item) => ({
          ...item,
          tosseValue: Math.floor(Math.random() * 10),
        })),
      };
    },
  },
});

export const { setTossed, itemCanChange, startNewGame } = tenzieSlice.actions;

export default tenzieSlice.reducer;
