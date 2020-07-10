import * as React from "react";
import {
  Typography,
  Table,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  TableCell,
} from "@material-ui/core";

import styled from "styled-components";
import { IFarm } from "../services/AppService";

const HeadingWrapper = styled.span`
  h2 {
    font-size: 24px;
  }
`;

const FarmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const Farm: React.SFC<IFarm> = ({
  name,
  state,
  revenue,
  fields,
  soil_type,
}) => {
  return (
    <FarmWrapper>
      <HeadingWrapper>
        <Typography variant="h1" component="h2">
          {name}, {state}
        </Typography>
      </HeadingWrapper>
      <Typography variant="subtitle1">
        <span>Revenue:</span> ${revenue}
      </Typography>
      <Typography variant="subtitle1">
        <span>Soil Type:</span> {soil_type}
      </Typography>
      <div>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Field Name</TableCell>
              <TableCell align="right">Crop</TableCell>
              <TableCell align="right">Size (acres)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fields.map(({ name, size, crop }) => (
              <TableRow key={name}>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="right">{crop}</TableCell>
                <TableCell align="right">{size}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </FarmWrapper>
  );
};
