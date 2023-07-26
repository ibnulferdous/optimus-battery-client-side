// Mongodb connection
import clientPromise from "../../lib/mongodb";

import { Box, Container, Paper, Typography } from "@mui/material";
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
import ProductIntro from "../../components/singleProductPage/productIntro";

export default function SingleProduct({ product }) {
  const {
    application,
    capacity,
    country_of_origin,
    description,
    width,
    height,
    length,
    model,
    path,
    price,
    type,
    voltage,
    warrenty,
    weight,
  } = product;

  return (
    <>
      {/* Head part for meta data */}
      <Head>
        <title>{model}Ah- IPS/UPS/Inverter battery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProductIntro />
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
                            primary="Warrenty"
                            secondary={`${warrenty}* Months`}
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
      </main>
    </>
  );
}

// Function to find out the possible dynamic routes to generate SSG
export async function getStaticPaths() {
  try {
    const client = await clientPromise;
    const db = client.db("optimus_battery");

    const products = await db.collection("products").find().toArray();

    const data = JSON.parse(JSON.stringify(products));

    const paths = data.map((product) => {
      return {
        params: { path: product.path.toString() },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (e) {
    console.error(e);
  }
}

// Function to fetch data for every single product
export async function getStaticProps({ params }) {
  const path = params.path;

  try {
    const client = await clientPromise;
    const db = client.db("optimus_battery");

    const product = await db.collection("products").findOne({ path });

    return {
      props: { product: JSON.parse(JSON.stringify(product)) },
      revalidate: 1,
    };
  } catch (e) {
    console.error(e);
  }
}
