import img from "../assets/pana.png";
import tesla from "../assets/tesla.png";
import React from "react";
import img2 from "../assets/about1.png";
import img3 from "../assets/icons/section1.png";
import img4 from "../assets/icons/section2.png";
import img5 from "../assets/icons/section3.png";
// import img6 from "../assets/icons/section4.png";

const LearnMore = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 mx-auto my-8 max-w-screen-2xl ">
        <div className="md:w-11/12 mx-auto flex flex-row max-md:flex-col">
        
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-NeutralDGrey font-semibold mb-4 md:w-4/5">
              How to design your site footer like we did
            </h2>
            <p className="md:w-3/4 text-sm text-NeutralDGrey mb-8">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button className="text-white bg-BrandPrimary rounded-[3px] px-2 py-1">
              Learn More
            </button>
          </div>
          <div className="flex flex-row ">
            {" "}
            <img src={img} alt="img" className="" width={300} height={400} />
          </div>
        </div>
      </div>
      {/* company stat */}

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-1 flex justify-center mx-auto">
        <div className="flex flex-row justify-between gap-8 mx-auto max-md:flex-col">
          <div>
            <img src={tesla} alt="tesla" className="w-[800px] h-[300px] " />
          </div>
          <div className="mt-4 mx-6 pl-2 mx-auto w-full">
            <p className=" text-sm text-NeutralDGrey  mb-8 leading-7 -mt-3">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h2 className="text-BrandPrimary text-xl mt-4 font-semibold mb-2">
                Tim Smith
              </h2>
              <p className="text-NeutralDGrey mx-auto">
                British Dragon Boat Racing Association
              </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
