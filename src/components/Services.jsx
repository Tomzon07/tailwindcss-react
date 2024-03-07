import React from "react";
import img from "../assets/icons/Logo.svg";
import img2 from "../assets/icons/Logo (1).svg";
import img3 from "../assets/icons/Logo (2).svg";
import img4 from "../assets/icons/Logo (3).svg";
import img5 from "../assets/icons/Logo (4).svg";
import img6 from "../assets/icons/Logo (5).svg";
import img7 from "../assets/icons/Logo (6).svg";
import icon from "../assets/icons/Icon.png";
import icon1 from "../assets/icons/Icon1.png";
import icon2 from "../assets/icons/Icon2.png";
import ServiceCard from "./ServiceCard";
import "../App.css";

const Services = () => {
  const service = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: icon,
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: icon1,
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: icon2,
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-3xl  text-NeutralDGrey">Our Clients</h2>
        <p className="text-NeutralDGrey ">
          We have been working with some Fortune 500+ clients
        </p>
        {/* company logos */}
        <div className="flex flex-row justify-between p-4 mt-4  rotating-logos">
          <img src={img} alt="logo" />
          <img src={img2} alt="logo" />
          <img src={img3} alt="logo" />
          <img src={img4} alt="logo" />
          <img src={img5} alt="logo" />
          <img src={img6} alt="logo" />
          <img src={img7} alt="logo" />
        </div>
      </div>
      {/* Service card */}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-3xl  text-NeutralDGrey">
          Manage your entire community in a single system
        </h2>
        <p className="text-NeutralDGrey ">Who is Nextcent suitable for?</p>
      </div>
      {/*  */}
      <ServiceCard service={service} />
    </div>
  );
};

export default Services;
