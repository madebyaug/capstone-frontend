import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ApiProvider } from "./api/ApiContext.jsx";
import { AuthProvider } from "./auth/AuthContext.jsx";
import { ItemProvider } from "./comps/ItemContext.jsx";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ApiProvider>
      <BrowserRouter>
        <ItemProvider>
          <App />
        </ItemProvider>
      </BrowserRouter>
    </ApiProvider>
  </AuthProvider>
);
