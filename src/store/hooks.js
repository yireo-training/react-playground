import { useSelector, useDispatch } from "react-redux";
import actionCreator from "./actionCreators";

const useCounter = () => {
  const counter = useSelector((state) => state.increment);
  const dispatch = useDispatch();

  const setCounter = (number) => {
    dispatch(actionCreator(number));
  };

  return [counter, setCounter];
};

export default useCounter;
