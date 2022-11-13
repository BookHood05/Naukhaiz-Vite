import React from "react";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import ShowLibInfo from "./components/showLibInfo";
import ShowContent from "./components/showContent";
import Card from "@mui/material/Card";
import "./libraries.css";
import LibSearch from "./components/LibSearch";

function Libraries() {
  const libraries = [
    {
      name: "First Library",
      disc: "This is the description of Libraryone. This is the description of Libraryone. This is the description of Libraryone. This is the description of Libraryone. This is the description of Libraryone",
      owner: "Naukhaiz Anjum",
      tags: [{ tag: "First Tag" }, { tag: "tag2" }, { tag: "tag3" }],

      subcontent: [
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
                {
                  filename: "file13",
                  link: "https://www.google.com/",
                  ext: "",
                },
                {
                  filename: "file14",
                  link: "https://www.google.com/",
                  ext: "",
                },
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
      ],
    },
    {
      name: "Second Library",
      disc: "This is the description of Library two. This is the description of Library two. This is the description of Library two. This is the description of Library two. This is the description of Library two",
      owner: "Naukhaiz Anjum",
      tags: [{ tag: "First Tag" }, { tag: "tag2" }, { tag: "tag3" }],

      subcontent: [
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
                {
                  filename: "file13",
                  link: "https://www.google.com/",
                  ext: "",
                },
                {
                  filename: "file14",
                  link: "https://www.google.com/",
                  ext: "",
                },
              ],
            },
            { foldername: "folder7", subfolder: [], subfiles: [] },
            { filename: "file8", link: "https://www.google.com/", ext: "" },
            { filename: "file9", link: "https://www.google.com/", ext: "" },
          ],
          subfiles: [],
        },

        { filename: "task1", link: "https://www.google.com/", ext: "" },
        { filename: "file1", link: "https://www.google.com/", ext: "xlsx" },
        { filename: "task2", link: "https://www.google.com/", ext: "jpg" },
        { filename: "file3", link: "https://www.google.com/", ext: "doc" },
        { filename: "file4", link: "https://www.google.com/", ext: "rar" },
        { filename: "file5", link: "https://www.google.com/", ext: "txt" },
        { filename: "file6", link: "https://www.google.com/", ext: "ppt" },
        { filename: "file7", link: "https://www.google.com/", ext: "" },
      ],
    },
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
      <style>
        {`.MuiPagination-root button {background-color: #d0e1f9; color:white} 
          .MuiPagination-root button:hover{background-color: #283655;} 
          .MuiPagination-root .Mui-selected{background-color: #4d648d !important}`}
      </style>
      <LibSearch />
      <div className="libMain">
        {libraries.map((lib) => {
          return (
            <Card sx={cardStyle}>
              <ShowLibInfo libinfo={lib} />
              <h4 style={{ margin: 14, marginLeft: 20 }}>{lib.name}</h4>

              <div className="libComponents">
                <ShowContent content={lib.subcontent} />
              </div>
            </Card>
          );
        })}
      </div>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Pagination count={5} sx={{ mt: "30px", mb: "30px" }} />
      </Box>
    </>
  );
}

export default Libraries;
