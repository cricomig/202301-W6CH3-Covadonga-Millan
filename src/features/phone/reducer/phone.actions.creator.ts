import { createAction } from "@reduxjs/toolkit";
import { phoneActions } from "./phone.actions.types";

export const addCreator = createAction<string>(phoneActions.addNumber);

export const deleteCreator = createAction(phoneActions.deleteNumber);
