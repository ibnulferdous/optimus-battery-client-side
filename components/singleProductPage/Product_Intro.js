import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

// Material Icon
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import ProductImage from "./Product_Image";

const ProductIntro = (props) => {
  const { model, capacity, description, price, warranty, images } = props;

  return (
    <section>
      <Container sx={{ marginBottom: { xs: "50px", md: "75px" } }} fixed>
        <Grid container spacing={{ xs: 3, md: 8, lg: 12 }}>
          <Grid xs={12} md={6}>
            <ProductImage images={images} model={model} />
          </Grid>
          <Grid xs={12} md={6}>
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontWeight: "700" }}
              gutterBottom
            >
              {model}
            </Typography>

            <Typography
              variant="h6"
              component="h2"
              color="primary.main"
              sx={{
                marginBottom: "35px",
                fontWeight: "700",
              }}
            >
              Price: ৳{price}
            </Typography>

            <Typography variant="body2" gutterBottom sx={{ lineHeight: "1.8" }}>
              {description}
            </Typography>

            <Box>
              <Grid container spacing={{ xs: 0, sm: 1, md: 2 }}>
                <Grid xs={6}>
                  <List dense>
                    <ListItem disableGutters>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "primary.main" }}>
                          <BatteryChargingFullIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Capacity"
                        secondary={`${capacity}Ah`}
                      />
                    </ListItem>
                  </List>
                </Grid>

                <Grid xs={6}>
                  <List dense>
                    <ListItem disableGutters>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "primary.main" }}>
                          <SafetyCheckIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Warranty"
                        secondary={`${warranty}* Months`}
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ProductIntro;
