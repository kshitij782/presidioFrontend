import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Header from "../Header";
import { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useLocation } from "react-router-dom";
import { getAllProperty } from "../../services";

const properties = [
  // Example property object
  {
    imageUrl:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg",
    title: "Beautiful Villa",
    price: "500000",
    bedrooms: "3",
    bathrooms: "2",
    desc: "A spacious villa with a stunning view.",
    sellerDetails:
      "John Doe, Real Estate Agent\nEmail: john.doe@example.com\nPhone: +1234567890",
    liked: true, // Added liked property
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg",
    title: "Beautiful Villa",
    price: "500000",
    bedrooms: "3",
    bathrooms: "2",
    desc: "A spacious villa with a stunning view.",
    sellerDetails:
      "John Doe, Real Estate Agent\nEmail: john.doe@example.com\nPhone: +1234567890",
    liked: true, // Added liked property
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg",
    title: "Beautiful Villa",
    price: "500000",
    bedrooms: "3",
    bathrooms: "2",
    desc: "A spacious villa with a stunning view.",
    sellerDetails:
      "John Doe, Real Estate Agent\nEmail: john.doe@example.com\nPhone: +1234567890",
    liked: true, // Added liked property
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg",
    title: "Beautiful Villa",
    price: "500000",
    bedrooms: "3",
    bathrooms: "2",
    desc: "A spacious villa with a stunning view.",
    sellerDetails:
      "John Doe, Real Estate Agent\nEmail: john.doe@example.com\nPhone: +1234567890",
    liked: true, // Added liked property
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg",
    title: "Beautiful Villa",
    price: "500000",
    bedrooms: "3",
    bathrooms: "2",
    desc: "A spacious villa with a stunning view.",
    sellerDetails:
      "John Doe, Real Estate Agent\nEmail: john.doe@example.com\nPhone: +1234567890",
    liked: true, // Added liked property
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg",
    title: "Beautiful Villa",
    price: "500000",
    bedrooms: "3",
    bathrooms: "2",
    desc: "A spacious villa with a stunning view.",
    sellerDetails:
      "John Doe, Real Estate Agent\nEmail: john.doe@example.com\nPhone: +1234567890",
    liked: true, // Added liked property
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg",
    title: "Beautiful Villa",
    price: "500000",
    bedrooms: "3",
    bathrooms: "2",
    desc: "A spacious villa with a stunning view.",
    sellerDetails:
      "John Doe, Real Estate Agent\nEmail: john.doe@example.com\nPhone: +1234567890",
    liked: false, // Added liked property
  },
  // Add more properties as needed
];

export const Dashboard = () => {
  
  const [expanded, setExpanded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [anyPropertyLiked, setAnyPropertyLiked] = useState(false);
  const [property, setProperty] = useState("");
  const location = useLocation();
  const {userType} = location.state;

  const handleLike = (property) => {
    // Toggle the liked status for demonstration purposes
    // setAnyPropertyLiked((prevState) => !prevState);
    if(property.likes === true){
      property.likes = false;
    } else{
      property.likes = true;
    }
    // property.likes = !property.likes;
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getProperty = async() => {
    try {
      const res = await getAllProperty();
      console.log("res from getProperty", res);
    } catch (error) {
      console.log("error in getting property");
    }
  }

  useEffect(() => {
    getProperty()
  }, [])


  return (
    <>
      <Header />
      <h1>Dashboard</h1>
      <Grid sx={{ display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "center" }}>
        {properties.map((item, index) => (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <img
              src={item.imageUrl}
              alt={item.title}
              style={{ width: "100%", height: "auto" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                ${item.price}
              </Typography>
              <Typography variant="body2" color="text.primary">
                Bedrooms: {item.bedrooms}
                <br />
                Bathrooms: {item.bathrooms}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.desc}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  float: "left",
                  mt: "20px",
                }}
                onClick={() => setShowDetails(true)}
              >
                I'm Interested
              </Button>
              <Box sx={{ mt: "20px" }}>
                <FavoriteIcon
                  fontSize="large"
                  sx={{
                    cursor: "pointer",
                    color: item.liked ? "red" : "grey", // Fill color if liked
                  }}
                  onClick={() => handleLike(item)}
                />
              </Box>
            </CardContent>
            <Box
              sx={{
                // marginTop: "60px",
                display: "flex",
                // marginBottom: "20px",
                gap: "20px",
              }}
            >
              <Box>
                {showDetails && (
                  <Accordion
                    expanded={expanded === "sellerDetails"}
                    onChange={handleChange("sellerDetails")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="seller-details-content"
                      id="seller-details-header"
                      sx={{
                        "&.MuiAccordionSummary-content": {
                          padding: 0, // Adjusts internal padding if necessary
                        },
                      }}
                    >
                      Seller Details
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{item.sellerDetails}</Typography>
                    </AccordionDetails>
                  </Accordion>
                )}
              </Box>
            </Box>
          </Card>
        ))}
      </Grid>
    </>
  );
};
