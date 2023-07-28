import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ProductSpecifications from "./Product_Specifications";
import ProductFeatures from "./Product_Features";

export default function SectionTwo(props) {
  const {
    model,
    capacity,
    price,
    warranty,
    type,
    voltage,
    length,
    width,
    height,
    weight,
    country_of_origin,
    application,
  } = props;

  return (
    <section>
      <Container sx={{ marginBottom: { xs: "50px", md: "75px" } }} fixed>
        <Grid container spacing={{ xs: 3, md: 8, lg: 12 }}>
          <Grid xs={12} md={6}>
            <ProductSpecifications
              model={model}
              capacity={capacity}
              price={price}
              warranty={warranty}
              type={type}
              voltage={voltage}
              application={application}
              country_of_origin={country_of_origin}
              weight={weight}
              length={length}
              width={width}
              height={height}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <ProductFeatures />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
