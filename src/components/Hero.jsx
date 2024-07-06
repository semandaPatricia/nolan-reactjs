import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 ">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full border-b-orange-600">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1683309732993-f512f701712e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="lg:text-7xl font-bold sm:text-4xl text-white">
              Healthy & Organic Snacks
            </h2>

            <p className="mt-4 ">
            The Organic Crave offers a new generation of snacks made from organic, nutritious and delicious ingredients.
            </p>

            <a href="/products">
              <button
                className="px-6 py-2 m-10 font-medium uppercase w-fit transition-all shadow-[4px_4px_0px_black]   hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                style={{ backgroundColor: "#ff0 ",borderRadius:"100px" ,borderWidth:'2px' , borderStyle:'solid', borderColor:'black' ,  padding:'20px 40px 16px',textShadow:'4px 4px 0px 0px' ,lineHeight:'19px'}}
              >
                Order Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
