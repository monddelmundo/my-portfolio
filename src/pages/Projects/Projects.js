import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Pill } from "../../styles";
import {
  ProjectItem,
  ProjectTitle,
  ProjectDescription,
  SkillContainer,
  Button,
} from "./styles";

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{++i + ".) " + project.name}</ProjectTitle>
              <ProjectDescription>{project.summary}</ProjectDescription>
              <Button href={project.website}>View Project</Button>
              <Button href={project.githubUrl}>Check source code</Button>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
