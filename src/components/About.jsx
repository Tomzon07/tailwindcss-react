import React from "react";
import img2 from "../assets/about1.png";
import img3 from "../assets/icons/section1.png";
import img4 from "../assets/icons/section2.png";
import img5 from "../assets/icons/section3.png";
// import img6 from "../assets/icons/section4.png";

const About = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 mx-auto my-8 max-w-screen-2xl">
        <div className="md:w-11/12 mx-auto flex flex-row max-md:flex-col">
          <div className="flex flex-row ">
            {" "}
            <img src={img2} alt="img" className="" width={300} height={400} />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-NeutralDGrey font-semibold mb-4 md:w-4/5">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="md:w-3/4 text-sm text-NeutralDGrey mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="text-white bg-BrandPrimary rounded-[3px] px-2 py-1">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* company stat */}

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 ">
        <div>
          <div className="md:w-1/2">
            <h2 className=" text-4xl text-NeutralDGrey font-semibold mb-4 md:w-2/3">
              Helping a local
              <br />
              <span className="text-BrandPrimary">
                business reinvent itself
              </span>
            </h2>
            <p className="text-sm text-NeutralDGrey mb-8">
              We reached here with our hard work and dedication
            </p>
          </div>

          {/* stats */}
          <div className="md:w-1/2 mx-auto flex flex-col sm:flex-row sm:items-center justify-around gap-[6rem] max-md:gap-[1rem] ">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={img3} alt="img" />
                <div>
                  <h4 className="text-2xl text-NeutralDGrey font-semibold">
                    24230
                  </h4>
                  <p>Payments</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={img4} alt="img" />
                <div>
                  <h4 className="text-2xl text-NeutralDGrey font-semibold">
                    Users
                  </h4>
                  <p>Members</p>
                </div>
              </div>
            </div>{" "}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={img5} alt="img" />
                <div>
                  <h4 className="text-2xl text-NeutralDGrey font-semibold">
                    Visitors
                  </h4>
                  <p>Members</p>
                </div>
              </div>
            </div>{" "}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={img3} alt="img" />
                <div>
                  <h4 className="text-2xl text-NeutralDGrey font-semibold">
                    11222212
                  </h4>
                  <p>Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
