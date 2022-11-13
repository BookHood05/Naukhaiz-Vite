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
                      </SwiperSlide>
                    </>
                  )}
                  {folder.filename && (
                    <>
                      <SwiperSlide>
                        <File
                          name={folder.filename}
                          link={folder.link}
                          ext={folder.ext}
                        />
                      </SwiperSlide>
                    </>
                  )}
                </div>
              </>
            );
          })}
        </Swiper>
      </div>
      {flag && (
        <>
          <div className="libComponents">
            <ShowContent content={subcontent} />
          </div>
        </>
      )}
      {flag && !subcontent.length && (
        <Typography sx={{ m: 8, mt: -16, fontSize: 48, fontWeight: "bold" }}>
          No content in the folder
        </Typography>
      )}
    </>
  );
}

export default showContent;
