import React from "react";
import {
  IconButton,
  InputLabel,
  OutlinedInput,
  FormControl,
  InputAdornment,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
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
      <FormControl classes={{ root: "form-control" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-farm-name">
          Farm Name
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-farm-name"
          endAdornment={
            <InputAdornment position="end">
              <IconButton>
                <Search />
              </IconButton>
            </InputAdornment>
          }
          labelWidth={90}
        />
      </FormControl>
      <FormControl classes={{ root: "form-control" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-min">
          Minimum Revenue
        </InputLabel>
        <OutlinedInput
          type="number"
          id="outlined-adornment-min"
          labelWidth={150}
        />
      </FormControl>
      <FormControl classes={{ root: "form-control" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-min">
          Maximum Revenue
        </InputLabel>
        <OutlinedInput
          type="number"
          id="outlined-adornment-min"
          labelWidth={150}
        />
      </FormControl>
    </SearchBarWrapper>
  );
};
