import axios from "axios";
import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import "../../../Spinner.css";
import Features from "../../Features/Features";
import SocialMedia from "../../Social Media/SocialMedia";

const Facebook = () => {
  const [data, setData] = useState([]);
  const [quality, setQuality] = useState("Low");
  const [download, setDownload] = useState("");
  const [action, setAction] = useState({
    open: false,
    downloadLink: "",
    isLoading: false,
  });

  const handlePaste = () => {
    navigator.clipboard.readText().then((text) => {
      setAction({ downloadLink: text });
    });
  };

  const handleClick = (e) => {
    setAction({ isLoading: true });
    axios
      .get(
        `https://facebook-reel-and-video-downloader.p.rapidapi.com/app/main.php?url=${action.downloadLink}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "0eab5d4b20mshb5a8a678eb89507p162cdajsncd7236cf8d56",
            "X-RapidAPI-Host":
              "facebook-reel-and-video-downloader.p.rapidapi.com",
          },
        }
      )

      .then((res) => {
        switch (quality) {
          case "Low":
            setDownload(res.data.links["Download Low Quality"]);
            break;

          case "High":
            setDownload(res.data.links["Download High Quality"]);
            break;

          default:
            setDownload("");
            break;
        }
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
              Facebook Video Downloader
            </h1>
          </div>

          <div className="flex justify-center">
            <h1 className="navbar text-center lg:text-lg">
              Download Reels and Stories Online
            </h1>
          </div>

          <div className="lg:mx-20 ">
            <div className="flex justify-between bg-white rounded-lg my-10 mx-2 ">
              <div className="p-2">
                <input
                  value={action.downloadLink}
                  placeholder="Paste Facebook URL"
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
                <div className="">
                  <select
                    onChange={(e) => setQuality(e.target.value)}
                    value={quality}
                    className="outline-none hidden md:block mx-2 my-1.5 bg-transparent"
                  >
                    <option value="Low" className="">
                      Low Quality
                    </option>
                    <option value="High" className="">
                      High Quality
                    </option>
                  </select>
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
          </div>
          <div className="md:hidden block  ">
            <div className="flex justify-center">
              <div className="">
                <select
                  onChange={(e) => setQuality(e.target.value)}
                  value={quality}
                  className="outline-none mx-2 my-1.5 bg-transparent"
                >
                  <option value="Low" className="">
                    Low Quality
                  </option>
                  <option value="High" className="">
                    High Quality
                  </option>
                </select>
              </div>
              <div className="bg-green-600 px-10 rounded-xl">
                <button
                  onClick={handleClick}
                  className="navbar outline-none text-white"
                >
                  Download
                </button>
              </div>
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
            {data.success ? (
              <a
                href={download}
                className="hover:bg-black hover:text-white rounded-xl px-2 py-0.5"
              >
                <i className="fa fa-download mx-2"></i>
                Click here to download
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className="">
        <SocialMedia />
      </div>

      <div className="">
        <Features name="facebook" />
      </div>
    </Layout>
  );
};

export default Facebook;
