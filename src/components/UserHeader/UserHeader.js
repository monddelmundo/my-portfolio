import React from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight16 } from "@carbon/icons-react";

import { HeaderContainer, Header, Image, ViewResumeLink, H2 } from "./styles";

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === "/"}>
      <Header>
        <Image src={user.basics.picture} />
        <div>
          <H2>{user.basics.name}</H2>
          {/* <h4>
            <a
              href={`https://gitconnected.com/${user.basics.username}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{user.basics.username}
            </a>
          </h4> */}
          <p>Currently works at {user.basics.label}</p>
          <p>Lives in {user.basics.region}</p>
          <p>
            {user.basics.yearsOfExperience} years of experience as a Software
            Engineer
          </p>
          <p>{user.basics.headline}</p>
          {/* <p>
            Blog:{" "}
            <a
              href={user.basics.blog}
              target="_blank"
              rel="noreferrer noopener"
            >
              {user.basics.blog}
            </a>
          </p> */}
        </div>
      </Header>
      <div>
        <ViewResumeLink
          // href={`https://gitconnected.com/${user.basics.username}/resume`}
          href={`https://drive.google.com/file/d/15Fbpesin1wpGHT4byzKj0eEqXluu4UZU/view?usp=sharing`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Résumé</span>
          <ArrowRight16 />
        </ViewResumeLink>
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;
