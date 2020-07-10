const express = require("express");

let app = express();

const DUMMY_DATA = {
  "1": {
    name: "McDonald",
    state: "WI",
    soil_type: "Antigo Silt Loam",
    revenue: 120000,
    fields: {
      NorthWest: {
        crop: "corn",
        "size (acres)": 40,
      },
      NorthEast: {
        crop: "soy",
        "size (acres)": 32,
      },
    },
  },
  "2": {
    name: "Stardew Valley",
    state: "CA",
    soil_type: "San Joaquin Series",
    revenue: 140800,
    fields: {
      Mine: {
        crop: "lettuce",
        "size (acres)": 4,
      },
      "Secret Woods": {
        crop: "strawberry",
        "size (acres)": 12,
      },
      Beach: {
        crop: "ancient berry",
        "size (acres)": 1,
      },
    },
  },
  "3": {
    name: "Green Acres",
    state: "GA",
    soil_type: "Tifton",
    revenue: 111010,
    fields: {
      NorthWest: {
        crop: "cotton",
        "size (acres)": 100,
      },
    },
  },
  "4": {
    name: "Animal Farm",
    state: "MN",
    soil_type: "Lester",
    revenue: 3000200,
    fields: {
      "Flower Power": {
        crop: "dahlia",
        "size (acres)": 2,
      },
      "Bloom Room": {
        crop: "rose",
        "size (acres)": 3,
      },
    },
  },
  "5": {
    name: "Stargazer Glen",
    state: "CA",
    soil_type: "San Joaquin Series",
    revenue: 140000,
    fields: {
      "West Road": {
        crop: "blueberry",
        "size (acres)": 6,
      },
      "HalfAcre 20": {
        crop: "raspberry",
        "size (acres)": 8,
      },
    },
  },
  "6": {
    name: "Hundred Acre Woods",
    state: "NE",
    soil_type: "Holdrege",
    revenue: 10000,
    fields: {
      "West Road": {
        crop: "pollen",
        "size (acres)": 80,
      },
      "HalfAcre 20": {
        crop: "honey",
        "size (acres)": 20,
      },
    },
  },
};

//Set up serving FE
app.use(express.static(__dirname + "/../client/dist"));

app.use(function (req, res, next) {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  });
  next();
});

// TODO: Ideally, should be paginated
app.get("/farms", (req, res) => {
  res.send(DUMMY_DATA);
});

let port = 8000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
