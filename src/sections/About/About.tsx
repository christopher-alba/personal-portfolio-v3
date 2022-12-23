import { FC } from "react";
import {
  LeftWrapper,
  LeftWrapperOverlay,
  MainWrapper,
  RightWrapper,
} from "./styled";

const About: FC = () => {
  return (
    <MainWrapper>
      <LeftWrapper>
        <LeftWrapperOverlay />
      </LeftWrapper>
      <RightWrapper></RightWrapper>
    </MainWrapper>
  );
};

export default About;
