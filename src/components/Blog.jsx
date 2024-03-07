import React from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: blog1,
    },
    {
      id: 2,
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      image: blog2,
    },
    {
      id: 3,
      title:
        "Revamping the Membership Model with Triathlon Australia and england",
      image: blog3,
    },
  ];
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-3xl text-NeutralDGrey font-semibold mb-4 text-center">
          Caring is the new marketing
        </h2>
        <p className="text-sm text-NeutralDGrey mb-8 md:3/4 mx-auto">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See whos joining the community,
          read about how our community are increasing their membership income
          and lots more.
        </p>
      </div>
      {/* <div className="flex w-[80%] justify-between mx-auto"> */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {blogs.map((blog) => (
          <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img src={blog.image} alt="img" />
            {/* <div
              className="text-center  px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto
               absolute left-0 right-0 bottom-[-9rem] max-md:flex-col 
                "
            >
              {blog.title}
              <br />
              <a className="text-BrandPrimary font-semibold text-sm">
                Readmore
              </a>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
