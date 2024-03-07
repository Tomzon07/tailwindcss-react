import React from "react";
import PropTypes from "prop-types";
const ServiceCard = ({ service }) => {
  return (
    <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
      {service.map((item) => (
        <div
          key={item.id}
  
          className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md
          shadow cursor-pointer hover:-translate-y-5 hover:border-b-4
           hover:border-BrandPrimary transition-all duration-300 flex 
           items-center justify-center h-full"
        >
          <div className="">
         
            <img src={item.image} alt={item.title} className="bg-[#E8F5E9] h-14 w-14 mx-auto rounded-t1-3xl rounded-br-3xl"/>
            <h2 className="text-2xl font-bold text-NeutralDGrey mb-2 px-2">{item.title}</h2>
            <p className="text-sm text-NeutralDGrey">{item.description}</p>
          </div>
     
        </div>
      ))}
    </div>
  );
};

ServiceCard.propTypes = {
    service: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default ServiceCard;
