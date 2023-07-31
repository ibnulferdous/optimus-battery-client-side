import { Warning } from "@mui/icons-material";
import { Button, Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";

const Unauthorized = () => {
  return (
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
  );
};

export default Unauthorized;
