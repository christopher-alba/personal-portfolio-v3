import { FC, useContext, useEffect, useState } from "react";
import { ProjectStatus, projects } from "./projectData";
import {
  CarouselButton,
  ContentWrapper,
  DevicePill,
  MainDiv,
  OuterDiv,
  PSArchived,
  PSFeatured,
  PSSNLD,
  PSUC,
  ProjectImg,
  ProjectStatuses,
  ProjectSubTitle,
  StyledHR,
  TagsWrapper,
  TagsWrapperOuter,
  TagsWrapperWrapper,
  Thumbnail,
  ThumbnailWrapper,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "styled-components";
import SectionTitle from "../../components/SectionTitle";
import { TechPill } from "../Journey/styled";
import { ButtonPlain, ButtonTertiary } from "../../components/Buttons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects: FC = () => {
  const [index, setIndex] = useState(0);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const ele = document.getElementById("projectsThumbWrapper") as any;

    ele.scrollLeft = 0;
    let pos = { top: 0, left: 0, x: 0, y: 0 };
    const mouseMoveHandler = function (e: any) {
      // How far the mouse has been moved

      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;
      // Scroll the element
      ele.scrollTop = pos.top - dy;
      ele.scrollLeft = pos.left - dx;
    };
    const mouseUpHandler = function () {
      ele.style.cursor = "grab";
      ele.style.removeProperty("user-select");
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
    const mouseDownHandler = function (e: any) {
      pos = {
        // The current scroll
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      };
      document.addEventListener("mousemove", mouseMoveHandler);
    };
    ele.addEventListener("mousedown", mouseDownHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  }, []);

  const incrementIndex = () => {
    if (index < projects.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const decrementIndex = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(projects.length - 1);
    }
  };
  const project = projects[index];
  return (
    <OuterDiv>
      <SectionTitle number={3} title="Personal Projects" />
      <MainDiv>
        <CarouselButton onClick={decrementIndex}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </CarouselButton>
        <ProjectImg src={project.imgSrc} />
        <ContentWrapper>
          <h1>{project.name}</h1>
          <ProjectStatuses>
            {project.status.map((state) => {
              if (state === ProjectStatus.ARCHIVED) {
                return <PSArchived>Archived</PSArchived>;
              } else if (state === ProjectStatus.FEATURED) {
                return <PSFeatured>Featured</PSFeatured>;
              } else if (state === ProjectStatus.SERVERNOLONGERDEPLOYED) {
                return <PSSNLD>Server Not Deployed</PSSNLD>;
              } else if (state === ProjectStatus.UNDERCONSTRUCTION) {
                return <PSUC>Under Construction</PSUC>;
              }
            })}
          </ProjectStatuses>
          <p>{project.description}</p>
          {(project.website?.length || -1) > 0 && (
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              <ButtonTertiary
                tabIndex={-1}
                style={{
                  minWidth: "100px",
                  marginRight: "10px",
                  marginTop: "10px",
                }}
              >
                Visit
              </ButtonTertiary>
            </a>
          )}
          {(project.download?.length || -1) > 0 && (
            <a
              href={project.download}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonTertiary
                tabIndex={-1}
                style={{
                  minWidth: "100px",
                  marginRight: "10px",
                  marginTop: "10px",
                }}
              >
                Download
              </ButtonTertiary>
            </a>
          )}
          {project.github.map((githubObj) => (
            <a href={githubObj.url} target="_blank" rel="noopener noreferrer">
              <ButtonPlain
                style={{
                  marginTop: "10px",
                  marginRight: "10px",
                }}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ marginRight: "10px" }}
                />
                Github - {githubObj.type}
              </ButtonPlain>
            </a>
          ))}
          <StyledHR />
          <TagsWrapperWrapper>
            <TagsWrapperOuter>
              <ProjectSubTitle>Technologies</ProjectSubTitle>
              <TagsWrapper>
                {project.tags.map((tag) => (
                  <TechPill>{tag}</TechPill>
                ))}
              </TagsWrapper>
            </TagsWrapperOuter>
            <TagsWrapperOuter>
              <ProjectSubTitle>Devices</ProjectSubTitle>
              <TagsWrapper>
                {project.devices.map((device) => (
                  <DevicePill>{device}</DevicePill>
                ))}
              </TagsWrapper>
            </TagsWrapperOuter>
          </TagsWrapperWrapper>
        </ContentWrapper>
        <CarouselButton onClick={incrementIndex}>
          <FontAwesomeIcon icon={faChevronRight} />
        </CarouselButton>
      </MainDiv>
      <ThumbnailWrapper id="projectsThumbWrapper">
        {projects.map((project, indexProject) => (
          <Thumbnail
            src={project.imgSrc}
            onClick={() => setIndex(indexProject)}
            style={{
              outline:
                index === indexProject
                  ? `4px solid ${theme.colors.secondaryMain}`
                  : "",
            }}
          />
        ))}
      </ThumbnailWrapper>
    </OuterDiv>
  );
};

export default Projects;
