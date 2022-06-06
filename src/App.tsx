import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Menu } from "./pages/menu/Menu";
import ContextStarWarProvider from "./pages/star-war/contexts/star-wars/star-wars.context";
import { AppRoutes } from "./routes/Routes";
import { Container } from "./styled-app";

const App: React.FC = () => {
  return (
    <ContextStarWarProvider>
      <Router>
        <Container>
          <Menu />
          <AppRoutes />
        </Container>
      </Router>
    </ContextStarWarProvider>
  );
};

export default App;
