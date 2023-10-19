import axios from "axios";
import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import "../../../Spinner.css";
import Features from "../../Features/Features";
import SocialMedia from "../../Social Media/SocialMedia";

const Youtube = () => {
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

  const handleDownloadClick = () => {
    if (!action.downloadLink) {
      alert("Please enter your Youtube Link");
      return;
    }
    const youtubeId = getYoutubeId(action.downloadLink);
    if (!youtubeId) {
      alert("Please enter your Youtube Link");
      return;
    }
    setAction({ isLoading: true });
    getDownloadLink(youtubeId);
  };

  const getYoutubeId = (link) => {
    const regex =
      /(youtu.be\/|watch\?v=|\/youtube.com\/shorts\/)([a-zA-Z0-9_-]+)/;
    const match = link.match(regex);
    return match ? match[2] : null;
  };

  const getDownloadLink = (youtubeId) => {
    axios
      .get(
        `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${youtubeId}`,
        {
          headers: {
            "content-type": "application/octet-stream",
            "X-RapidAPI-Key":
              "0eab5d4b20mshb5a8a678eb89507p162cdajsncd7236cf8d56",
            "X-RapidAPI-Host":
              "ytstream-download-youtube-videos.p.rapidapi.com",
          },
        }
      )
      .then((data) => {
        switch (quality) {
          case "low":
            setDownload(data.data.adaptiveFormats[25].url);
            break;
          case "medium":
            setDownload(data.data.adaptiveFormats[20].url);
            break;
          case "high":
            setDownload(data.data.adaptiveFormats[21].url);
            break;
          default:
            setDownload("");
            break;
        }
        setAction({ open: true, isLoading: false });
      })
      .catch((error) => {
        setAction({ isLoading: false });
      });
  };

  return (
    <Layout>
      <div className="bg-green-100">
        <div className="py-14">
          <div className="flex justify-center">
            <h1 className="navbar text-center text-3xl lg:text-4xl">
              YouTube Video Downloader
            </h1>
          </div>

          <div className="flex justify-center">
            <h1 className="navbar text-center lg:text-lg">
              Download Youtube Videos in MP3 online
            </h1>
          </div>

          <div className="lg:mx-20 ">
            <div className="flex justify-between bg-white rounded-lg my-10 mx-2 ">
              <div className="p-2">
                <input
                  value={action.downloadLink}
                  placeholder="Paste YouTube URL"
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
                    className="outline-none mx-2 my-1.5 bg-transparent hidden md:block"
                  >
                    <option value="low">Low Quality</option>
                    <option value="medium">Medium Quality</option>
                    <option value="high">High Quality</option>
                  </select>
                </div>
                <div className="hidden md:block bg-black px-3 rounded-xl">
                  <button
                    onClick={handleDownloadClick}
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
                  <option value="low">Low Quality</option>
                  <option value="medium">Medium Quality</option>
                  <option value="high">High Quality</option>
                </select>
              </div>
              <div className="bg-green-600 px-10 rounded-xl">
                <button
                  onClick={handleDownloadClick}
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
            {action.open && (
              <a
                href={download}
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

      <div className="">
        <SocialMedia />
      </div>

      <div className="">
        <Features name="youtube" />
      </div>
    </Layout>
  );
};

export default Youtube;
