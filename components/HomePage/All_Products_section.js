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
    <>
      <Container sx={{ marginBottom: { xs: "50px", md: "75px" } }} fixed>
        <Typography
          variant="h4"
          component="h3"
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
                  sx={{ "&:hover": { borderColor: "primary.main" } }}
                >
                  <Box sx={{ px: 6 }}>
                    <Image
                      src={`/images/${product.images[0]}`}
                      width={400}
                      height={400}
                      alt={`${product.model}ah battery for ips/ups/inverter`}
                      priority="true"
                      quality={100}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </Box>
                  <Box sx={{ p: 4 }}>
                    <Typography
                      variant="subtitle1"
                      component="h4"
                      color="primary.main"
                      sx={{
                        fontWeight: "700",
                      }}
                    >
                      {product.model}Ah
                    </Typography>

                    <Typography variant="subtitle1" component="h5">
                      Price: ৳{product.price}
                    </Typography>

                    <Button
                      variant="text"
                      sx={{
                        width: "100%",
                        mt: 2,
                        "&:hover": {
                          textDecoration: "underline",
                        },
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
    </>
  );
}
