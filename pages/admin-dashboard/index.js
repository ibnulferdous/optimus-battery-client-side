import {
  AppBar,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import withAuth from "../../components/withAuth";
import UserCard from "../../components/UserCard";
import ProductsTable from "../../components/ProductsTable";
import { auth } from "../../auth/firebase/firebase.config";

const AdminDashboard = ({ user }) => {
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
    photoUrl: user.photoUrl ?? "https://example.com/user-photo.jpg",
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
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
              <Tab label="User Info" />
              <Tab label="All Products" />
              <Tab label="Add Product" />
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
              <UserCard isMobile={isMobile} userData={userData} />
            )}
            {activeTab === 1 && (
              <Card>
                <CardContent>
                  <ProductsTable />
                </CardContent>
              </Card>
            )}
            {activeTab === 2 && (
              <Card>
                <CardContent>
                  <Typography variant="h5">Add A New Product</Typography>
                  <Typography variant="body1">New Product Form</Typography>
                </CardContent>
              </Card>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default withAuth(AdminDashboard);
