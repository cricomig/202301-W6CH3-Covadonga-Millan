import { configureStore } from "@reduxjs/toolkit";
import { phoneReducer } from "../../features/phone/reducer/phone.reducer";

export const store = configureStore({
  reducer: {
    numbers: phoneReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
