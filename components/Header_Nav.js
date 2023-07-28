import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

// Icons
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { usePathname } from "next/navigation";

// Next Image
import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "100Ah",
    link: "/products/optimus-100ah",
  },
  {
    text: "130Ah",
    link: "/products/optimus-130ah",
  },
];

// Function to implement hid on scroll
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

export default function HeaderNav(props) {
  const pathname = usePathname();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        {/* Header navigation starts */}

        <AppBar>
          <Container maxWidth="lg">
            <Toolbar
              disableGutters
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              {/* Optimus Logo */}
              <Link href="/">
                <Image
                  src="/images/optimus-battery-logo-light-1.png"
                  width={150}
                  height={25}
                  alt="Optimus battery logo"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Link>

              {/* Menu for tablet and desktop */}
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item, index) => (
                  <Link key={index} href={item.link}>
                    <Button
                      sx={{
                        color: pathname == item.link ? "#fff" : "#f0f0f0df",
                        paddingInline: "20px",
                        letterSpacing: "1.5px",
                        textDecoration:
                          pathname == item.link ? "underline" : "none",
                      }}
                    >
                      {item.text}
                    </Button>
                  </Link>
                ))}
              </Box>

              {/* Menu for mobile */}
              <Box
                sx={{
                  flexGrow: 1,
                  justifyContent: "flex-end",
                  display: { xs: "flex", sm: "none" },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiPaper-root": {
                      width: "100%",
                      maxWidth: "250px",
                    },
                  }}
                >
                  {navItems.map((item, index) => (
                    <MenuItem
                      key={index}
                      onClick={handleCloseNavMenu}
                      sx={{ width: "100%" }}
                    >
                      <Link href={item.link} style={{ width: "100%" }}>
                        <Button
                          variant="text"
                          sx={{
                            color: pathname == item.link ? "" : "#000",
                          }}
                        >
                          {item.text}
                        </Button>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
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
