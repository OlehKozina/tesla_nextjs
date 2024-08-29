"use client";
import React, { useState } from "react";
import Image from "next/image";
import Order from "./Order";

const Specs = () => {
  const [order, setOrder] = useState(false);
  const openOrder = () => setOrder(true);
  const closeOrder = () => setOrder(false);
  return (
    <section className="mt-10 text-white mb-[500px] lg:mb-0">
      <div className="container">
        <div
          className="flex bg-no-repeat bg-cover  justify-between flex-col lg:flex-row"
          style={{ backgroundImage: "url('/tesla-cockpit.png')" }}
        >
          <div className="main_left">
            <h2 className="text-6xl font-semibold leading-[85px] text-left text-primary-red m-0 ml-24">
              Model S
            </h2>
          </div>
          <div className="bg-primary-red text-white p-[30px]  md:w-full lg:w-[440px] relative top-[500px] lg:top-0">
            <div className="mb-16">
              <h3 className="text-3xl font-semibold leading-10 tracking-normal text-left m-0">
                The future of driving
              </h3>
              <p>
                <span className="model-change">Model S</span> offers
                best-in-className seating capacity, with room for up to five
                adults and two children. Equipped with a modern 17-inch touch
                screen. Advanced noise engineering creates sound dynamics
                comparable to a recording studio, while the glass roof provides
                a spacious interior for every occupant.
              </p>
            </div>
            <div className="min-h-[200px] flex flex-row flex-wrap gap-10 justify-center lg:flex-col">
              <div className="flex items-center mb-9">
                <Image
                  src="/screen.png"
                  alt="screen"
                  width={36}
                  height={53}
                  className="mr-5 self-center"
                />
                <div className="features__text-box">
                  <h4 className="font-semibold">
                    <span className="text-4xl font-semibold leading-10 tracking-normal">
                      17
                    </span>{" "}
                    inches
                  </h4>
                  <p className="text-[12px] font-normal leading-4 m-0">
                    Large display
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-9">
                <Image
                  src="/wifi.png"
                  alt="wifi"
                  width={44}
                  height={34}
                  className="mr-5 self-center"
                />
                <div className="features__text-box">
                  <h4 className="m-0 font-semibold">
                    Over-the-air software update
                  </h4>
                  <p className="text-[12px] font-normal leading-4 m-0">
                    Increased functionality
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-9">
                <Image
                  src="/bag.png"
                  alt="battery"
                  width={36}
                  height={52}
                  className="mr-5 self-center"
                />
                <div className="features__text-box">
                  <h4 className="m-0 font-semibold">
                    <span className="text-4xl font-semibold leading-10 tracking-normal">
                      894
                    </span>{" "}
                    litres
                  </h4>
                  <p className="text-[12px] font-normal leading-4 m-0">
                    Cargo space volume
                  </p>
                </div>
              </div>
            </div>
            <div className="flex mt-10 lg:mt-[200px] justify-center lg:justify-start">
              <div className="flex items-center mr-5">
                <Image
                  src="/info.png"
                  alt="info"
                  width={25}
                  height={25}
                  className="mr-2"
                />
                <div>
                  <a href="#">Learn more</a>
                </div>
              </div>
              <button
                className="text-sm font-bold leading-10 tracking-normal text-center uppercase text-white ml-8 w-[160px] m-0 border-2 border-white hover:bg-white hover:text-primary-red"
                onClick={openOrder}
              >
                Order
              </button>
              {order && <Order onOrderClose={closeOrder} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specs;
