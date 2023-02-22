import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../core/store/store";
import { addCreator, deleteCreator } from "../../reducer/phone.actions.creator";

export function Key() {
  const numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const dispatch = useDispatch<AppDispatch>();

  const addNumber = (number: string) => {
    dispatch(addCreator(number));
  };

  const deleteNumber = () => {
    dispatch(deleteCreator());
  };
  return (
    <>
      {numberArray.map((number: string) => (
        <li>
          <button
            className="key"
            key={number}
            onClick={() => addNumber(number)}
          >
            {number}
          </button>
        </li>
      ))}
      <li>
        <button
          className="key big"
          key={"delete"}
          onClick={() => deleteNumber()}
        >
          delete
        </button>
      </li>
    </>
  );
}
