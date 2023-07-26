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

const ProductIntro = ({ model, capacity, description, price, warranty }) => {
  return (
    <div>
      <Container sx={{ marginBlock: "100px" }} fixed>
        {/* First Section starts */}
        <Box>
          <Grid container spacing={12}>
            <Grid xs={12} md={6}>
              <Paper variant="outlined" square>
                <Image
                  src="/images/100-dry-cell-battery.jpg"
                  width={600}
                  height={600}
                  alt="Optimus 100Ah dry cell battery for ips/ups/inverter"
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
                sx={{ fontWeight: "700", marginBottom: "25px" }}
              >
                {model}Ah
              </Typography>

              <Typography
                variant="h6"
                component="h3"
                sx={{
                  marginBottom: "35px",
                  fontWeight: "700",
                  color: "#2962ff",
                }}
              >
                Price: ৳ {price}
              </Typography>

              <Typography
                variant="body1"
                gutterBottom
                sx={{ lineHeight: "1.8" }}
              >
                {description}
              </Typography>

              <Box>
                <Grid container spacing={2}>
                  <Grid xs={6}>
                    <List
                      sx={{
                        width: "100%",
                      }}
                    >
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: "#2962ff" }}>
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
                    <List
                      sx={{
                        width: "100%",
                      }}
                    >
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: "#2962ff" }}>
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
        </Box>
        {/* First Section ends */}
      </Container>
    </div>
  );
};

export default ProductIntro;
