import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tabs,
  Tab,
  useMediaQuery,
  Box,
  useTheme,
  Button,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavbarDrawer } from "./NavbarDrawer";
import { pages } from "../Constants";

// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

const Navbar = () => {
  const trigger = useScrollTrigger();

  const [value, setValue] = useState(0);
  const [drawer, setDrawer] = useState(false);

  const theme = useTheme();
  const isMatched = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {/* <Slide
        appear={false}
        direction="down"
        in={!trigger}
        easing={{ easeIn: "2s", easeOut: "2s" }}
      > */}
      {/* <Box sx={{ flexGrow: 1 }}> */}
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#322e2f",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, padding: 2 }}
          >
            PRANAY KOTHARI
          </Typography>
          {isMatched ? (
            <>
              <Button
                // className="btn btn-primary"
                onClick={() => setDrawer(!drawer)}
              >
                <MenuIcon sx={{ color: "white" }} />
              </Button>

              <NavbarDrawer
                pages={pages}
                drawer={drawer}
                setDrawer={setDrawer}
              />
            </>
          ) : (
            <>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  textColor="inherit"
                  onChange={(e, value) => setValue(value)}
                  aria-label="basic tabs example"
                  indicatorColor="secondary"
                  TabIndicatorProps={{
                    style: {
                      display: "flex",
                    },
                  }}
                >
                  {pages.map((page, id) => (
                    <Tab
                      key={id}
                      label={page.name}
                      component={Link}
                      to={page.url}
                      // {...a11yProps(id)}
                    />
                  ))}
                </Tabs>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
      {/* </Box> */}
      {/* </Slide> */}
    </>
  );
};

export default Navbar;
