import axios from "axios";
import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import "../../../Spinner.css";

const Instagram = () => {
  const [data, setData] = useState([]);
  const [action, setAction] = useState({
    open: false,
    downloadLink: "",
    isLoading: false,
  });

  const handlePaste = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setAction({ downloadLink: clipboardText });
    });
  };

  const handleClick = (e) => {
    setAction({ isLoading: true });
    axios
      .get(
        "https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index",
        {
          params: {
            url: action.downloadLink,
          },
          headers: {
            "X-RapidAPI-Key":
              "0eab5d4b20mshb5a8a678eb89507p162cdajsncd7236cf8d56",
            "X-RapidAPI-Host":
              "instagram-downloader-download-instagram-videos-stories.p.rapidapi.com",
          },
        }
      )
      .then((res) => {
        setData(res.data);
        setAction({ open: true, isLoading: false });
      });
  };

  return (
    <Layout>
      <div className="bg-green-100">
        <div className="py-14">
          <div className="flex justify-center">
            <h1 className="navbar text-center text-3xl lg:text-4xl">
              Instagram Video Downloader
            </h1>
          </div>

          <div className="flex justify-center">
            <h1 className="navbar text-center lg:text-lg">
              Download Stories, Reels and Posts Online
            </h1>
          </div>

          <div className="flex justify-between bg-white rounded-lg my-10 mx-2 lg:mx-20 ">
            <div className="p-2">
              <input
                value={action.downloadLink}
                placeholder="Paste Instagram URL"
                onChange={(e) =>
                  setAction({ downloadLink: e.target.value, open: false })
                }
                type="text"
                className="xl:w-[800px] outline-none"
              />
            </div>

            <div className="flex">
              <div className="my-1 mx-2 lg:mx-4">
                <button onClick={handlePaste} className="">
                  <i className="fa fa-paste bg-green-500 text-white rounded-full p-2"></i>
                </button>
              </div>

              <div className="hidden md:block bg-black px-3 rounded-xl">
                <button
                  onClick={handleClick}
                  className="navbar outline-none text-white"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
          <div className="md:hidden block bg-green-600 mx-10 rounded-xl">
            <div className="flex justify-center">
              <button
                onClick={handleClick}
                className="navbar outline-none text-white"
              >
                Download
              </button>
            </div>
          </div>
          {action.isLoading ? (
            <div className="spinner-container flex justify-center">
              <div className="loading-spinner"></div>
            </div>
          ) : (
            ""
          )}

          <div className="flex justify-center">
            {action.open && (
              <a
                href={data.media}
                target="_blank"
                rel="noreferrer"
                className="hover:bg-black hover:text-white rounded-xl px-2 py-0.5"
              >
                <i className="fa fa-download mx-2"></i>
                Click here to download
              </a>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Instagram;
