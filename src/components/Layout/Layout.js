import React from "react";
import Sidebar from "../Sidebar";
import UserHeader from "../UserHeader";
import MobileNav from "../MobileNav";
import { StyledContent, StyledParticles } from "./styles";

const particlesOptions = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    line_linked: {
      color: "#f44242",
      opacity: 0.5,
    },
  },
};

const Layout = ({ user, children }) => {
  return (
    <>
      <MobileNav />
      <Sidebar />
      <StyledContent>
        <StyledParticles className="particles" params={particlesOptions} />
        <UserHeader user={user} />
        <div>{children}</div>
      </StyledContent>
    </>
  );
};

export default Layout;
