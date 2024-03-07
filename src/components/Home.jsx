import React from "react";
import { Carousel } from "flowbite-react";
import userImg from "../assets/banner.png";
import userImg2 from "../assets/img2.png";
const Home = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div
            className="my-28 md:my-8 py-12 flex flex-col   
            md:flex-row-reverse items-center justify-between gap-12
        "
          >
            <div>
              <img src={userImg} alt="img" />
            </div>
            {/* hero texts */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold text-NeutralDGrey mb:4 md:w-w-3/4 leading-snug">
                Lessons and insights <br />
                <span className="text-BrandPrimary leading-snug">
                  from 8 years
                </span>
              </h1>
              <p className="text-NeutralDGrey text-base mb-8">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div
            className="my-28 md:my-8 py-12 flex flex-col   
            md:flex-row-reverse items-center justify-between gap-12
        "
          >
            <div>
              <img
                src={userImg2}
                alt="img"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)" }}
              />
            </div>
            {/* hero texts */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold  text-NeutralDGrey mb:4 md:w-w-3/4 leading-snug">
                Lets Lessons and Earn <br />
                <span className="text-BrandPrimary leading-snug">
                  in 4 months
                </span>
              </h1>
              <p className="text-NeutralDGrey text-base mb-8">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
