import React from "react";
import { Route, Routes } from "react-router-dom";
import AppProvider from "./config";
import { routes } from "./routes/routes";
import { Main } from "./styles/components";
import { v4 as uuid } from "uuid";

const App = () => {
  return (
    <AppProvider>
      <Main>
        <Routes>
          {Object.keys(routes).map((route, i) => (
            <Route
              key={uuid()}
              path={routes[route].path}
              element={routes[route].component}
            />
          ))}
        </Routes>
      </Main>
    </AppProvider>
  );
};

export default App;
