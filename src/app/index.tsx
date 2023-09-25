import { BrowserRouter } from "react-router-dom";
import { Routing } from "~/pages/routing";
import { Provider } from "react-redux";
import { createStore } from "~/shared/store";
import "./index.css";

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
