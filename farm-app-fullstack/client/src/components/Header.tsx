import React from "react";
import { AppBar, Typography, IconButton } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import styled from "styled-components";
import { dispatchCustomEvent } from "../utils/utils";
import { BACK_BUTTON_ID } from "../services/InputService";

const AppBarWrapper = styled.div`
  .app-bar {
    display: flex;
    align-items: flex-start;
    padding: 8px 24px;
    margin-bottom: 8px;
  }
`;

export const Header: React.SFC<{ hasBackButton: boolean }> = ({
  hasBackButton,
}) => {
  return (
    <AppBarWrapper>
      <AppBar position="static" classes={{ root: "app-bar" }}>
        <Typography variant="h6" classes={{ root: "app-bar-heading" }}>
          {hasBackButton && (
            <IconButton
              id={BACK_BUTTON_ID}
              style={{ color: "white" }}
              size="small"
              aria-label="back"
              onClick={() => dispatchCustomEvent("back", {})}
            >
              <ArrowBack />
            </IconButton>
          )}
          Farm App
        </Typography>
      </AppBar>
    </AppBarWrapper>
  );
};
