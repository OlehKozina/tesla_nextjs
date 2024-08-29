"use client";
import React, { useState } from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const MobileButton = () => {
  const [mobMenu, setMobMenu] = useState(false);
  const openMobMenu = () => setMobMenu(true);
  const closeMobMenu = () => setMobMenu(false);

  return (
    <>
      <button id="menu_button" type="button" onClick={openMobMenu}>
        <Image src="/menu.png" alt="menu_bars" height={35} width={35} />
      </button>
      {mobMenu && <MobileMenu onClose={closeMobMenu} />}
    </>
  );
};

export default MobileButton;
