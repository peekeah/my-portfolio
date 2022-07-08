import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const NavbarDrawer = ({ drawer, setDrawer, pages }) => {
  return (
    <>
      <React.Fragment>
        <Drawer
          anchor="right"
          open={drawer}
          onClose={() => setDrawer(false)}
          onOpen={() => setDrawer(true)}
        >
          <div style={{ marginTop: "10px", width: "8rem" }}>
            <div style={{ padding: "10px 10px" }}>
              <CloseIcon onClick={() => setDrawer(false)}/>
            </div>
            {pages.map((page, index) => (
              <ListItemButton
                component={Link}
                to={page.url}
                key={index}
                onClick={() => setDrawer(false)}
              >
                <ListItemIcon>
                  <ListItemText>{page.name}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))}
          </div>
        </Drawer>
      </React.Fragment>
    </>
  );
};
