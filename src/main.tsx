import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { store } from "./app/store";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import HttpService from "./services/HttpService";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
    </StrictMode>
  );

HttpService.configure();