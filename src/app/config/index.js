import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import StyleProvider from "../styles";
import { withErrorBoundary } from "react-error-boundary";
import FallbackErrorPage from "../views/FallbackErrorPage";
import { Spinner } from "../styles/components";
import { MainProvider } from "../context/MainContext";

const AppProvider = ({ children }) => {
  return (
    <Router>
      <StyleProvider>
        <MainProvider>
          <Suspense fallback={<Spinner />}>{children}</Suspense>
        </MainProvider>
      </StyleProvider>
    </Router>
  );
};

const FallbackErrorProvider = () => (
  <StyleProvider>
    <Suspense fallback={<Spinner />}>
      <FallbackErrorPage />
    </Suspense>
  </StyleProvider>
);

export default withErrorBoundary(AppProvider, {
  FallbackComponent: FallbackErrorProvider,
  onError(error) {
    console.log(error);
  },
});
