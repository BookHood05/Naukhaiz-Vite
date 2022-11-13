import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ShowMylibContent from "./components/showMylibContent";
import Card from "@mui/material/Card";
import "./libraries.css";

function MyLibraries() {
  const lib1 = [
    {
      foldername: "folder1",
      subfiles: [
        { filename: "file6", link: "https://www.google.com/", ext: "pdf" },
        { filename: "file7", link: "https://www.google.com/", ext: "" },
      ],
      subfolder: [
        {
          foldername: "folder4",
          subfolder: [
            {
              foldername: "folder8",
              subfolder: [],
              subfiles: [
                {
                  filename: "subfile of folder8",
                  link: "https://www.google.com/",
                  ext: "xls",
                },
              ],
            },
          ],
          subfiles: [
            {
              filename: "file of folder4",
              link: "https://www.google.com/",
              ext: "doc",
            },
          ],
        },
        {
          foldername: "folder5",
          subfolder: [],
          subfiles: [
            {
              filename: "subfile of folder5",
              link: "https://www.google.com/",
              ext: "",
            },
          ],
        },
      ],
    },

    {
      foldername: "folder2",
      subfolder: [
        {
          foldername: "folder6",
          subfolder: [
            { foldername: "folder9", subfolder: [], subfiles: [] },
            { foldername: "folder10", subfolder: [], subfiles: [] },
          ],
          subfiles: [
            { filename: "file13", link: "https://www.google.com/", ext: "" },
            { filename: "file14", link: "https://www.google.com/", ext: "" },
          ],
        },
        { foldername: "folder7", subfolder: [], subfiles: [] },
        { filename: "file8", link: "https://www.google.com/", ext: "" },
        { filename: "file9", link: "https://www.google.com/", ext: "" },
      ],
      subfiles: [],
    },

    { filename: "file1", link: "https://www.google.com/", ext: "" },
    { filename: "file2", link: "https://www.google.com/", ext: "jpg" },
    { filename: "file3", link: "https://www.google.com/", ext: "rar" },
    { filename: "file4", link: "https://www.google.com/", ext: "xlsx" },
    { filename: "file5", link: "https://www.google.com/", ext: "txt" },
    { filename: "file6", link: "https://www.google.com/", ext: "doc" },
    { filename: "file7", link: "https://www.google.com/", ext: "ppt" },
    { filename: "file8", link: "https://www.google.com/", ext: "" },
  ];
  const cardStyle = {
    mx: "5%",
    marginTop: 5,
    width: "90%",
    border: 1,
    borderRadius: 6,
    minHeight: 220,
    boxShadow: "3px 3px 6px 3px rgba(77, 100, 141, 0.4)",
  };

  return (
    <>
      <div className="libMain">
        <Card sx={cardStyle}>
          <h4 style={{ margin: 14, marginLeft: 20 }}>First Library</h4>
          <div className="libComponents">
            <ShowMylibContent content={lib1} />
          </div>
        </Card>

        {/* second card */}
        <Card
          sx={cardStyle}
        >
          <h4 style={{ margin: 14, marginLeft: 20 }}>Second Library</h4>

          <div className="libComponents">
            <ShowMylibContent content={lib1} />
          </div>
        </Card>
      </div>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        spacing={2}
        sx={{ margin: 4, paddingBottom: 4 }}
      >
        <Pagination count={10} color="primary" />
      </Stack>
    </>
  );
}

export default MyLibraries;
