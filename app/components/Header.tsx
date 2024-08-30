"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import MobileButton from "./MobileButton";
import OrderButton from "./OrderButton";
import { getTeslas } from "@/sanity/sanity-utils";

interface Tesla {
  _id: string;
  name: string;
  image: string; // Adjust fields based on your actual Tesla object structure
}

export default function Header() {
  const [teslas, setTeslas] = useState<Tesla[]>([]);
  const [selectedTesla, setSelectedTesla] = useState<Tesla | null>(null);

  useEffect(() => {
    const fetchTeslas = async () => {
      const teslaData = await getTeslas();
      setTeslas(teslaData);
      setSelectedTesla(teslaData[0] || null); // Initialize with the first Tesla, or null if none
    };

    fetchTeslas();
  }, []);

  return (
    <div>
      <nav>
        <a href="#">
          <Image
            src="/tesla-wordmark-red.png"
            width={167}
            height={51}
            alt="tesla_wordmark"
          />
        </a>
        <ul className="hidden lg:flex lg:p-0 lg:justify-between">
          {teslas.map((tesla) => (
            <li key={tesla._id}>
              <a
                href="#"
                onClick={() => setSelectedTesla(tesla)}
                className="mr-10 font-semibold text-lg pb-[5px] hover:text-primary-red hover:border-b hover:border-primary-red"
              >
                {tesla.name}
              </a>
            </li>
          ))}
        </ul>
        <ul className="hidden lg:flex lg:p-0 lg:justify-between">
          <li>
            <a
              href="#"
              className="mr-8 font-semibold text-lg pb-[5px] hover:text-primary-red hover:border-b hover:border-primary-red"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-8 font-semibold text-lg pb-[5px] hover:text-primary-red hover:border-b hover:border-primary-red"
            >
              Sign up
            </a>
          </li>
        </ul>
        <div className="bg-transparent cursor-pointer border-none lg:hidden">
          <MobileButton />
        </div>
      </nav>

      <div className="bg-no-repeat bg-cover sm:min-h-[200px] md:min-h-[435px] lg:min-h-[594px] text-center mb-6">
        <h1 className="relative top-12 text-6xl lg:text-8xl font-semibold md:leading-[110px] lg:leading-[110px] m-0 p-0 tracking-normal">
          {selectedTesla ? selectedTesla.name : "Model S"}
        </h1>
        <p className="relative top-12 text-base font-medium leading-5 m-0 p-0">
          Welcome to the future
        </p>
        {selectedTesla && (
          <Image
            src={selectedTesla.image}
            alt={selectedTesla.name}
            width={1440}
            height={726}
            className="relative z-[-1]"
          />
        )}
      </div>

      <div className="flex justify-center flex-wrap  md:mb-14 lg:flex-nowrap lg:mb-10">
        <div className="flex items-center mr-5 lg:mr-20">
          <Image
            src="/speed.png"
            alt="speed"
            width={46}
            height={36}
            className="relative mr-4"
          />
          <div className="info_block_text">
            <div className="text-2xl font-semibold lg:text-4xl leading-[43px]">
              2,7 <span className="text-lg font-semibold leading-6">sec</span>
            </div>
            <div className="text-sm lg:text-base">0-100 kmph</div>
          </div>
        </div>
        <div className="flex items-center mr-5 lg:mr-20">
          <Image
            src="/road_icon.png"
            alt="road_icon"
            width={46}
            height={65}
            className="mr-4"
          />
          <div className="info_block_text">
            <div className="font-semibold text-2xl lg:text-4xl leading-[43px]">
              632 <span>km</span>
            </div>
            <div className="text-sm lg:text-base">power reserve</div>
          </div>
        </div>
        <div className="flex items-center text-center uppercase text-sm font-bold leading-4">
          <Image
            src="/steering-wheel.png"
            alt="steering_wheel"
            width={22}
            height={22}
            className="mr-2"
          />
          <div>test drive</div>
        </div>

        <OrderButton />
      </div>

      <div className="flex justify-center mt-5 lg:mt-0">
        <a href="#footer">
          <Image src="/arrow_bottom.png" alt="arrow" width={34} height={20} />
        </a>
      </div>
    </div>
  );
}
