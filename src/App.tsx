import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { ContextProvider } from "./context/UserContext";
import { Menu } from "./pages/menu/Menu";
import { AppRoutes } from "./routes/Routes";
import { Container } from "./styled-app";

const App: React.FC = () => {
  return (
    <ContextProvider>
      <Router>
        <Container>
          <Menu />
          <AppRoutes />
        </Container>
      </Router>
    </ContextProvider>
  );
};

export default App;
