import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme, styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import { sections } from "@components/modules/landing/constants";

import NavLink from "./NavLink";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "transparent",
  backgroundImage: "none",
  boxShadow: "none",
});

const NavAside: FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const belowSm = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const drawerWidth = belowSm ? theme.spacing(30) : theme.spacing(9);

  const handleOpenMenu = useCallback(() => {
    setOpen(true);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        PaperProps={{
          sx: { backgroundImage: "none" },
        }}
        open={open}
        onClose={handleCloseMenu}
        variant={belowSm ? "temporary" : "permanent"}
        anchor="left"
      >
        <Toolbar
          sx={{ display: { sm: "none" }, flexDirection: "row-reverse" }}
          disableGutters
        >
          <Fade in={open}>
            <IconButton
              size="large"
              aria-label={t("label.close_menu")}
              onClick={handleCloseMenu}
            >
              <CloseOutlinedIcon />
            </IconButton>
          </Fade>
        </Toolbar>
        <List
          sx={{
            flex: "1 1 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: { sm: "center" },
          }}
        >
          {sections.map(([link, label, icon]) => (
            <ListItem key={link} disablePadding>
              <NavLink href={link} onClick={handleCloseMenu}>
                {belowSm ? (
                  <>
                    <ListItemIcon sx={{ color: "inherit" }}>
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={t(label)} />
                  </>
                ) : (
                  <Tooltip title={t(label)} placement="right" arrow>
                    {icon}
                  </Tooltip>
                )}
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {belowSm && (
        <StyledAppBar>
          <Toolbar sx={{ flexDirection: "row-reverse" }} disableGutters>
            <Fade in={!open}>
              <IconButton
                size="large"
                aria-label={t("label.open_menu")}
                aria-haspopup="true"
                onClick={handleOpenMenu}
                color="inherit"
              >
                <MenuOutlinedIcon />
              </IconButton>
            </Fade>
          </Toolbar>
        </StyledAppBar>
      )}
    </>
  );
};

export default NavAside;
