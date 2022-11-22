import React from "react";
import Folder from "./folder";
import File from "./file";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import "./LibrarySwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper";
import ShowContent from "./showContent";
import "../libraries.css";
import Button from "@mui/material/Button";
import Grow from "@mui/material/Grow";
import Collapse from "@mui/material/Collapse";

function showContent({ content }) {
  const [flag, setFlag] = useState(false);
  const [subcontent, setSubContent] = useState([]);
  const [openFolder, setOpenFolder] = React.useState(false);

  return (
    <>
      <div className="libswiper">
        <Swiper
          breakpoints={{
            400: {
              slidesPerView: "2",
              slidesPerGroup: "2",
            },
            600: {
              slidesPerView: "auto",
              slidesPerGroup: "3",
            },
            950: {
              slidesPerView: "auto",
              slidesPerGroup: "5",
            },
            1024: {
              slidesPerView: "auto",
              slidesPerGroup: "6",
            },
          }}
          mousewheel={false}
          navigation={true}
          modules={[Mousewheel, Navigation]}
        >
          {content.map((folder) => {
            return (
              <>
                <div className="showFiles">
                  {folder.foldername && (
                    <>
                      <SwiperSlide>
                        <Grow in={true} style={{ transformOrigin: "0 0 0" }}>
                          <Button
                            sx={{
                              minWidth: 130,
                              LibraryminHeight: 130,
                            }}
                            onClick={() => {
                              {
                                setSubContent([
                                  ...folder.subfolder,
                                  ...folder.subfiles,
                                ]);
                                {
                                  (folder.subfolder || folder.subfiles) && !flag
                                    ? setFlag(true) ||
                                      setOpenFolder(folder.foldername)
                                    : setFlag(false) || setOpenFolder(false);
                                }
                              }
                            }}
                          >
                            <Folder
                              name={folder.foldername}
                              openFolder={openFolder}
                            />
                          </Button>
                        </Grow>
                      </SwiperSlide>
                    </>
                  )}
                  {folder.filename && (
                    <>
                      <SwiperSlide>
                        <Grow in={true} style={{ transformOrigin: "0 0 0" }}>
                          <Button>
                            <File
                              name={folder.filename}
                              link={folder.link}
                              ext={folder.ext}
                            />
                          </Button>
                        </Grow>
                      </SwiperSlide>
                    </>
                  )}
                </div>
              </>
            );
          })}
        </Swiper>
      </div>
      <Collapse in={flag}>
        {flag && (
          <>
            <Grow
              in={true}
              style={{ transformOrigin: "0 0 0" }}
              {...(true ? { timeout: 250 } : {})}
            >
              <div className="libComponents">
                <ShowContent content={subcontent} />
              </div>
            </Grow>
          </>
        )}
      </Collapse>

      {flag && !subcontent.length && (
        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...(true ? { timeout: 250 } : {})}
        >
          <Typography sx={{ m: 8, mt: -16, fontSize: 48, fontWeight: "bold" }}>
            No content in the folder
          </Typography>
        </Grow>
      )}
    </>
  );
}

export default showContent;
