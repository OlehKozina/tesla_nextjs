"use client";
import React, { useState } from "react";
import Image from "next/image";
import Order from "./Order";

const Rating = () => {
  const [order, setOrder] = useState(false);
  const openOrder = () => setOrder(true);
  const closeOrder = () => setOrder(false);
  return (
    <section id="footer">
      <div className="container">
        <div className="flex">
          <div className="bg-primary-red text-white  md:w-[440px] p-10">
            <div className="footer-left-head_and_body">
              <div className="footer-left__head">
                <h3 className="text-3xl font-semibold leading-10 tracking-normal text-left m-0">
                  The safest car in the world
                </h3>
                <p>
                  The <span className="model-change">Model S</span> achieved the
                  highest safety rating of any vehicle ever tested and set the
                  record for the lowest likelihood of occupant injury in
                  front-seat, side-seat, rear-seat and rollover accidents.
                </p>
              </div>
              <div className="footer-left__body">
                <h3 className="text-3xl font-semibold leading-10 tracking-normal text-left mx-0 mt-20 mb-5">
                  Protection Rating:
                </h3>
                <div className="flex justify-between">
                  <p className="text-base font-bold leading-5 tracking-normal text-left m-1 mr-10 lg:mr-0">
                    Front
                  </p>
                  <div className="flex">
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="text-base font-bold leading-5 tracking-normal text-left m-1 mr-14 lg:mr-0">
                    Side
                  </p>
                  <div className="flex">
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="text-base font-bold leading-5 tracking-normal text-left m-1 mr-8 lg:mr-0">
                    Side{" "}
                    <span className="font-normal text-[11px]">(stand)</span>
                  </p>
                  <div className="flex">
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="text-base font-bold leading-5 tracking-normal text-left m-1 mr-10 lg:mr-0">
                    Driver
                  </p>
                  <div className="flex">
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="text-base font-bold leading-5 tracking-normal text-left m-1">
                    Passenger
                  </p>
                  <div className="flex">
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                    <Image
                      src="/star.png"
                      alt=""
                      width={25}
                      height={23}
                      className="self-center mx-1 my-0"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-left__bottom">
              <div className="flex justify-center items-center mt-5 lg:mt-24 mb-10 mx-0">
                <Image
                  src="/security.png"
                  alt=""
                  width={62}
                  height={74}
                  className="mr-5 w-[24px] h-[30px] lg:w-[52px] lg:h-[74] md:w-[44px] md:h-[54px]"
                />
                <div>
                  <span className="text-[30px] lg:text-4xl font-semibold leading-10 tracking-normal">
                    5 stars
                  </span>
                  <br />
                  of security
                </div>
              </div>
              <div className="items-center flex justify-between">
                <div className="flex flex-grow items-center gap-2">
                  <Image
                    src="/info.png"
                    alt=""
                    width={25}
                    height={25}
                    className="w-3 lg:w-5 h-3 lg:h-5"
                  />
                  <div>
                    <a href="#">Learn more</a>
                  </div>
                </div>

                <button
                  onClick={openOrder}
                  className="text-sm font-bold leading-10 tracking-normal text-center uppercase text-white w-[160px] m-0 border-2 border-white hover:bg-white hover:text-primary-red"
                >
                  Order
                </button>
                {order && <Order onOrderClose={closeOrder} />}
              </div>
            </div>
          </div>
          <div className="hidden md:block md:relative">
            <h3 className="absolute text-[50px] lg:text-[120px] xl:text-[150px] top-[-50px] font-semibold leading-[244px] tracking-normal text-left text-primary-red left-24 opacity-[0.4]">
              Model S
            </h3>
            <Image
              src="/car_frame.png"
              alt=""
              width={1049}
              height={540}
              className="relative top-[200px] left-[-100px] "
            />
            <div className="absolute flex lg:top-[260px] md:left-[20px] md:top-[225px] xl:top-[310px] xl:left-[125px] lg:left-[75px]">
              <Image
                src="/redLine.png"
                alt=""
                width={14}
                height={132}
                className="lg:h-[132px] md:h-[100px] md:w-[10px] sm:h-[80px] sm:w-[8px]"
              />
              <div className="text-base font-semibold leading-4 tracking-normal text-left">
                Front impact protection
              </div>
            </div>
            <div className="absolute flex md:top-[140px] lg:top-[130px] xl:top-[140px] md:left-[145px] lg:left-[260px] xl:left-[360px]">
              <Image
                src="/RedLineShort.png"
                alt=""
                width={14}
                height={132}
                className="lg:h-[132px] md:h-[100px] md:w-[10px] sm:h-[80px] sm:w-[8px]"
              />
              <div className="text-base font-semibold leading-4 tracking-normal text-left">
                Side impact protection
              </div>
            </div>
            <div className="absolute flex md:top-[370px] lg:top-[450px] xl:top-[510px] md:left-[170px] lg:left-[300px] xl:left-[410px]">
              <Image
                src="/RedLineTurned.png"
                alt=""
                width={14}
                height={118}
                className="lg:h-[118px] md:h-[100px] md:w-[10px] sm:h-[80px] sm:w-[8px]"
              />
              <div className="text-base font-semibold leading-4 tracking-normal text-left mt-[100px]">
                Minimal risk of overturning in an accident
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rating;
