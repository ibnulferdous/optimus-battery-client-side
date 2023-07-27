import * as React from "react";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";

// Icons
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

// Next Image
import Image from "next/image";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function HideOnScroll(props) {
  const { children, window } = props;
  // Trigger when user scroll
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HeaderNavTwo(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        {/* Header navigation starts */}

        <AppBar>
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              {/* Optimus Logo */}
              <Image
                src="/images/optimus-battery-logo-light-1.png"
                width={200}
                height={34}
                alt="Optimus battery logo"
                style={{ maxWidth: "100%", height: "auto" }}
              />

              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: "#fff" }}>
                    {item}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Header navigation ends */}
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
