import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import MuiLink from "@mui/material/Link";
import Link from "next/link";
import optimusLogo from "../public/images/optimus-battery-logo-blue.png";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const quickLinksMenu = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Condition of Use",
    link: "/condition-of-use",
  },
  {
    text: "Maintenance",
    link: "/maintenance-tips",
  },
];

const productsMenu = [
  {
    text: "Optimus 100Ah",
    link: "/products/optimus-100ah",
  },
  {
    text: "Optimus 130Ah",
    link: "/products/optimus-130ah",
  },
  {
    text: "Optimus 165Ah",
    link: "/products/optimus-165ah",
  },
  {
    text: "Optimus 200Ah (Flat Plate)",
    link: "/products/optimus-200ah-flat-plate-battery",
  },
  {
    text: "Optimus 230Ah (Flat Plate)",
    link: "/products/optimus-230ah-flat-plate-battery",
  },
  {
    text: "Optimus 230Ah",
    link: "/products/optimus-230ah",
  },
];

const legalMenu = [
  {
    text: "Terms & Conditions",
    link: "/terms-and-conditions",
  },
  {
    text: "Privacy Policy",
    link: "/privacy-policy",
  },
];

export default function Footer() {
  return (
    <>
      <footer>
        <Box sx={{ borderTop: 1, borderColor: "primary.main" }}>
          <Container fixed sx={{ marginBlock: { xs: "30px", md: "50px" } }}>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {/* First Column */}
              <Grid xs={12} md={4}>
                {/* Optimus Logo */}
                <Link href="/">
                  <Image
                    src={optimusLogo}
                    placeholder="blur"
                    width={150}
                    height={25}
                    alt="Optimus battery logo"
                    priority={true}
                  />
                </Link>

                <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
                  Optimus Battery, a Bangladeshi manufacturer, takes pride in
                  providing reliable batteries for IPS, UPS, and inverters to
                  keep essential devices powered during critical times.
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
                  Email: contact@optimusbattery.com
                </Typography>
              </Grid>

              {/* Second Column */}
              <Grid xs={12} sm={4} md={3}>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{ fontWeight: "700" }}
                >
                  Quick Links
                </Typography>

                <Stack spacing={0}>
                  {quickLinksMenu.map((product, idx) => (
                    <Link href={product.link} key={idx}>
                      <MuiLink
                        component="button"
                        variant="body2"
                        underline="hover"
                        align="left"
                      >
                        {product.text}
                      </MuiLink>
                    </Link>
                  ))}
                </Stack>
              </Grid>

              {/* Third Column */}
              <Grid xs={12} sm={4} md={3}>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{ fontWeight: "700" }}
                >
                  Products
                </Typography>
                <Stack spacing={0}>
                  {productsMenu.map((product, idx) => (
                    <Link href={product.link} key={idx}>
                      <MuiLink
                        component="button"
                        variant="body2"
                        underline="hover"
                        align="left"
                      >
                        {product.text}
                      </MuiLink>
                    </Link>
                  ))}
                </Stack>
              </Grid>

              {/* Fourth Column */}
              <Grid xs={12} sm={4} md={2}>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{ fontWeight: "700" }}
                >
                  Legal
                </Typography>
                <Stack spacing={0}>
                  {legalMenu.map((product, idx) => (
                    <Link href={product.link} key={idx}>
                      <MuiLink
                        component="button"
                        variant="body2"
                        underline="hover"
                        align="left"
                      >
                        {product.text}
                      </MuiLink>
                    </Link>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box sx={{ borderTop: "1px solid rgba(0, 0, 0, 0.12)" }}>
          <Container fixed sx={{ my: 3 }}>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              <Grid xs={12} md={6}>
                <Typography
                  variant="body2"
                  sx={{ textAlign: { xs: "center", sm: "left" } }}
                >
                  Optimus Battery © All Rights Reserved
                </Typography>
              </Grid>

              <Grid xs={12} md={6}>
                <Typography
                  variant="body2"
                  sx={{ textAlign: { xs: "center", sm: "right" } }}
                >
                  Developed by -&nbsp;
                  <a
                    href="https://tazrian.dev/"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    Tazrian
                  </a>
                  &nbsp;&&nbsp;
                  <a
                    href="https://ibnulferdous.com/"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    Ibnul
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </footer>
    </>
  );
}
