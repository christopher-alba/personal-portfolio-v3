import { FC } from "react";
import {
  ContentBottom,
  ContentTop,
  ContentWrapper,
  DivOuter,
  DivTop,
  VideoBottom,
  TechWrapper,
  SocialDiv,
  TechPill,
  IconLinkWrapper,
} from "./styled";
import SectionTitle from "../../components/SectionTitle";
import { Link } from "react-router-dom";
import { ButtonPlain, ButtonTertiary } from "../../components/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { SpanTertiary } from "../About/styled";
import { ProjectSubTitle } from "../Projects/styled";
import recentTech from "./recentTech.json";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Contact: FC = () => {
  return (
    <DivOuter>
      <div
        style={{ position: "absolute", top: 0, height: "100%", width: "100%" }}
      >
        <DivTop></DivTop>
        <VideoBottom src="/images/contactnew.mp4" autoPlay muted loop />
      </div>
      <ContentWrapper>
        <ContentTop>
          <SectionTitle number={5} title="Looking for a Software Engineer?" />
          <p>
            <SpanTertiary>
              I'm not currently looking for any new opportunities in software
              engineering.
            </SpanTertiary>{" "}
            However, if you really want to have a chat, feel free to contact me
            and I'll entertain your call, email or message. Find the information
            you need to contact me in my CV.
          </p>
          <Link to="./cv.pdf" download target="_blank" rel="noreferrer">
            <ButtonTertiary tabIndex={-1}>
              <FontAwesomeIcon
                style={{ marginRight: "10px" }}
                icon={faDownload}
              />
              CV
            </ButtonTertiary>
          </Link>
        </ContentTop>
        <ContentBottom>
          <ProjectSubTitle>Recently Used Technologies</ProjectSubTitle>
          <TechWrapper>
            {recentTech.map((tech) => (
              <TechPill>{tech}</TechPill>
            ))}
          </TechWrapper>
          <SocialDiv>
            <IconLinkWrapper
              href="https://github.com/christopher-alba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </IconLinkWrapper>
            <IconLinkWrapper
              href="https://www.linkedin.com/in/christopher-alba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </IconLinkWrapper>
            <IconLinkWrapper
              href="https://www.instagram.com/alba.sy.chris/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </IconLinkWrapper>
            <IconLinkWrapper
              href="https://www.facebook.com/christopher.alba.357/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </IconLinkWrapper>
          </SocialDiv>
          <p>
            This website was made by myself (Christopher Sy Alba). Visit the
            Github repo to fork it and use the theme for your own personal
            website. Please give credit to myself when using it though.
          </p>
          <a
            href="https://github.com/christopher-alba/personal-portfolio-v3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonPlain tabIndex={-1}>Github - Fork This Website!</ButtonPlain>
          </a>
        </ContentBottom>
      </ContentWrapper>
    </DivOuter>
  );
};

export default Contact;
