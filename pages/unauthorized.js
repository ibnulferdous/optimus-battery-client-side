import Head from "next/head";
import { Warning } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "next/link";
import Typography from "@mui/material/Typography";

const Unauthorized = () => {
  return (
    <>
      <Head>
        <title>Optimus Battery- Unauthorized</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <div>
        <Card
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Warning sx={{ fontSize: 60 }} color="error" />
            </div>
            <Typography
              variant="h5"
              component="h1"
              align="center"
              gutterBottom
              sx={{ textAlign: "center" }}
            >
              Restricted Page
            </Typography>
            <Typography
              variant="body1"
              align="center"
              paragraph
              sx={{ textAlign: "center" }}
            >
              You are not authorized to access this page.
            </Typography>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link href="/">
                <Button color="primary" variant="contained">
                  Go Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Unauthorized;
