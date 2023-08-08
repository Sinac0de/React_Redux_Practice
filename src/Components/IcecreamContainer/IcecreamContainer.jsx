import { useSelector, useDispatch } from "react-redux";
import buyIcecream from "../../redux/icecream/icecreamActions";

const IcecreamContainer = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>num of Icecreams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(buyIcecream())}>Buy an Icecream</button>
    </div>
  );
};

export default IcecreamContainer;
