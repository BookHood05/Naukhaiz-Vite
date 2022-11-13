import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import fileIcon from "../images/file.png";
import DocIcon from "../images/doc-file.png";
import PdfIcon from "../images/pdf-file.png";
import PngIcon from "../images/png-file.png";
import PptIcon from "../images/ppt-file.png";
import RarIcon from "../images/rar-file.png";
import TxtIcon from "../images/txt-file.png";
import XlsIcon from "../images/xls-file.png";
import Tooltip from "@mui/material/Tooltip";
import "../libraries.css";

function file({ name, link, ext }) {
  return (
    <div>
      <Button sx={{ textTransform: "capitalize" }}>
        <Card
          className="fileCard"
          sx={{
            minWidth: 130,
            maxWidth: 130,
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
                fontSize: 14,
                marginTop: 1,
                width: 55,
                ml: 5,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {name}
            </Typography>
          </Tooltip>
          <CardContent>
            {ext === "" && (
              <img
                style={{ marginTop: 8, width: 95, height: 95 }}
                src={fileIcon}
              />
            )}
            {ext === "pdf" && (
              <img
                style={{ marginTop: 8, width: 100, height: 100 }}
                src={PdfIcon}
              />
            )}
            {ext === "txt" && (
              <img
                style={{ marginTop: 8, width: 100, height: 100 }}
                src={TxtIcon}
              />
            )}
            {(ext === "rar" || ext === "zip") && (
              <img
                style={{ marginTop: 8, width: 100, height: 100 }}
                src={RarIcon}
              />
            )}
            {(ext === "jpeg" || ext === "jpg" || ext === "png") && (
              <img
                style={{ marginTop: 8, width: 100, height: 100 }}
                src={PngIcon}
              />
            )}
            {(ext === "ppt" || ext === "pptx") && (
              <img
                style={{ marginTop: 8, width: 100, height: 100 }}
                src={PptIcon}
              />
            )}
            {(ext === "doc" || ext === "docx") && (
              <img
                style={{ marginTop: 8, width: 100, height: 100 }}
                src={DocIcon}
              />
            )}
            {(ext === "xls" || ext === "xlsx") && (
              <img
                style={{ marginTop: 8, width: 100, height: 100 }}
                src={XlsIcon}
              />
            )}
          </CardContent>
          <div className="fileButtons">
            <Button
              className="fileBtn"
              variant="contained"
              sx={{
                marginX: 1.5,
                fontSize: 12,
                marginTop: 7.4,
                borderRadius: 1,
                textTransform: "capitalize",
                width: 75,
                backgroundColor: "white",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Download
            </Button>
          </div>
          <CardActions></CardActions>
        </Card>
      </Button>
    </div>
  );
}

export default file;
