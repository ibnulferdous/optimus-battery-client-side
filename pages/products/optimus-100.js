import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import Head from "next/head";

// Material Icon
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";

export default function Optimus100() {
  return (
    <>
      <Head>
        <title>Optimus 100Ah- IPS/UPS/Inverter battery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container sx={{ marginBlock: "100px" }} fixed>
          <Box>
            <Grid container spacing={8}>
              <Grid xs={12} md={6}>
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
              </Grid>
              <Grid xs={12} md={6}>
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{ fontWeight: "700", marginBottom: "25px" }}
                >
                  Optimus 100Ah (Dry Cell)
                </Typography>

                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: "700" }}
                  gutterBottom
                >
                  Price: ৳ 15000
                </Typography>

                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ lineHeight: "1.8" }}
                >
                  The Optimus 100Ah (Dry Cell) battery is designed to seamlessly
                  integrate into any Digital IPS/UPS/Inverter system, ensuring a
                  smooth and uninterrupted power supply. This model comes with a
                  24* months warranty. These batteries utilize advanced
                  technology, allowing them to deliver a substantial and
                  reliable power output consistently. Engineered for optimal
                  performance, they boast increased power and efficiency, thus
                  extending their overall lifespan. Notably, these batteries
                  require minimal maintenance.
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
                          <ListItemText primary="Capacity" secondary="100Ah" />
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
                            primary="Warrenty"
                            secondary="24* Months"
                          />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </main>
    </>
  );
}
