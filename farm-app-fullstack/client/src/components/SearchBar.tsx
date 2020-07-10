import React from "react";
import {
  FARM_NAME_ID,
  MIN_REVENUE_ID,
  MAX_REVENUE_ID,
} from "../services/InputService";
import { SearchInput, Input } from "./Input";
// import { Search } from "@material-ui/icons";
import styled from "styled-components";

const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  .form-control {
    float: left;
    margin: 8px;
  }
`;

export const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchInput label="Farm Name" id={FARM_NAME_ID} />
      <Input label="Min Revenue" type="number" id={MIN_REVENUE_ID} />
      <Input label="Max Revenue" type="number" id={MAX_REVENUE_ID} />
    </SearchBarWrapper>
  );
};
