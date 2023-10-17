import React from "react";
import { downloaders } from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="border-t-2 border-b-2 bg-gray-100 ">
        <div className="xl:flex p-3">
          <div className="mx-3">
            <div className="flex md:block justify-center">
              <h1 className="navbar font-bold text-3xl">Inlifa</h1>
            </div>

            <div className="">
              <p className="lg:w-5/12 text-justify">
                You can download the video from any platform. You can paste the
                video link and click on download to download the video online.
              </p>
            </div>
          </div>

          <div className="">
            <div className="mx-3 mt-10 mb-3 lg:my-1 flex justify-center">
              <h1 className="font-bold text-xl">Downloaders</h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3">
              {downloaders.map((e, id) => (
                <div className={`hover:bg-slate-200 `} key={id}>
                  <button
                    onClick={() => navigate(`/${e.name}`)}
                    className="px-3 py-1.5 flex space-x-3"
                  >
                    <i
                      className={`fa fa-${e.name} text-lg text-[${e.color}]`}
                    ></i>
                    <h1 className="font-normal mt-0.5 capitalize">{e.name}</h1>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t p-3 flex justify-center">
          <h1 className="flex">
            <AiOutlineCopyrightCircle className="mt-0.5 mx-2" />
            <span className="font-semibold tracking-wider">
              2023, all copyrights reserved
            </span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
