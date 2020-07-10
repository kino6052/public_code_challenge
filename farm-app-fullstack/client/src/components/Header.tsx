import { AppBar, Typography } from "@material-ui/core";
import styled from "styled-components";

const AppBarWrapper = styled.div`
  .app-bar {
    display: flex;
    align-items: flex-start;
    padding: 8px 24px;
    margin-bottom: 8px;
  }
`;

export const Header = () => {
  return (
    <AppBarWrapper>
      <AppBar position="static" classes={{ root: "app-bar" }}>
        <Typography variant="h6" classes={{ root: "app-bar-heading" }}>
          Farm App
        </Typography>
      </AppBar>
    </AppBarWrapper>
  );
};
