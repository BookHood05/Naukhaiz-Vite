import React, { useState } from "react";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import classes from "./IndividualChatHeader.module.css";
import ArrowBack from "@mui/icons-material/West";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const IndividualChatHeader = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [chatOption, setChatOption] = useState(props.options[0]);

  return (
    <div className={classes.chat_header}>
      <Box
        sx={{
          p: "10px 5px",
          display: "flex",
          alignItems: "center",
          height: "40px",
        }}
      >
        {props.isIndividual && (
          <>
            <IconButton
              onClick={props.ChatToggler}
              type="button"
              sx={{
                m: 0,
                height: 45,
                width: 45,
                color: "white",
              }}
            >
              <ArrowBack fontSize="inherit" />
            </IconButton>
            <Divider
              sx={{ height: 35, m: 0.5, mr: "14px" }}
              orientation="vertical"
            />
          </>
        )}
        <Avatar
          alt="Remy Sharp"
          src={""}
          sx={{
            width: 45,
            height: 45,
            m: "5px 0px",
            ml: "10px",
            backgroundColor: "#d0e1f9",
            color: "#4d648d",
          }}
        />
        <ListItemText
          className={classes.chat_title}
          primary={<header>{chatOption}</header>}
        />
        <Tooltip title="Switch Chat" arrow>
          <IconButton
            aria-label="more"
            id="chat-opt-button"
            aria-controls={open ? "chat-opt-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={(event) => {
              setAnchorEl(event.currentTarget);
            }}
          >
            <MoreVertIcon sx={{ color: "white" }} />
          </IconButton>
        </Tooltip>
        <Menu
          id="chat-opt-menu"
          MenuListProps={{
            "aria-labelledby": "chat-opt-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={() => {
            setAnchorEl(null);
          }}
          PaperProps={{
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
        >
          {props.options.map((option) => (
            <MenuItem
              key={option}
              selected={option === "Pyxis"}
              onClick={() => {
                setChatOption(option);
                setAnchorEl(null);
              }}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
        <Divider />
      </Box>
    </div>
  );
};

export default IndividualChatHeader;
