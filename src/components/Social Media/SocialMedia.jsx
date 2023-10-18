import React from "react";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <>
      <div className="flex justify-center my-10">
        <h1 className="sm:underline text-center text-xl md:text-2xl lg:text-3xl">
          Other Social Media's Online Video Downloader
        </h1>
      </div>
      <div className="flex justify-center my-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 ">
          <Link
            to="/facebook"
            className="flex space-x-2 border border-slate-900 p-4 rounded-3xl shadow-sm mx-2 my-2 hover:bg-slate-100"
          >
            <i className="fa fa-facebook text-[#3b5998] mt-0.5"></i>
            <h1 className="">Facebook Video Download</h1>
          </Link>
          <Link
            to="/instagram"
            className="flex space-x-2 border border-slate-900 p-4 rounded-3xl shadow-sm mx-2 my-2 hover:bg-slate-100"
          >
            <i className="fa fa-instagram text-[#962fbf] mt-0.5"></i>
            <h1 className="">Instagram Reels, Posts and Stories Download</h1>
          </Link>
          <Link
            to="/youtube"
            className="flex space-x-2 border border-slate-900 p-4 rounded-3xl shadow-sm mx-2 my-2 hover:bg-slate-100"
          >
            <i className="fa fa-youtube text-[#CD201F] mt-0.5"></i>
            <h1 className="">Youtube Video Download in Mp3 and Videos</h1>
          </Link>
          <Link
            to="/snapchat"
            className="flex space-x-2 border border-slate-900  p-4 rounded-3xl shadow-sm mx-2 my-2 hover:bg-slate-100"
          >
            <i className="fa fa-snapchat text-[#FFFC00] mt-0.5"></i>
            <h1 className="">Snapchat Spotlight Download</h1>
          </Link>
          <Link
            to="/linkedin"
            className="flex space-x-2 border border-slate-900  p-4 rounded-3xl shadow-sm mx-2 my-2 hover:bg-slate-100"
          >
            <i className="fa fa-linkedin text-[#0072b1] mt-0.5"></i>
            <h1 className="">Linkedin Video Download</h1>
          </Link>
          <Link
            to="/twitter"
            className="flex space-x-2 border border-slate-900 p-4 rounded-3xl shadow-sm mx-2 my-2 hover:bg-slate-100"
          >
            <i className="fa fa-twitter text-[#00acee] mt-0.5"></i>
            <h1 className="">Twitter Video Download</h1>
          </Link>
          <Link
            to="/pinterest"
            className="flex space-x-2 border border-slate-900 p-4 rounded-3xl shadow-sm mx-2 my-2 hover:bg-slate-100"
          >
            <i className="fa fa-pinterest text-[#c8232c] mt-0.5"></i>
            <h1 className="">Pinterest Video Download</h1>
          </Link>
          <Link
            to="/spotify"
            className="flex space-x-2 border border-slate-900 p-4 rounded-3xl shadow-sm mx-2 my-2 hover:bg-slate-100"
          >
            <i className="fa fa-spotify text-[#1ED760] mt-0.5"></i>
            <h1 className="">Spotify Song Download</h1>
          </Link>
          <Link
            to="/vimeo"
            className="flex space-x-2 border border-slate-900  p-4 rounded-3xl shadow-sm mx-2 my-2 hover:bg-slate-100"
          >
            <i className="fa fa-vimeo text-[#86c9ef] mt-0.5"></i>
            <h1 className="">Vimeo Video Download</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
