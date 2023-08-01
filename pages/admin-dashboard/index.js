import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "../../auth/firebase/firebase.config";
import ProductsTable from "../../components/ProductsTable";
import UserCard from "../../components/UserCard";
import withAuth from "../../components/withAuth";
import clientPromise from "../../lib/mongodb";

const AdminDashboard = ({ user, products }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      router.push("/admin-login");
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  const userData = {
    name: user.displayName ?? "Shah Alom",
    email: user.email ?? "",
    role: "Admin",
    photoUrl:
      user.photoUrl ??
      "https://scontent.fdac5-1.fna.fbcdn.net/v/t1.6435-9/74209895_380017126210450_1363058358726164480_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFySVN-CnFCOiUxDrODgpdYYDKE2HU610VgMoTYdTrXRXaJszAPSQnLu1PHdOzQ1BXw58h5iI5jeCRSbwPL8K4T&_nc_ohc=Ibl-7_Tjv4cAX9VSmpJ&_nc_ht=scontent.fdac5-1.fna&oh=00_AfD5Rml_o_IiTWVRrSrs6zOijaKjMLo0McxUMAeYX21apQ&oe=64EF4DDC",
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const updateProduct = async (_id, price) => {
    try {
      const response = await fetch("api/updateProduct", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id, price }),
      });

      if (!response.ok) {
        console.error("Failed to update product:", response);
      } else {
        const updatedProduct = await response.json();
        console.log("Product updated successfully:", updatedProduct);
        router.reload();
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Optimus Battery- Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Admin Dashboard
            </Typography>
            {isMobile && (
              <Button color="error" variant="contained" onClick={handleSignOut}>
                Log Out
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" sx={{ marginTop: "20px" }}>
          <Grid container spacing={3}>
            <Grid item xs={isMobile ? 12 : 2}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                orientation={isMobile ? "horizontal" : "vertical"}
                textColor="primary"
                indicatorColor="primary"
                variant={isMobile ? "scrollable" : "standard"}
              >
                <Tab label="All Products" />
                {/* <Tab label="Add Product" /> */}
                <Tab label="User Info" />
              </Tabs>

              {!isMobile && (
                <Button
                  sx={{ marginTop: "16px", marginBottom: "16px" }}
                  color="error"
                  variant="outlined"
                  fullWidth
                  onClick={handleSignOut}
                >
                  Log Out
                </Button>
              )}
            </Grid>
            <Grid item xs={isMobile ? 12 : 10}>
              {activeTab === 0 && (
                <Card>
                  <CardContent>
                    <ProductsTable
                      products={products}
                      updateProduct={updateProduct}
                    />
                  </CardContent>
                </Card>
              )}
              {/* {activeTab === 1 && (
              <Card>
                <CardContent>
                  <Typography variant="h5">Add A New Product</Typography>
                  <Typography variant="body1">New Product Form</Typography>
                </CardContent>
              </Card>
            )} */}
              {activeTab === 1 && (
                <UserCard isMobile={isMobile} userData={userData} />
              )}
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default withAuth(AdminDashboard);

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("optimus_battery");

    const products = await db.collection("products").find().toArray();

    return {
      props: {
        products: JSON.parse(JSON.stringify(products)),
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {
        products: [],
      },
    };
  }
}
