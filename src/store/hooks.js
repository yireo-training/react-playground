import { useSelector, useDispatch } from "react-redux";
import actionCreator from "./actionCreators";

const useCounter = () => {
    const counter = useSelector(state => state);
    const dispatch = useDispatch();
  
    const setCounter = (number) => {
      dispatch(actionCreator(number))
    }

    return [counter, setCounter];
}

export default useCounter;