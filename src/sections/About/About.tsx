import { FC, useEffect } from "react";
import {
  Content,
  ContentWrapper,
  IntroImg,
  IntroText,
  LeftWrapper,
  LeftWrapperOverlay,
  MainWrapper,
  MobileTrigger,
  RightWrapper,
  SectionIntro,
  SpanTertiary,
} from "./styled";
import SectionTitle from "../../components/SectionTitle";
import { ButtonYouTube } from "../../components/Buttons";
import ResponsiveCarousel from "../../components/ResponsiveCarousel";
import { StyledVideo, VideoWrapper } from "./styled";

const About: FC = () => {
  useEffect(() => {
    (document.getElementById("VideoAbout") as any).playbackRate = 0.7;
  }, []);
  return (
    <MainWrapper>
      <LeftWrapper>
        <VideoWrapper style={{ zIndex: 0 }}>
          <StyledVideo
            id="VideoAbout"
            src="/images/aboutnew.mp4"
            autoPlay
            muted
            loop
            style={{
              margin: "0 auto",
              width: "100%",
              height: "150vh",
              objectFit: "cover",
            }}
          />
        </VideoWrapper>
        <LeftWrapperOverlay />
      </LeftWrapper>
      <RightWrapper>
        <ContentWrapper>
          <SectionIntro>
            <IntroImg src="/images/profileImage.png" />
            <IntroText>
              Who am I<SpanTertiary>?</SpanTertiary>
            </IntroText>
            <IntroText>
              What am I<SpanTertiary>?</SpanTertiary>
            </IntroText>
            <IntroText>
              Where am I<SpanTertiary>?</SpanTertiary>
            </IntroText>
            <MobileTrigger>Learn the answers...</MobileTrigger>
          </SectionIntro>
          <Content>
            <SectionTitle number={1} title="About Me" />
            <p>
              From a young age I’ve enjoyed design and problem solving. Fast
              forward to the present, and I’m applying my creativity in software
              development or engineering. My career path is currently in web
              development, and I have a preference towards frontend development.
              This is due to my appreciation for the user experience. However,
              the backend also allows me to use my creativity to come up with
              solutions. Therefore, I am also interested in backend or fullstack
              roles.
            </p>
            <p>
              In my spare time, I enjoy playing video games and watching movies.
              I use to play a bit of Minecraft, and built many designs from
              modern houses, to skyscrapers. I even have a YouTube channel
              called Valkraft which showcases timelapses of some of my Minecraft
              builds.{" "}
            </p>
            <p>
              Other games I play include: League of Legends, Overwatch 2, Lost
              Ark Some Movies I’m interested in: Star Wars, Marvel Cinematic
              Universe
            </p>
            <a
              href="https://www.youtube.com/@valkraft5375"
              target="_blank"
              rel="noreferrer"
            >
              <ButtonYouTube>
                YouTube - <strong>Valkraft</strong>
              </ButtonYouTube>
            </a>

            <ResponsiveCarousel>
              <div>
                <img draggable="false" src="images/modernhouse1.png" />
              </div>
              <div>
                <img draggable="false" src="images/modernhouse2.png" />
              </div>
              <div>
                <img draggable="false" src="images/modernhouse3.png" />
              </div>
              <div>
                <img draggable="false" src="images/modernhouse4.png" />
              </div>
              <div>
                <img draggable="false" src="images/modernhouse5.png" />
              </div>
              <div>
                <img draggable="false" src="images/modernhouse6.png" />
              </div>
              <div>
                <img draggable="false" src="images/skyscraper1.png" />
              </div>
              <div>
                <img draggable="false" src="images/skyscraper2.png" />
              </div>
              <div>
                <img draggable="false" src="images/skyscraper3.png" />
              </div>
              <div>
                <img draggable="false" src="images/skyscraper4.png" />
              </div>
            </ResponsiveCarousel>
          </Content>
        </ContentWrapper>
      </RightWrapper>
    </MainWrapper>
  );
};

export default About;
