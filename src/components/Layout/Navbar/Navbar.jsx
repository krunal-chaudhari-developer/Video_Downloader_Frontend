import React, { useEffect, useRef, useState } from "react";
import "../../../App.css";
import { PiFolderSimpleFill } from "react-icons/pi";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleOutSideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutSideClick);

    return () => {
      document.addEventListener("mousedown", handleOutSideClick);
    };
  }, []);

  return (
    <>
      <div className="flex space-x-16 bg-slate-50 px-3 lg:px-5 lg:py-2 shadow-lg">
        <div className="">
          <h1
            onClick={() => navigate("/")}
            className="navbar font-bold text-2xl lg:text-4xl text-green-500"
          >
            Inlifa
          </h1>
        </div>

        <div ref={menuRef} className="py-2.5 relative">
          <button onClick={() => setOpen(!open)} className="flex space-x-2 ">
            <PiFolderSimpleFill size={22} className="-mt-0.5 lg:mt-0.5" />
            <h1 className="font-semibold text-sm lg:text-lg">Downloaders</h1>
            <AiOutlineCaretDown className="mt-0.5 lg:mt-1.5 " />
          </button>
          {open && (
            <div className="border rounded-3xl w-fit absolute bg-white">
              {downloaders.map((e, id) => (
                <div
                  className={`hover:bg-slate-200 ${
                    id + 1 === 1
                      ? "rounded-t-3xl "
                      : id + 1 === 9
                      ? "rounded-b-3xl "
                      : ""
                  }`}
                  key={id}
                >
                  <button
                    onClick={() => navigate(`/${e.name}`)}
                    className="px-4 py-1.5 flex space-x-4"
                  >
                    <i className={`fa fa-${e.name} mt-1 text-[${e.color}]`}></i>
                    <h1 className="font-normal mt-0.5 capitalize">{e.name}</h1>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

export const downloaders = [
  {
    name: "facebook",
    color: "#3b5998",
  },
  {
    name: "instagram",
    color: "#962fbf",
  },
  {
    name: "youtube",
    color: "#CD201F",
  },
  {
    name: "snapchat",
    color: "#FFFC00",
  },
  {
    name: "linkedin",
    color: "#0072b1 ",
  },
  {
    name: "twitter",
    color: "#00acee",
  },
  {
    name: "pinterest",
    color: "#c8232c",
  },
  {
    name: "spotify",
    color: "#1ED760",
  },
  {
    name: "vimeo",
    color: "#86c9ef",
  },
];
