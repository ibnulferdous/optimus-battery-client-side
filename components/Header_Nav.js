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
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

// Icons
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { usePathname } from "next/navigation";

// Next Image
import Image from "next/image";
import Link from "next/link";
import optimusLogo from "../public/images/optimus-battery-logo-light-1.png";

const navItems = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Products",
    link: "/#all-products",
  },
  {
    text: "Condition of Use",
    link: "/condition-of-use",
  },
  {
    text: "Maintenance",
    link: "/maintenance-tips",
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

        <AppBar sx={{ boxShadow: 0, borderBottom: "1px solid #fff" }}>
          <Container maxWidth="lg">
            <Toolbar
              disableGutters
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              {/* Optimus Logo */}
              <Link href="/">
                <Image
                  src={optimusLogo}
                  placeholder="empty"
                  width={150}
                  height={25}
                  alt="Optimus battery logo"
                  priority={true}
                />
              </Link>

              {/* Menu for tablet and desktop */}
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item, index) => (
                  <Link key={index} href={item.link}>
                    <Button
                      sx={{
                        fontWeight: pathname == item.link ? 400 : 300,
                        color: pathname == item.link ? "#fff" : "#f0f0f0df",
                        paddingInline: "20px",
                        letterSpacing: "1.25px",
                        "&:hover": {
                          textDecoration: "underline",
                        },
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
