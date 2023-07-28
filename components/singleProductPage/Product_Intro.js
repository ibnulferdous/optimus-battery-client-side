import { Box, Container, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";

// Material Icon
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";

const ProductIntro = (props) => {
  const { model, capacity, description, price, warranty, image_name } = props;

  return (
    <section>
      <Container sx={{ marginBottom: { xs: "50px", md: "75px" } }} fixed>
        <Grid container spacing={{ xs: 3, md: 8, lg: 12 }}>
          <Grid xs={12} md={6}>
            <Paper variant="outlined" square>
              <Image
                src={`/images/${image_name}`}
                width={600}
                height={600}
                alt={`${model}ah battery for ips/ups/inverter`}
                priority="true"
                quality={100}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Paper>
          </Grid>
          <Grid xs={12} md={6}>
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontWeight: "700" }}
              gutterBottom
            >
              {model}Ah
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
