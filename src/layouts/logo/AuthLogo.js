import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import LogoDarkIcon from "../../assets/images/logos/dark-logo-icon.svg";
import LogoDarkText from "../../assets/images/logos/dark-logo-text.svg";
import LogoWhiteIcon from "../../assets/images/logos/white-logo-icon.svg";
import LogoWhiteText from "../../assets/images/logos/white-logo-text.svg";

const AuthLogo = () => {
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  const activeSidebarBg = useSelector((state) => state.customizer.sidebarBg);

  return (
    <div className="p-4 d-flex justify-content-center gap-2">
      <Link href="/">
        <a className="d-flex align-items-center gap-2">
          {isDarkMode || activeSidebarBg !== "white" ? (
            <>
              <Image src={LogoWhiteIcon} alt="logo" />
              <Image src={LogoWhiteText} alt="logo" />
            </>
          ) : (
            <>
              <Image src={LogoDarkIcon} alt="logo" />
              <Image src={LogoDarkText} alt="logo" />
            </>
          )}
        </a>
      </Link>
    </div>
  );
};

export default AuthLogo;
