import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./Components/CakeContainer/CakeContainer";
import IcecreamContainer from "./Components/IcecreamContainer/IcecreamContainer";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IcecreamContainer />
      </div>
    </Provider>
  );
};

export default App;
