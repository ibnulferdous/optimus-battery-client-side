import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Head from "next/head";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <>
      <footer>
        <Box sx={{ borderTop: "1px solid " }}>
          <Container
            sx={{ marginBlock: { xs: "75px", md: "100px" } }}
            fixed
          ></Container>
        </Box>
      </footer>
    </>
  );
}
