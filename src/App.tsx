import { Container } from "@mui/material";
import { Home } from "components";
import React from "react";

const App: React.FC = (): React.ReactElement => {
  return (
    <>
      <Container fixed>
        <h1 className="text-center x-2">React + TS + Sass + Eslint + Prettier + MobX + Apisauce</h1>
        <Home />
      </Container>
    </>
  );
}

export default App;
