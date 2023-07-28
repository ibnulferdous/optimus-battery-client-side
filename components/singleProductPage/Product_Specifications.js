import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";

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

  const tableInfo = [
    {
      text: "Brand & Model",
      value: `${model}Ah`,
    },
    {
      text: "Capacity",
      value: `${capacity}Ah`,
    },
    {
      text: "Type",
      value: `${type}`,
    },
    {
      text: "Voltage",
      value: `${voltage}V`,
    },
    {
      text: "Application",
      value: `${application}`,
    },
    {
      text: "Dimensions (in inches)",
      value: `${length}″ X ${width}″ X ${height}″`,
    },
    {
      text: "Weight (+/- 5%)",
      value: `${weight}Kg`,
    },
    {
      text: "Country of Origin",
      value: `${country_of_origin}`,
    },
    {
      text: "Warranty",
      value: `${warranty}* Months (T&C Apply)`,
    },
  ];

  return (
    <>
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
              {tableInfo.map((info, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {info.text}:
                  </TableCell>
                  <TableCell align="left">{info.value}</TableCell>
                </TableRow>
              ))}
              {/* -------------------------- */}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default ProductSpecifications;
