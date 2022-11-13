import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import folderIcon from "../images/folder.png";
import openFolderIcon from "../images/folderOpen.png";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import "../libraries.css";

function folder({ name, openFolder }) {
  return (
    <div>
      <Card
        className={
          openFolder === name ? "folderCardSelected folderCard" : "folderCard"
        }
        sx={{
          maxWidth: 130,
          minWidth: 130,
          minHeight: 160,
          maxHeight: 150,
          textTransform: "capitalize",
          boxShadow: "none",
        }}
      >
        <Tooltip title={name}>
          <Typography
            sx={{
              color: "black",
              fontWeight: "Bold",
              ml: 5,
              fontSize: 14,
              marginTop: 1,
              width: 55,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </Typography>
        </Tooltip>
        <CardContent>
          {openFolder != name && (
            <img style={{ width: 100, height: 120 }} src={folderIcon} />
          )}
          {openFolder === name && (
            <img style={{ width: 100, height: 120 }} src={openFolderIcon} />
          )}
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}

export default folder;
