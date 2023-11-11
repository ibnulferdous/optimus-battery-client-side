import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Link from "next/link";
import Typography from "@mui/material/Typography";

export default function AllProductsSection({ products }) {
  console.log(products);

  return (
    <section id="all-products">
      <Container
        sx={{ pt: { xs: "50px", md: "75px" }, mb: { xs: "50px", md: "75px" } }}
        fixed
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "700", marginBottom: "40px" }}
        >
          All Products
        </Typography>

        <Grid container spacing={{ xs: 3, md: 4, lg: 8 }}>
          {products.map((product) => (
            <Grid xs={12} sm={6} md={4} key={product._id}>
              <Link
                href={`/products/${product.path}`}
                style={{ textDecoration: "none" }}
              >
                <Paper
                  variant="outlined"
                  sx={{
                    minHeight: "100%",
                    "&:hover": { borderColor: "primary.main" },
                  }}
                >
                  <Box sx={{ px: 6 }}>
                    <Image
                      src={
                        product.images[0].startsWith("https")
                          ? product.images[0]
                          : `/images/${product.images[0]}`
                      }
                      width={250}
                      height={250}
                      alt={`${product.model} battery for ips/ups/inverter`}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </Box>
                  <Box sx={{ p: 4 }}>
                    <Typography
                      variant="subtitle1"
                      component="h3"
                      color="primary.main"
                      sx={{
                        fontWeight: "700",
                      }}
                    >
                      {product.model}
                    </Typography>

                    <Typography variant="subtitle1" component="h4">
                      Price: ৳{product.price}
                    </Typography>

                    <Button
                      variant="outlined"
                      sx={{
                        width: "100%",
                        mt: 2,
                      }}
                      endIcon={<KeyboardArrowRightIcon />}
                    >
                      View Details
                    </Button>
                  </Box>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
