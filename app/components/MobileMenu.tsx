import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface MobMenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobMenuProps> = ({ onClose }) => {
  return (
    <section className="relative z-30">
      <div className="fixed top-0 left-0 w-full h-full bg-primary-red">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={onClose}
          className="text-xl relative left-20 hover:text-white"
        />
        <ul className="flex flex-col gap-5">
          <li>
            <a
              href="#"
              className="text-white font-semibold text-lg pb-[5px] hover:text-black hover:border-b hover:border-primary-red"
              onClick={onClose}
            >
              Model S
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white menu_close font-semibold text-lg pb-[5px] hover:text-black hover:border-b hover:border-primary-red"
              onClick={onClose}
            >
              Model X
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white menu_close font-semibold text-lg pb-[5px] hover:text-black hover:border-b hover:border-primary-red"
              onClick={onClose}
            >
              Model 3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white menu_close font-semibold text-lg pb-[5px] hover:text-black hover:border-b hover:border-primary-red"
              onClick={onClose}
            >
              Roadster
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white menu_close font-semibold text-lg pb-[5px] hover:text-black hover:border-b hover:border-primary-red"
              onClick={onClose}
            >
              Energy
            </a>
          </li>
          <li>
            <Image
              src="/tesla_logo_black.png"
              alt="logo_black"
              width={35}
              height={35}
              className="relative left-16"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MobileMenu;
