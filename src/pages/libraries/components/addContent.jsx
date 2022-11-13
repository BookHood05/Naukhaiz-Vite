import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "../libraries.css";
import addFileIcon from "../images/add-file.png";

const addContent = () => {
  const [open, setOpen] = React.useState(false);
  const [choice, setChoice] = React.useState(true);
  const [addFileFlag, setAddFile] = React.useState(false);
  const [addFolderFlag, setAddFolder] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  function fileSubmit() {
    handleClose();
  }
  function folderSubmit() {
    handleClose();
  }

  const handleClose = () => {
    setOpen(false);
    setAddFile(false);
    setAddFolder(false);
    setChoice(true);
  };

  function addFile() {
    setChoice(false);
    setAddFile(true);
  }
  function addFolder() {
    setChoice(false);
    setAddFolder(true);
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
          <DialogTitle>Add File/Folder</DialogTitle>
          {choice && (
            <>
              <DialogContent>
                <div className="addContentDialog">
                  <Button
                    className="addContentButtons"
                    sx={{
                      marginX: 10,
                      marginY: 3,
                      color: "black",
                    }}
                    onClick={addFile}
                  >
                    <img src="https://cdn-icons-png.flaticon.com/128/6853/6853377.png"></img>
                    Add File
                  </Button>

                  <Button
                    className="addContentButtons"
                    sx={{
                      marginX: 10,
                      marginY: 3,
                      color: "black",
                    }}
                    onClick={addFolder}
                  >
                    <img src="https://cdn-icons-png.flaticon.com/128/6940/6940607.png"></img>
                    Add Folder
                  </Button>
                </div>
              </DialogContent>
            </>
          )}

          {/* File Add Dialog Box */}

          {addFileFlag && (
            <>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add File</DialogTitle>

                <>
                  <DialogContent>
                    <div className="fileAdd">
                      <TextField
                        id="standard-basic"
                        label="File Name"
                        variant="standard"
                        required
                        sx={{ marginRight: 40, marginBottom: 2, width: 400 }}
                      />
                      <input type="file" required />
                    </div>
                    <DialogActions>
                      <Button variant="contained" onClick={fileSubmit}>
                        Submit
                      </Button>
                    </DialogActions>
                  </DialogContent>
                </>
              </Dialog>
            </>
          )}

          {/* Folder Add Dialog Box */}

          {addFolderFlag && (
            <>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Folder</DialogTitle>

                <>
                  <DialogContent>
                    <div className="fileAdd">
                      <TextField
                        id="standard-basic"
                        label="Folder Name"
                        variant="standard"
                        required
                        sx={{ marginRight: 40, marginBottom: 2, width: 400 }}
                      />
                    </div>
                    <DialogActions>
                      <Button variant="contained" onClick={folderSubmit}>
                        Submit
                      </Button>
                    </DialogActions>
                  </DialogContent>
                </>
              </Dialog>
            </>
          )}
        </Dialog>
      </div>
    </>
  );
};

export default addContent;
