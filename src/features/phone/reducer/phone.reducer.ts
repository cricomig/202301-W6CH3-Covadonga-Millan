import { createReducer } from "@reduxjs/toolkit";
import { addCreator, deleteCreator } from "./phone.actions.creator";

const initialState: string = "";

export const phoneReducer = createReducer(initialState, (builder) => {
  builder.addCase(addCreator, (state, { payload }) => state + payload);
  builder.addCase(deleteCreator, (state) => state.slice(0, -1));
  builder.addDefaultCase((state) => state);
});
