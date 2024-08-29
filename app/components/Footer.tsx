"use client";
import React, { useState } from "react";
import Image from "next/image";
import Order from "./Order";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [order, setOrder] = useState(false);
  const openOrder = () => setOrder(true);
  const closeOrder = () => setOrder(false);
  return (
    <footer>
      <div className="container">
        <div className="relative text-white text-center  bg-cover bg-center bg-no-repeat bg-primary-red md:text-left border-t-2">
          <div className="flex flex-col md:flex-row md:gap-10">
            <nav className="flex text-center flex-grow flex-col mb-5 md:flex-row">
              <div className=" mt-4 flex justify-center md:inline-block md:justify-start md:mt-0 z-[5]">
                <a href="#">
                  <Image
                    src="/tesla_logo_black.png"
                    alt="tesla_logo"
                    width={100}
                    height={24}
                    className="relative z-5"
                  />
                </a>
              </div>
              <div className="flex z-9 mt-4 flex-grow justify-evenly flex-col md:flex-row text-center md:mt-0">
                <ul>
                  <li>
                    <a
                      className=" text-light-color no-underline transition-colors duration-300 hover:text-black"
                      href="#shop"
                    >
                      Shop
                    </a>
                  </li>
                  <li>
                    <a
                      className=" text-light-color no-underline transition-colors duration-300 hover:text-black"
                      href="#signup"
                    >
                      Sign up
                    </a>
                  </li>
                  <li>
                    <a
                      className=" text-light-color no-underline transition-colors duration-300 hover:text-black"
                      href="#"
                    >
                      Models
                    </a>
                  </li>
                  <li>
                    <a
                      className=" text-light-color no-underline transition-colors duration-300 hover:text-black"
                      href="#contacts"
                      onClick={openOrder}
                    >
                      Order
                    </a>
                    {order && <Order onOrderClose={closeOrder} />}
                  </li>
                </ul>
                <address className="flex justify-center text-center mt-4 md:mt-0 not-italic">
                  <ul>
                    <li className="flex justify-center  md:block">
                      <a
                        className=" max-w-[211px] text-light-color hover:text-black transition-colors flex flex-col md:flex-row"
                        href="tel:+380960000007"
                      >
                        + 1 (325) 333 7777
                      </a>
                    </li>
                    <li className="flex justify-center md:block">
                      <a
                        className="  max-w-[211px] text-light-color hover:text-black transition-colors flex flex-col md:flex-row "
                        href="mailto:shopbakery@gmail.com"
                      >
                        tesla@gmail.com
                      </a>
                    </li>
                    <li className="flex justify-center  md:block">
                      <a
                        className="  max-w-[290px] text-light-color hover:text-black transition-colors flex flex-col md:flex-row z-20"
                        href="https://maps.app.goo.gl/S6ubsjYejrpp1G1W6"
                        target="_blank"
                      >
                        Victoria, BC, 101-3277 Quadra st.
                      </a>
                    </li>
                    <li>
                      <div className="flex space-x-4 justify-center md:justify-start">
                        <a
                          className="text-light-color hover:text-brand-color transition-colors flex items-center z-20"
                          href="#"
                        >
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-2xl hover:text-black"
                          />
                        </a>
                        <a
                          className="text-light-color hover:text-brand-color transition-colors flex items-center z-20"
                          href="#"
                        >
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="text-2xl hover:text-black"
                          />
                        </a>
                        <a
                          className="text-light-color hover:text-brand-color transition-colors flex items-center z-20"
                          href="#"
                        >
                          <FontAwesomeIcon
                            icon={faYoutube}
                            className="text-2xl hover:text-black"
                          />
                        </a>
                      </div>
                    </li>
                  </ul>
                </address>
              </div>
            </nav>
            <ul className="mt-5 mr-5">
              <li className="flex justify-center lg:block">
                <a
                  className="text-sm font-semibold max-w-[211px] text-light-color hover:text-brand-color transition-colors flex flex-col md:flex-row items-start hover:text-black"
                  href="#"
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <p className="text-[14px] font-semibold">
                  &copy;Data is protected!
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
