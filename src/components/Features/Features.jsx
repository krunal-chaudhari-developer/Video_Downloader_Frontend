import React, { useEffect, useState } from "react";
import {
  facebookSlides,
  instaSlides,
  linkedinSlides,
  pinterestSlides,
  snapchatSlides,
  soundcloudSlides,
  twitterSlides,
  vimeoSlides,
  youtubeSlides,
} from "../data";
import "./Features.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Features = ({ name }) => {
  const [data, setData] = useState([]);

  const [curSlide, setCurSlide] = useState(0);
  const maxSlide = data.length;

  // Next slide
  const nextSlide = () => {
    setCurSlide(curSlide === maxSlide - 1 ? 0 : curSlide + 1);
  };

  const prevSlide = () => {
    setCurSlide(curSlide === 0 ? maxSlide - 1 : curSlide - 1);
  };

  useEffect(() => {
    switch (name) {
      case "facebook":
        setData(facebookSlides);
        break;

      case "instagram":
        setData(instaSlides);
        break;

      case "youtube":
        setData(youtubeSlides);
        break;

      case "snapchat":
        setData(snapchatSlides);
        break;

      case "linkedin":
        setData(linkedinSlides);
        break;

      case "twitter":
        setData(twitterSlides);
        break;

      case "pinterest":
        setData(pinterestSlides);
        break;

      case "vimeo":
        setData(vimeoSlides);
        break;

      case "spotify":
        setData(soundcloudSlides);
        break;

      default:
        setData([]);
    }
  }, [name]);

  return (
    <div>
      <div className="lg:w-[80rem] h-[35rem] lg:h-[50rem] my-0 mx-auto relative overflow-hidden">
        <h4 className="text-center text-3xl pt-16 underline capitalize">
          Features of {name} Video Downloader
        </h4>

        <div className="">
          {data.map((slide, i) => (
            <div
              key={i}
              className={`absolute top-48 transform transition-transform duration-300 px-3 lg:px-0`}
              style={{ transform: `translateX(${100 * (i - curSlide)}%)` }}
            >
              <h2 className="lg:pl-[150px] text-xl lg:text-2xl text-gray-700 font-semibold">
                {slide.title}
              </h2>
              <p className="lg:w-10/12 text-gray-500 lg:text-lg lg:ml-[150px] pb-3 ">
                {slide.description}
              </p>
              <img
                className={`${slide.className} hidden lg:block mx-52`}
                src={slide.images}
                alt={slide.title}
              />
            </div>
          ))}
        </div>

        <div className="absolute flex justify-center  bottom-[7%] lg:left-[40%]">
          <button
            className="-mt-4 mx-3 outline-none rounded-full"
            onClick={prevSlide}
          >
            <BsArrowLeft size={35} />
          </button>
          {data.map((_, id) => (
            <div
              key={id}
              className={`${
                curSlide === id ? "bg-gray-600" : "bg-gray-300"
              } border w-3 h-3 mx-2 rounded-full `}
            />
          ))}
          <button
            className="-mt-3 mx-3 outline-none rounded-full"
            onClick={nextSlide}
          >
            <BsArrowRight size={35} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
