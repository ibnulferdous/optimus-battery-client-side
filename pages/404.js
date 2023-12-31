import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NotFoundImg from "../public/images/404-error.png";
import Typography from "@mui/material/Typography";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Optimus Battery- 404: page not found</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <main>
        <Box>
          <Container
            sx={{
              minHeight: "40vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              my: 10,
            }}
            fixed
          >
            <Image
              src={NotFoundImg}
              alt="Page not found"
              placeholder="blur"
              width={250}
              height={230}
              priority={true}
              quality={100}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontWeight: "700", mt: 4, mb: 3 }}
            >
              404: Page not found!
            </Typography>
            <Link href="/">
              <Button variant="outlined">Go Back home!</Button>
            </Link>
          </Container>
        </Box>
      </main>
    </>
  );
}
