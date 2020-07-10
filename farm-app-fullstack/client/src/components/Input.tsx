import React from "react";
import {
  IconButton,
  InputLabel,
  OutlinedInput,
  FormControl,
  InputAdornment,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

export const Input: React.SFC<{
  label: string;
  id: string;
  type?: "number" | "text";
}> = ({ label, children, id, type }) => (
  <FormControl classes={{ root: "form-control" }} variant="outlined">
    <InputLabel htmlFor="outlined-adornment-min">{label}</InputLabel>
    <OutlinedInput
      type={type || "search"}
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
    <Input type="text" label={label} id={id}>
      <InputAdornment position="end">
        <IconButton>
          <Search />
        </IconButton>
      </InputAdornment>
    </Input>
  );
};
