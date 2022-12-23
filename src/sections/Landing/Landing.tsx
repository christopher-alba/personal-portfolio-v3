import { FC } from "react";
import {
  HiddenImg,
  JobPosition,
  LastName,
  LeftWrapper,
  LeftWrapperBackground,
  MainWrapper,
  Name,
  OtherTitles,
  PatternRectangleSquare,
  PatternSquare,
  RightWrapper,
  SubHeading,
  SubHeadingWrapper,
  SubHeadingWrapperInnerLeft,
} from "./styled";
import { ButtonSecondary, ButtonTertiary } from "../../components/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Landing: FC = () => {
  return (
    <MainWrapper>
      <LeftWrapper>
        <div style={{ position: "absolute", zIndex: 1 }}>
          <SubHeadingWrapper>
            <SubHeadingWrapperInnerLeft>
              <PatternSquare />
              <SubHeading>Hi there. I'm</SubHeading>
            </SubHeadingWrapperInnerLeft>
            <PatternRectangleSquare />
          </SubHeadingWrapper>
          <Name>Christopher</Name>
          <LastName>Sy Alba.</LastName>
        </div>
        <HiddenImg></HiddenImg>
        <LeftWrapperBackground></LeftWrapperBackground>
      </LeftWrapper>

      <RightWrapper>
        <div>
          <JobPosition>Software Engineer @ TAG Digital</JobPosition>
          <OtherTitles>Computer Systems Engineering Graduate @ UoA</OtherTitles>
          <OtherTitles>Web Development Specialist</OtherTitles>
          <Link to="./cv.pdf" download target="_blank" rel="noreferrer">
            <ButtonTertiary tabIndex={-1}>
              <FontAwesomeIcon
                style={{ marginRight: "10px" }}
                icon={faDownload}
              />
              CV
            </ButtonTertiary>
          </Link>

          <ButtonSecondary>Learn More</ButtonSecondary>
        </div>
      </RightWrapper>
    </MainWrapper>
  );
};

export default Landing;
