import React from "react";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { SearchResults } from "../components/SearchResults";

export const HomePage = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <SearchResults />
    </>
  );
};
