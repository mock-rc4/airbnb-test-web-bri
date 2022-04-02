import RootRoute from "./routes/index.js";
import { GlobalStyle } from "./components/common/globalStyle.js";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/index";
import { createStore } from "redux";

const App = () => {
  const store = createStore(rootReducer);
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <RootRoute />
      </Provider>
    </>
  );
};

export default App;
