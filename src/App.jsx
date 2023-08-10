import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./Components/CakeContainer/CakeContainer";
import IcecreamContainer from "./Components/IcecreamContainer/IcecreamContainer";
import CakeWithPayload from "./Components/CakeWithPayload/CakeWithPayload";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IcecreamContainer />
        <CakeWithPayload />
      </div>
    </Provider>
  );
};

export default App;
