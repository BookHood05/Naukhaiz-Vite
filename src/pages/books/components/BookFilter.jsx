import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Accordion from "@mui/material/Accordion";
import Slider from "@mui/material/Slider";
import Divider from "@mui/material/Divider";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import ToggleButton from "@mui/material/ToggleButton";
import IconButton from "@mui/material/IconButton";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { useState, useEffect } from "react";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
} from "react-google-places-autocomplete";
import Geocode from "react-geocode";
import useGeoLocation from "./useGeoLocation";
import "../components/BookFilter.css";
import { EmojiObjectsOutlined } from "@mui/icons-material";

const priceMarks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 700,
    label: "700",
  },
  {
    value: 2000,
    label: "2K",
  },
  {
    value: 3000,
    label: "3K",
  },
  {
    value: 5000,
    label: "5K",
  },
  {
    value: 6500,
    label: "6.5K",
  },
  {
    value: 8000,
    label: "8K",
  },
  {
    value: 9800,
    label: ">10K",
  },
];

function priceValueText(value) {
  return `${value}`;
}

const ratingMarks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
];

function ratingValueText(value) {
  return `${value}`;
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ px: { xs: 0, md: 2, lg: 2, sm: 0 }, py: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function TabProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BookFilter() {
  const currLocation = useGeoLocation();
  const [instituteAddress, setInstituteAddress] = useState();
  const [instituteAddObj, SetInstituteAddObj] = useState();
  const [nearbyAddress, setNearbyAddress] = useState();
  const [nearbyAddObj, SetNearbyAddObj] = useState();
  const [freeSelected, setFreeSelected] = useState(false);
  const [sellSelected, setSellSelected] = useState(false);
  const [buySelected, setBuySelected] = useState(false);
  const [currLocFlag, setCurrLocFlag] = useState(false);
  const [tabValue, setTabValue] = React.useState(0);
  const [radius, setRadius] = useState(1);
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [chipData, setChipData] = useState([]);
  const [filterChip, setFilterChip] = useState({ label: "Filters" });

  useEffect(() => {
    const func = async () => {
      const geocodeObj =
        instituteAddress &&
        instituteAddress.value &&
        (await geocodeByPlaceId(instituteAddress.value.place_id));
      let addressObject = null;
      try {
        addressObject = {
          address: instituteAddress.label,
          latitude: geocodeObj[0].geometry.location.lat(),
          longitude: geocodeObj[0].geometry.location.lng(),
        };
      } catch (error) {}
      SetInstituteAddObj(addressObject);
      console.log("Institute: ", addressObject);
    };
    func();
  }, [instituteAddress]);

  useEffect(() => {
    const func = async () => {
      const geocodeObj =
        nearbyAddress &&
        nearbyAddress.value &&
        (await geocodeByPlaceId(nearbyAddress.value.place_id));
      let addressObject = null;
      try {
        addressObject = {
          address: nearbyAddress.label,
          latitude: geocodeObj[0].geometry.location.lat(),
          longitude: geocodeObj[0].geometry.location.lng(),
        };
      } catch (error) {}
      SetNearbyAddObj(addressObject);
      console.log("Nearby: ", addressObject);
    };
    func();
  }, [nearbyAddress]);

  const handleCurrLocation = () => {
    setCurrLocFlag(!currLocFlag);
    if (currLocation.loaded && !currLocation.error) {
      Geocode.setApiKey("AIzaSyD__R5BJnyxVeNz7LLiUQ5BnJ3p5FjxIAI");
      Geocode.setRegion("pk");
      Geocode.setLocationType("ROOFTOP");
      Geocode.fromLatLng(
        `${currLocation.coordinates.lat}`,
        `${currLocation.coordinates.lng}`
      ).then(
        (response) => {
          const address = response.results[0].formatted_address;
          let obj = {};
          obj.label = address;
          obj.value = "";
          setNearbyAddress(obj);
          setFilterChip(null);
          if (!chipData.find((ele) => ele.key === 1)) {
            setChipData([...chipData, { key: 1, label: "Nearby" }]);
          }
          setInstituteAddress(null);
          setChipData((chips) => chips.filter((chip) => chip.key !== 0));
        },
        (error) => {}
      );
    }
  };

  const handleChipDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete));
    if (chipData.length === 1) {
      setFilterChip({ label: "Filters" });
    }
    if (chipToDelete === 3) {
      setFreeSelected(false);
    } else if (chipToDelete === 2) {
      setPrice(0);
    } else if (chipToDelete === 0) {
      setInstituteAddress(null);
    } else if (chipToDelete === 4) {
      setRating(0);
    } else if (chipToDelete === 1) {
      setNearbyAddress(null);
      setRadius(1);
    } else if (chipToDelete === 5) {
      setSellSelected(false);
    } else if (chipToDelete === 6) {
      setBuySelected(false);
    }
  };
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleRadiusChange = (e) => {
    if ((e.target.value >= 1 && e.target.value <= 50) || !e.target.value) {
      setRadius(e.target.value);
    }
  };

  const handleFreeBooksChange = () => {
    setFreeSelected(!freeSelected);
    setFilterChip(null);
    if (!freeSelected) {
      setPrice(false);
      setSellSelected(false);
      setBuySelected(true);
      let obj = chipData.filter((chip) => chip.key !== 2);
      obj = obj.filter((chip) => chip.key !== 5);
      obj = obj.filter((chip) => chip.key !== 6);
      setChipData([
        ...obj,
        { key: 3, label: "Free Books" },
        { key: 6, label: "Books To Buy" },
      ]);
    } else if (freeSelected) {
      setChipData((chips) => chips.filter((chip) => chip.key !== 3));
      if (chipData.length === 1) {
        setFilterChip({ label: "Filters" });
      }
    }
  };

  const handleSellBooksChange = () => {
    setSellSelected(!sellSelected);
    setFilterChip(null);
    if (!sellSelected) {
      setBuySelected(false);
      setPrice(0);
      setFreeSelected(false);
      let obj = chipData.filter((chip) => chip.key !== 6);
      obj = obj.filter((chip) => chip.key !== 2);
      obj = obj.filter((chip) => chip.key !== 3);
      setChipData([...obj, { key: 5, label: "Books For Sell" }]);
    } else if (sellSelected) {
      setChipData((chips) => chips.filter((chip) => chip.key !== 5));
      if (chipData.length === 1) {
        setFilterChip({ label: "Filters" });
      }
    }
  };

  const handleBuyBooksChange = () => {
    setBuySelected(!buySelected);
    setFilterChip(null);
    if (!buySelected) {
      setSellSelected(false);
      let obj = chipData.filter((chip) => chip.key !== 5);
      setChipData([...obj, { key: 6, label: "Books To Buy" }]);
    } else if (buySelected) {
      setFreeSelected(false);
      setPrice(0);
      let obj = chipData.filter((chip) => chip.key !== 2);
      obj = obj.filter((chip) => chip.key !== 3);
      obj = obj.filter((chip) => chip.key !== 6);
      setChipData([...obj]);
      if (chipData.length === 1) {
        setFilterChip({ label: "Filters" });
      }
    }
  };

  const handlePriceChange = (value) => {
    setPrice(value.target.value);
    setFilterChip(null);
    let obj = { key: 2, label: "Price" };
    if (
      value.target.value !== 0 &&
      !chipData.find((ele) => {
        return ele.key === obj.key;
      })
    ) {
      setFreeSelected(false);
      setSellSelected(false);
      setBuySelected(true);
      let obj2 = chipData.filter((chip) => chip.key !== 3);
      obj2 = obj2.filter((chip) => chip.key !== 5);
      obj2 = obj2.filter((chip) => chip.key !== 6);
      setChipData([
        ...obj2,
        { key: 2, label: "Price" },
        { key: 6, label: "Books To Buy" },
      ]);
    } else if (value.target.value === 0) {
      setChipData((chips) => chips.filter((chip) => chip.key !== 2));
      if (chipData.length === 1) {
        setFilterChip({ label: "Filters" });
      }
    }
  };

  const handleRatingChange = (value) => {
    setRating(value.target.value);
    setFilterChip(null);
    let obj = { key: 4, label: "Rating" };
    if (
      value.target.value !== 0 &&
      !chipData.find((ele) => {
        return ele.key === obj.key;
      })
    ) {
      setChipData([...chipData, { key: 4, label: "Rating" }]);
    } else if (value.target.value === 0) {
      setChipData((chips) => chips.filter((chip) => chip.key !== 4));
      if (chipData.length === 1) {
        setFilterChip({ label: "Filters" });
      }
    }
  };

  const handleInstituteAdd = (val) => {
    setInstituteAddress(val);
    setFilterChip(null);
    if (val !== null) {
      setChipData([...chipData, { key: 0, label: "Institute" }]);
      setChipData((chips) => chips.filter((chip) => chip.key !== 1));
      if (chipData.length === 1) {
        setFilterChip({ label: "Filters" });
      }
      setNearbyAddress(null);
    } else if (val === null) {
      setChipData((chips) => chips.filter((chip) => chip.key !== 0));
      if (chipData.length === 1) {
        setFilterChip({ label: "Filters" });
      }
    }
  };

  const handleNearbyAdd = (val) => {
    setNearbyAddress(val);
    setFilterChip(null);
    if (val !== null) {
      setChipData([...chipData, { key: 1, label: "Nearby" }]);
      setChipData((chips) => chips.filter((chip) => chip.key !== 0));
      if (chipData.length === 1) {
        setFilterChip({ label: "Filters" });
      }
      setInstituteAddress(null);
    } else if (val === null) {
      setChipData((chips) => chips.filter((chip) => chip.key !== 1));
      if (chipData.length === 1) {
        setFilterChip({ label: "Filters" });
      }
    }
  };
  return (
    <Container
      sx={{
        px: { lg: "3%", md: "0" },
        mt: "15px",
        textAlign: "center",
        width: "95%",
      }}
    >
      <div>
        <Accordion className="filter-container">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {filterChip && (
              <Chip
                className="accordion-heading"
                icon={<FilterAltIcon style={{ color: "#d0e1f9" }} />}
                label={filterChip.label}
                sx={{
                  width: "90%",
                  mx: "auto",
                  cursor: "pointer",
                  height: "30px",
                }}
              />
            )}
            <div className="chip-div">
              {chipData.map((chip) => (
                <Chip
                  key={chip.key}
                  className="filter-chip"
                  label={chip.label}
                  onDelete={handleChipDelete(chip.key)}
                />
              ))}
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                aria-label="basic tabs example"
                textColor="secondary"
                indicatorColor="secondary"
                centered
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#4d648d",
                  },
                }}
              >
                <Tab
                  className="filter-tabs"
                  label="Institute"
                  {...TabProps(0)}
                />
                <Tab className="filter-tabs" label="Nearby" {...TabProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={tabValue} index={0}>
              <GooglePlacesAutocomplete
                apiKey="AIzaSyD__R5BJnyxVeNz7LLiUQ5BnJ3p5FjxIAI"
                selectProps={{
                  isClearable: true,
                  value: instituteAddress,
                  placeholder: "Institute Name...",
                  onChange: (val) => {
                    handleInstituteAdd(val);
                  },
                }}
                autocompletionRequest={{
                  componentRestrictions: {
                    country: ["pk"],
                  },
                  types: [
                    "primary_school",
                    "school",
                    "secondary_school",
                    "university",
                  ],
                }}
              />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <Grid container>
                <Grid item lg={2} md={2} sm={10} xs={10}>
                  <TextField
                    value={radius}
                    onChange={handleRadiusChange}
                    id="outlined-number"
                    label="Radius in km"
                    type="number"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{
                      mb: { xs: 1, sm: 1, md: 0, lg: 0 },
                      "& label.Mui-focused": {
                        color: "#283655",
                        borderColor: "#4d648d",
                      },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#4d648d",
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item lg={1} md={1} sm={2} xs={2}>
                  <IconButton
                    color="secondary"
                    onClick={handleCurrLocation}
                    className="location-btn"
                  >
                    <MyLocationIcon
                      sx={{
                        color: "#4d648d",
                      }}
                    />
                  </IconButton>
                </Grid>
                <Grid item lg={9} md={9} sm={12} xs={12}>
                  <GooglePlacesAutocomplete
                    sx={{ ml: 1 }}
                    apiKey="AIzaSyD__R5BJnyxVeNz7LLiUQ5BnJ3p5FjxIAI"
                    selectProps={{
                      isClearable: true,
                      value: nearbyAddress,
                      placeholder: "Location...",
                      onChange: (val) => {
                        handleNearbyAdd(val);
                      },
                    }}
                    autocompletionRequest={{
                      componentRestrictions: {
                        country: ["pk"],
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </TabPanel>
            <Grid container sx={{ mt: "10px" }}>
              <Grid item lg={8} md={7} sm={12} xs={12}>
                <span className="price-filter">Price</span>
                <Slider
                  aria-label="Custom marks"
                  value={price}
                  getAriaValueText={priceValueText}
                  step={10}
                  max={10000}
                  valueLabelDisplay="auto"
                  marks={priceMarks}
                  sx={{ color: "#4d648d" }}
                  onChange={(value) => handlePriceChange(value)}
                />
              </Grid>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  ml: "4%",
                  mr: "2%",
                  backgroundColor: "#4d648d",
                  width: "2px",
                  xs: { display: "none" },
                }}
              />
              <Grid item lg={3} md={4} sm={12} xs={12}>
                <span className="price-filter">Rating</span>
                <Slider
                  aria-label="Custom marks"
                  value={rating}
                  getAriaValueText={ratingValueText}
                  step={1}
                  max={5}
                  valueLabelDisplay="auto"
                  marks={ratingMarks}
                  sx={{ color: "#4d648d" }}
                  onChange={(value) => handleRatingChange(value)}
                />
              </Grid>
              <Grid container spacing={3}>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                  <ToggleButton
                    className="connection-filter"
                    sx={{
                      mt: "5px",
                      color: "#4d648d",
                      textTransform: "none",
                      fontSize: {
                        lg: "15px",
                        md: "15px",
                        sm: "12px",
                        xs: "10px",
                      },
                      fontWeight: "bold",
                      border: "1px solid #4d648d",
                      borderRadius: "8px",
                      width: "100%",
                    }}
                    value="check"
                    selected={freeSelected}
                    onChange={handleFreeBooksChange}
                  >
                    Free Books
                  </ToggleButton>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                  <ToggleButton
                    className="connection-filter"
                    sx={{
                      mt: "5px",
                      color: "#4d648d",
                      textTransform: "none",
                      fontSize: {
                        lg: "15px",
                        md: "15px",
                        sm: "12px",
                        xs: "9px",
                      },
                      fontWeight: "bolder",
                      border: "1px solid #4d648d",
                      borderRadius: "8px",
                      width: "100%",
                    }}
                    value="check"
                    selected={sellSelected}
                    onChange={handleSellBooksChange}
                  >
                    Books For Sell
                  </ToggleButton>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                  <ToggleButton
                    className="connection-filter"
                    sx={{
                      mt: "5px",
                      color: "#4d648d",
                      textTransform: "none",
                      fontSize: {
                        lg: "15px",
                        md: "15px",
                        sm: "12px",
                        xs: "9px",
                      },
                      fontWeight: "bolder",
                      border: "1px solid #4d648d",
                      borderRadius: "8px",
                      width: "100%",
                    }}
                    value="check"
                    selected={buySelected}
                    onChange={handleBuyBooksChange}
                  >
                    Books To Buy
                  </ToggleButton>
                </Grid>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
    </Container>
  );
}

export default BookFilter;
