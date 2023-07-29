import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Link from "next/link";
import Typography from "@mui/material/Typography";

// CSS
import styles from "../../styles/Hero.module.css";

export default function Hero() {
  return (
    <section>
      <Container sx={{ marginBottom: { xs: "50px", md: "75px" } }} fixed>
        <Grid container spacing={{ xs: 3, md: 4, lg: 4 }}>
          <Grid
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              py: { xs: 6, md: 4, lg: 0 },
              pr: { xs: 0, md: 5 },
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: "700",
                fontSize: { xs: "40px", md: "48px" },
              }}
              gutterBottom
            >
              Perfect Companion for IPS, UPS and Inverter
            </Typography>
            <Typography variant="body2" gutterBottom>
              Optimus batteries are built with the latest technology to ensure
              long backup and uninterrupted power supply for your home, office,
              or business. These batteries fit perfectly in any digital IPS,
              UPS, or inverter.
            </Typography>
          </Grid>
          <Grid xs={12} md={8} sx={{ minHeight: { xs: "30vh", md: "75vh" } }}>
            <Box
              sx={{ bgcolor: "primary.main", height: "100%" }}
              className={styles.image_container}
            >
              {/* First Image row */}
              <Box>
                <Grid container spacing={{ xs: 2, md: 2, lg: 2 }}>
                  <Grid xs={8} md={8}>
                    <Image
                      src="/images/optimus-home.jpg"
                      width={800}
                      height={450}
                      alt={`battery for ips/ups/inverter`}
                      priority="true"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </Grid>
                  <Grid xs={4} md={4} sx={{ p: { xs: 2, md: 6 } }}>
                    <Image
                      src="/images/optimus-library.jpg"
                      width={300}
                      height={400}
                      alt={`battery for ips/ups/inverter`}
                      priority="true"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>

              <Box>
                <Grid
                  container
                  spacing={{ xs: 2, md: 2, lg: 2 }}
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <Grid xs={3} md={4}>
                    <Link href="/#all-products">
                      <IconButton
                        aria-label="go next"
                        size="large"
                        sx={{
                          bgcolor: "#f5f5f5",
                          border: 1,
                          borderColor: "primary.main",
                          borderRadius: 0,
                          minWidth: { xs: "25px", sm: "75px", md: "100px" },
                          minHeight: { xs: "25px", sm: "75px", md: "100px" },
                          "&:hover": {
                            bgcolor: "#f5f5f5",
                          },
                        }}
                      >
                        <KeyboardDoubleArrowDownIcon
                          fontSize="large"
                          color="primary"
                        />
                      </IconButton>
                    </Link>
                  </Grid>
                  <Grid xs={9} md={8} sx={{ pb: "1px" }}>
                    <Image
                      src="/images/optimus-office.jpg"
                      alt={`battery for ips/ups/inverter`}
                      priority="true"
                      width={600}
                      height={400}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
