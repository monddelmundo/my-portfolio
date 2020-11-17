import styled from "styled-components";
import { Content } from "carbon-components-react/lib/components/UIShell";
import Particles from "react-particles-js";

export const StyledContent = styled(Content)`
  min-height: 100vh;
  @media (max-width: 640px) {
    margin-left: 0 !important;
  }
`;

export const StyledParticles = styled(Particles)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`;
