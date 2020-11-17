import styled from "styled-components";
import { white } from "@carbon/colors";

export const ProjectItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`;

export const ProjectTitle = styled.h4`
  font-weight: bold;
`;

export const ProjectDescription = styled.h5`
  margin-bottom: 1rem;
`;

export const SkillContainer = styled.div`
  margin-top: 1.2rem;
`;

export const Button = styled.a`
  color: palevioletred;
  font-size: 1em;
  margin-right: 16px;
  border-radius: 3px;
`;
