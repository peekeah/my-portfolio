import React, { useState } from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";
// import { HashLink, NavHashLink } from 'react-router-hash-link';
// import { Link } from "react-scroll";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavbarDrawer } from "./NavbarDrawer";
import { pages } from "../Constants";
import "./Navbar.css";

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);

  const theme = useTheme();
  const isMatched = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className="container w-10/12 mx-auto items-center">
      <div className="navbar flex justify-between h-14">
        <div className="left flex justify-center items-center">
          <Link to="/">
            <div className="logo cursor-pointer text-3xl">PK</div>
          </Link>
        </div>
        {isMatched ? (
          <div className="right flex">
            <NavLink to="/">
              <span className="text-xl">Home</span>
            </NavLink>
            <NavLink to="/about">
              <span className="text-xl">About</span>
            </NavLink>
            <NavLink to="/projects">
              <span className="text-xl">Projects</span>
            </NavLink>
            <NavLink to="/contact">
              <span className="text-xl">Contact</span>
            </NavLink>
          </div>
        ) : (
          <div className="right flex items-center">
            <Button onClick={() => setDrawer(!drawer)}>
              <MenuIcon sx={{ color: "var(--primary)" }} />
            </Button>
            {drawer ? (
              <NavbarDrawer
                pages={pages}
                drawer={drawer}
                setDrawer={setDrawer}
              />
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
