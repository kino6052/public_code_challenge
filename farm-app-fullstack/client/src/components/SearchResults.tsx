import * as React from "react";
import {
  Typography,
  CardContent,
  Card,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import styled from "styled-components";

const HeadingWrapper = styled.span`
  h2 {
    font-size: 24px;
  }
`;

const SearchResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  .card {
    width: calc(100% / 3);
    .card-media {
      width: 100%;
      height: 150px;
      background: #77777777;
    }
    .card-content {
      display: flex;
      flex-direction: column;
      text-align: left;
    }
  }
`;

interface IFarm {
  id: string;
  name: string;
  state: string;
  soil_type: string;
  revenue: number;
  fields: IField[];
}

interface IField {
  crop: string;
  size: number;
}

export const SearchResults: React.SFC<{ farms: IFarm[] }> = ({ farms }) => {
  return (
    <SearchResultsWrapper>
      <HeadingWrapper>
        <Typography variant="h1" component="h2">
          Search Results
        </Typography>
      </HeadingWrapper>
      <Typography variant="subtitle1">{farms.length} Results</Typography>
      <CardsWrapper>
        {farms.map((farm) => (
          <Card key={farm.id} classes={{ root: "card" }}>
            <CardActionArea classes={{ root: "card-action-area" }}>
              <CardMedia classes={{ root: "card-media" }} title="Card" />
              <CardContent classes={{ root: "card-content" }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {farm.name}, {farm.state}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  ${farm.revenue} in Revenue
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </CardsWrapper>
    </SearchResultsWrapper>
  );
};
