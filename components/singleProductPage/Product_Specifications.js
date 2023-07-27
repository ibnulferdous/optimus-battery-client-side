import { Box, Container, Typography } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ProductSpecifications = (props) => {
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

  console.log(length);

  return (
    <section>
      <Container
        sx={{ marginBottom: { xs: "50px", md: "75px" } }}
        maxWidth="sm"
      >
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontWeight: "700", marginBottom: "15px" }}
        >
          Specifications
        </Typography>

        <Box>
          <TableContainer>
            <Table sx={{ width: "100%" }} aria-label="simple table">
              <TableBody>
                {/* -------------------------- */}
                <TableRow
                  key={1}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Brand & Model:
                  </TableCell>
                  <TableCell align="left">{model}Ah</TableCell>
                </TableRow>

                <TableRow
                  key={1}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Capacity:
                  </TableCell>
                  <TableCell align="left">{capacity}Ah</TableCell>
                </TableRow>

                <TableRow
                  key={1}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Type:
                  </TableCell>
                  <TableCell align="left">{type}</TableCell>
                </TableRow>

                <TableRow
                  key={1}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Voltage:
                  </TableCell>
                  <TableCell align="left">{voltage}V</TableCell>
                </TableRow>

                <TableRow
                  key={1}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Application:
                  </TableCell>
                  <TableCell align="left">{application}</TableCell>
                </TableRow>

                <TableRow
                  key={1}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Dimensions (in inches):
                  </TableCell>
                  <TableCell align="left">
                    {length}″ X {width}″ X {height}″
                  </TableCell>
                </TableRow>

                <TableRow
                  key={1}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Weight (+/- 5%):
                  </TableCell>
                  <TableCell align="left">{weight}Kg</TableCell>
                </TableRow>

                <TableRow
                  key={1}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Country of Origin:
                  </TableCell>
                  <TableCell align="left">{country_of_origin}</TableCell>
                </TableRow>

                <TableRow
                  key={1}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Warranty:
                  </TableCell>
                  <TableCell align="left">
                    {warranty}* Months (T&C Apply)
                  </TableCell>
                </TableRow>

                {/* -------------------------- */}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </section>
  );
};

export default ProductSpecifications;
