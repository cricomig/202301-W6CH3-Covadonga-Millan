import { phoneReducer } from "./phone.reducer";
import * as ac from "./phone.actions.creator";

describe("Given the Phone Reducer", () => {
  describe("When you add a string with a number", () => {
    test("Then, it should return the same string", () => {
      const result = phoneReducer("", ac.addCreator("6"));

      expect(result).toBe("6");
    });
  });

  describe("When the initial state is a '1' string and the type is delete", () => {
    test("Then, it should return and empty string", () => {
      const result = phoneReducer("1", ac.deleteCreator());

      expect(result).toBe("");
    });
  });
});
