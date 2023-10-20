import React from "react";
import Layout from "../Layout/Layout";
import SocialMedia from "../Social Media/SocialMedia";
import { homepageContent, homepageContent1, homepagecontent2 } from "../data";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <Layout>
      <div className="">
        <div className="lg:mx-32  lg:my-10 lg:flex flex-col items-center lg:bg-gradient-to-b from-green-400 to-white p-4 rounded-[60px]">
          <div className="">
            <h1 className="text-2xl lg:text-5xl text-justify font-semibold">
              FREE DOWNLOADER FOR INSTAGRAM, FACEBOOK, YOUTUBE AND SPOTIFY.
            </h1>
          </div>

          <div className="my-4">
            <h1 className="text-xl lg:text-2xl font-light">
              Here is a one-size-fits-all universal social media downloader. You
              can download not only Instagram content, but you can also save
              content from Facebook, Instagram, SoundCloud and Youtube. Keep any
              content from IG, FB and other social platforms you like on your
              device whenever you want.
            </h1>
          </div>
        </div>

        <div className="">
          <SocialMedia />
        </div>

        <div className="">
          <div className="text-xl lg:text-3xl underline">
            <h1 className="text-center">
              Why should use this Online Video Downloader?
            </h1>
          </div>

          <div className="grid md:grid-cols-2 mx-4 my-5">
            {homepageContent.map(
              ({ id, title, className, name, description }) => (
                <div key={id} className="bg-gray-100 rounded-lg m-3 p-3">
                  <Link
                    to={`/${name}`}
                    className="flex justify-between bg-gray-200 rounded-lg px-2 py-1 "
                  >
                    <div className="">
                      <h1 className="text-lg font-semibold">{title}</h1>
                    </div>

                    <div className="my-1">
                      <i className={`${className}`}></i>
                    </div>
                  </Link>

                  <div className="px-2 pt-4 pb-8">
                    <h1 className="">{description}</h1>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 lg:mx-10">
            {homepagecontent2.map((e, id) => (
              <div key={id} className="mx-1 lg:mx-0">
                <img src={e.img} alt={e.title} className="lg:mx-24" />
                <h1 className="text-center text-sm sm:text-base font-light mx-2 lg:mx-5">
                  {e.desc}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <div className="mt-14 ">
            <h1 className="text-xl lg:text-3xl text-center underline">
              WHY DO PEOPLE USE THE BEST DOWNLOADER FOR INSTAGRAM, FACEBOOK AND
              MORE?
            </h1>
          </div>

          <div className="grid grid-cols-2 my-10 mx-2 lg:mx-5">
            {homepageContent1.map((e, id) => (
              <div key={id} className="text-center mx-2 my-3">
                <h1 className="lg:text-xl font-semibold">{e.title}</h1>
                <h1 className="text-sm lg:text-lg font-light my-2 lg:my-0">
                  {e.description}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
