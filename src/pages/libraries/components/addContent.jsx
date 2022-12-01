import * as React from "react";
import { useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "../libraries.css";
import addFileIcon from "../images/add-file.png";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const addContent = ({ setContent, content }) => {
  const [open, setOpen] = React.useState(false);
  const [choice, setChoice] = React.useState(true);
  var newContent = {};
  const fileName = useRef();
  const folderName = useRef(null);

  const handleClickOpen = () => {
    setOpen(true);
  };
  function fileSubmit() {
    handleClose();
    addFile();
  }
  function folderSubmit() {
    handleClose();
    addFolder();
  }

  const handleClose = () => {
    setOpen(false);
    setChoice(true);
  };

  const addFile = () => {
    newContent = { filename: fileName.current.value, ext: "jpg", link: "" };
    setContent(newContent);
    content.push(newContent);
  };
  const addFolder = () => {
    newContent = {
      foldername: folderName.current.value,
      subfiles: [],
      subfolder: [],
    };
    setContent(newContent);
    content.push(newContent);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <>
      <Button onClick={handleClickOpen}>
        <Card
          className="addContent"
          sx={{
            maxWidth: 130,
            minWidth: 130,
            minHeight: 160,
            maxHeight: 150,
            marginRight: 5,
            textTransform: "capitalize",
            boxShadow: "none",
          }}
        >
          <Typography
            sx={{
              color: "black",
              fontWeight: "Bold",
              fontSize: 14,
              marginTop: 1,
              width: 55,
              ml: 3,
              textTransform: "capitalize",
            }}
          >
            Add Content
          </Typography>
          <CardContent>
            <img
              src={addFileIcon}
              style={{ marginTop: 7, width: 90, height: 100 }}
            />
          </CardContent>
        </Card>
      </Button>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={{ fontSize: 20, mt: -1, mb: -2, ml: -1 }}>
            Add File/Folder
          </DialogTitle>

          {/* File Add Tab  */}

          {choice && (
            <>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Add File" {...a11yProps(0)} />
                    <Tab label="Add Folder" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <div className="fileAdd">
                    <TextField
                      id="standard-basic"
                      label="File Name"
                      variant="standard"
                      inputRef={fileName}
                      required
                      sx={{
                        marginRight: 50,
                        marginBottom: 9,
                        marginTop: -3,
                        width: "100%",
                      }}
                    />
                    <input type="file" required />
                    <Button
                      variant="contained"
                      onClick={fileSubmit}
                      sx={{ mt: 1, mb: -0.5 }}
                    >
                      Add
                    </Button>
                  </div>
                </TabPanel>
                {/* Folder Add Tab */}

                <TabPanel value={value} index={1}>
                  <div className="fileAdd">
                    <TextField
                      id="standard-basic"
                      label="Folder Name"
                      variant="standard"
                      inputRef={folderName}
                      required
                      sx={{
                        marginRight: 50,
                        marginBottom: 11,
                        marginTop: -4,
                        width: "100%",
                      }}
                    />
                    <Button variant="contained" onClick={folderSubmit}>
                      Add
                    </Button>
                  </div>
                </TabPanel>
              </Box>
            </>
          )}
        </Dialog>
      </div>
    </>
  );
};

export default addContent;
