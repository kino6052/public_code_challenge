import React from "react";
import {
  IconButton,
  InputLabel,
  OutlinedInput,
  FormControl,
  InputAdornment,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

export const Input: React.SFC<{ label: string; id: string }> = ({
  label,
  children,
  id,
}) => (
  <FormControl classes={{ root: "form-control" }} variant="outlined">
    <InputLabel htmlFor="outlined-adornment-min">{label}</InputLabel>
    <OutlinedInput
      type="number"
      id={id}
      endAdornment={children}
      labelWidth={150}
    />
  </FormControl>
);

export const SearchInput: React.SFC<{ label: string; id: string }> = ({
  label,
  id,
}) => {
  return (
    <Input label={label} id={id}>
      <InputAdornment position="end">
        <IconButton>
          <Search />
        </IconButton>
      </InputAdornment>
    </Input>
  );
};
