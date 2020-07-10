import React from "react";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { SearchResults } from "../components/SearchResults";
import { IAppData } from "../services/AppService";

export const HomePage: React.SFC<IAppData> = ({ farms }) => {
  return (
    <>
      <Header hasBackButton={false} />
      <SearchBar />
      <SearchResults farms={farms} />
    </>
  );
};
