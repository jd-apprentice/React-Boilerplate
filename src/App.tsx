import { Divider } from "@mui/material";
import { Alert, Rating } from "components/index";
import React, { ReactElement } from "react";

const App: React.FC = (): ReactElement => {
  return (
    <>
      <h1 className="title">React + TS + Sass + Eslint + Prettier + MobX + Apisauce</h1>
      <Divider>
        <Rating text="Quality" />
      </Divider>
      <Divider>
        <Alert text="This is an sample alert" />
      </Divider>
    </>
  );
}

export default App;
