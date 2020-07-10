import React from "react";
import { Header } from "../components/Header";
import { Farm } from "../components/Farm";
import { IAppData } from "../services/AppService";
import { DataService } from "../services/DataService";
import { RouterService } from "../services/RouterService";

export const FarmPage: React.SFC<IAppData> = () => {
  const id = RouterService.getCurrentFarmId();
  const farm = DataService.getFarmById(id);
  return (
    <>
      <Header hasBackButton={true} />
      {farm && <Farm {...farm} />}
    </>
  );
};
