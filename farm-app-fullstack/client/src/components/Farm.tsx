import * as React from "react";
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  TableCell,
} from "@material-ui/core";

import styled from "styled-components";

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

const Farm = () => {
  return (
    <FarmWrapper>
      <HeadingWrapper>
        <Typography variant="h1" component="h2">
          McDonald, WI
        </Typography>
      </HeadingWrapper>
      <Typography variant="subtitle1">
        <span>Revenue:</span> $119,000
      </Typography>
      <Typography variant="subtitle1">
        <span>Soil Type:</span> San Joaquin Series
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Field Name</TableCell>
              <TableCell align="right">Crop</TableCell>
              <TableCell align="right">Size (acres)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={"rpw"}>
              <TableCell component="th" scope="row">
                {"Row"}
              </TableCell>
              <TableCell align="right">{"Callories"}</TableCell>
              <TableCell align="right">{"Fat"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </FarmWrapper>
  );
};
