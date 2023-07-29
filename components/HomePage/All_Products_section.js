import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function AllProductsSection({ products }) {
  console.log(products);
  return (
    <section>
      <Container sx={{ marginBottom: { xs: "50px", md: "75px" } }} fixed>
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontWeight: "700", marginBottom: "15px" }}
        >
          Specifications
        </Typography>

        <Grid container spacing={{ xs: 3, md: 4, lg: 14 }}>
          {products.map((product) => (
            <Grid xs={12} sm={6} md={4} key={product._id}>
              <Paper variant="outlined">
                <Box>
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
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
