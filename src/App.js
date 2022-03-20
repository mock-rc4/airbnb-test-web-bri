import RootRoute from "./routes/index.js";
import { GlobalStyle } from "./components/common/globalStyle.js";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RootRoute />
    </>
  );
};

export default App;
