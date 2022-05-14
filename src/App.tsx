import { Divider } from "@mui/material";
import BasicAlerts from "components/common/alert";
import BasicRating from "components/common/rating";
import React from "react";

const App = () => {
  return (
    <>
      <h1 className="title">React + TS + Sass + Eslint + Prettier + MobX + Apisauce</h1>
      <Divider>
      <BasicRating text="Quality" />
      </Divider>
      <Divider>
      <BasicAlerts text="This is an sample alert" />
      </Divider>
    </>
  );
}

export default App;
